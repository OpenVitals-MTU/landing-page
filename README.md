# OpenVitals Landing Page

Marketing landing page for [openvitals.health](https://openvitals.health/), built with TypeScript, Next.js App Router, and the same standalone Docker/Fly.io deployment shape as the documentation site.

The page is available in the 14 languages of the app: English (`/en`), Czech (`/cs`), German (`/de`), Spanish (`/es`), Estonian (`/et`), Finnish (`/fi`), French (`/fr`), Galician (`/gl`), Italian (`/it`), Japanese (`/ja`), Polish (`/pl`), European Portuguese (`/pt`), Russian (`/ru`) and Simplified Chinese (`/zh`). Each language is one file in `lib/locales/`. Visiting `/` picks a locale from the `NEXT_LOCALE` cookie when set, otherwise from the browser `Accept-Language` header, and otherwise falls back to English. The header language control sets that cookie for later visits.

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

## License

The OpenVitals landing page is licensed under the [`GNU Affero General Public License v3.0 or later`](LICENSE).
