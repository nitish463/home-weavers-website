# Home Weavers Deployment

This project is ready to publish as a Render web service.

## Render

Create a new Render Web Service from the GitHub repo.

- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`
- Health check: `/api/health`

Render can also read `render.yaml`.

## Environment Variables

Add secrets in Render, not in the code:

```bash
CONTACT_TO=nitish@homeweavers.net
CONTACT_FROM=Home Weavers Website <contact@mail.homeweavers.com>
RESEND_API_KEY=
OPENAI_API_KEY=
SHIPSTATION_API_KEY=
SHIPSTATION_API_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## API Status

Current backend:

- `/api/health` shows which integrations are configured.
- `/api/contact` sends Contact Us email through Resend when `RESEND_API_KEY` is added.
- `/api/openai/*` placeholder is ready for ChatGPT features.
- `/api/shipstation/*` placeholder is ready for ShipStation rates/orders.

## Next Backend Work

1. Customer sign up/sign in with Google and Apple.
2. Customer account page and order history.
3. Stripe checkout/payment.
4. ShipStation shipping rates before payment.
5. Create ShipStation order after payment.
6. ShipStation tracking webhook back to customer order page.
7. Real ChatGPT/OpenAI product descriptions, email copy, and banner generation.
