const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";
const root = __dirname;
const mailTo = process.env.CONTACT_TO || "nitish@homeweavers.net";
const mailFrom = process.env.CONTACT_FROM || "Home Weavers Website <onboarding@resend.dev>";
const resendApiKey = process.env.RESEND_API_KEY || "";
const openAiApiKey = process.env.OPENAI_API_KEY || "";
const shipStationApiKey = process.env.SHIPSTATION_API_KEY || "";
const shipStationApiSecret = process.env.SHIPSTATION_API_SECRET || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf"
};

const readBody = (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Message is too large."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });

const sendJson = (response, status, data) => {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(data));
};

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const sendContactEmail = async ({ name, email, message }) => {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is missing.");
  }

  const subject = `Home Weavers contact request from ${name}`;
  const html = `
    <h2>New Home Weavers contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: mailFrom,
      to: mailTo,
      reply_to: email,
      subject,
      html
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || "Email provider rejected the message.");
  }
};

const handleHealth = (_request, response) => {
  sendJson(response, 200, {
    ok: true,
    service: "home-weavers",
    integrations: {
      email: Boolean(resendApiKey),
      openai: Boolean(openAiApiKey),
      shipstation: Boolean(shipStationApiKey && shipStationApiSecret)
    }
  });
};

const handleIntegrationPlaceholder = (name) => (_request, response) => {
  sendJson(response, 501, {
    error: `${name} is ready to connect after deployment. Add the API keys in Render environment variables first.`
  });
};

const handleContact = async (request, response) => {
  try {
    const body = await readBody(request);
    const payload = JSON.parse(body || "{}");
    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const message = String(payload.message || "").trim();

    if (!name || !email || !message || !email.includes("@")) {
      sendJson(response, 400, { error: "Please enter name, email, and message." });
      return;
    }

    await sendContactEmail({ name, email, message });
    sendJson(response, 200, { ok: true });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unable to send email." });
  }
};

const serveStatic = (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root) || path.basename(filePath).startsWith(".")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    response.end(content);
  });
};

http
  .createServer((request, response) => {
    if (request.method === "GET" && request.url.startsWith("/api/health")) {
      handleHealth(request, response);
      return;
    }
    if (request.method === "POST" && request.url.startsWith("/api/contact")) {
      handleContact(request, response);
      return;
    }
    if (request.url.startsWith("/api/openai")) {
      handleIntegrationPlaceholder("ChatGPT/OpenAI")(request, response);
      return;
    }
    if (request.url.startsWith("/api/shipstation")) {
      handleIntegrationPlaceholder("ShipStation")(request, response);
      return;
    }
    serveStatic(request, response);
  })
  .listen(port, host, () => {
    console.log(`Home Weavers running at http://localhost:${port}`);
  });
