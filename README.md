# OpenVitals Landing Page

Marketing landing page for [openvitals.health](https://openvitals.health/), built with TypeScript, Next.js App Router, and the same standalone Docker/Fly.io deployment shape as the documentation site.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm start
```

Fly.io deployment uses `fly.toml` and the included multi-stage `Dockerfile`.
