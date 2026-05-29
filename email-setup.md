# Home Weavers Email Setup

The Contact Us form is ready to send real email through the backend endpoint at `/api/contact`.

## Recommended setup

Use Google Workspace to receive messages at `nitish@homeweavers.net`, and use Resend to send website messages reliably.

## Steps

1. Create a Resend account.
2. Add and verify the domain `homeweavers.net`.
3. Add the DNS records Resend gives you.
4. Create an API key in Resend.
5. Set these environment variables on the server:

```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO=nitish@homeweavers.net
CONTACT_FROM=Home Weavers Website <contact@homeweavers.net>
PORT=4173
```

6. Run the site with:

```bash
node server.js
```

After this, Contact Us submissions will email `nitish@homeweavers.net`.

## Local testing

If `RESEND_API_KEY` is missing, the form still saves the customer message in the browser, but it will show that email sending is not connected yet.
