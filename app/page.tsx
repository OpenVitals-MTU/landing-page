import Image from 'next/image'
import type { CSSProperties } from 'react'

const docsUrl = 'https://docs.openvitals.health'
const installUrl = `${docsUrl}/app/install`
const privacyUrl = `${docsUrl}/app/privacy`
const supportUrl = `${docsUrl}/support`
const codeUrl = 'https://codeberg.org/OpenVitals/mobile-app'
const translateUrl = 'https://translate.codeberg.org/projects/openvitals/mobile-app/'
const liberapayUrl = 'https://liberapay.com/manuel.mmarca.tech/donate'
const releasesUrl = `${codeUrl}/releases`
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=tech.mmarca.openvitals'
const fdroidUrl = 'https://f-droid.org/en/packages/tech.mmarca.openvitals/'
const healthConnectDocsUrl = `${docsUrl}/app/health-connect`

const proofPoints = [
  'No OpenVitals cloud account',
  'No app-level internet permission',
  'No ads or analytics SDK',
  'Health Connect stays the source of truth'
]

const featureCards = [
  {
    title: 'Every metric in one place',
    text: 'Activity, sleep, heart, body, hydration, and nutrition on one daily dashboard. Trends, statistics, and detail screens are one tap deeper when you want to know what changed.',
    accent: '#0f766e'
  },
  {
    title: 'Import what you already have',
    text: 'Bring in Apple Health exports, FIT, GPX, KML/KMZ, TCX, and CSV files, one at a time or whole folders. The history you built elsewhere comes with you.',
    accent: '#2f6f9f'
  },
  {
    title: 'Record activities and workouts',
    text: 'GPS routes drawn on offline maps, BLE heart-rate, cadence, and power sensors, voice announcements, laps, and rep counting. Written to Health Connect only when you save.',
    accent: '#d95c3f'
  },
  {
    title: 'Works with your watch',
    text: "Sync your watch into Health Connect with Gadgetbridge or your vendor's app, and OpenVitals brings it all together: sleep, heart rate, HRV, steps, and workouts in one dashboard.",
    accent: '#a07b00'
  },
  {
    title: 'Log the numbers only you know',
    text: 'Weight, height, blood pressure, glucose, meals, drinks, and mindfulness minutes. Quick manual entry, with reminders and home-screen widgets.',
    accent: '#1f9d55'
  },
  {
    title: 'Insights made on your phone',
    text: 'Sleep scores, Body Energy, and daily readiness are computed on-device against your own baselines. No cloud reads your data to tell you how you slept.',
    accent: '#6b5dd3'
  }
]

const wearablePoints = [
  {
    title: 'Bring the watch you have',
    text: "Any wearable whose companion app writes to Health Connect works, whether that's Gadgetbridge or the vendor's own app."
  },
  {
    title: 'One place for all of it',
    text: 'Sleep stages, heart rate, HRV, steps, and workouts land in Health Connect, and OpenVitals turns them into one clear dashboard.'
  },
  {
    title: 'Live sensors stay direct',
    text: 'BLE heart-rate straps and cadence and power sensors still connect to the app for live data while you record a workout.'
  }
]

const screenshotSet = [
  {
    src: '/images/daily-readiness.png',
    alt: 'OpenVitals Daily Readiness detail screen',
    label: 'Readiness'
  },
  {
    src: '/images/activity-recording.png',
    alt: 'OpenVitals activity recording screen',
    label: 'Recording'
  },
  {
    src: '/images/sleep.png',
    alt: 'OpenVitals sleep tracking screen',
    label: 'Sleep'
  },
  {
    src: '/images/hydration-entry.png',
    alt: 'OpenVitals hydration entry screen',
    label: 'Hydration'
  }
]

const installCards = [
  {
    title: 'Google Play',
    text: 'Use the standard Android install and update path.',
    href: playStoreUrl,
    badge: '/images/google-play-badge.png',
    alt: 'Get it on Google Play'
  },
  {
    title: 'F-Droid',
    text: 'Install through the free and open-source Android app store.',
    href: fdroidUrl,
    badge: '/images/fdroid-badge.svg',
    alt: 'Get it on F-Droid'
  },
  {
    title: 'Codeberg releases',
    text: 'Download signed APK releases directly from the project.',
    href: releasesUrl,
    badge: '/images/codeberg-releases-badge.svg',
    alt: 'Get it on Codeberg'
  }
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h12.1m-4.6-5 5 5-5 5" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m5 12 4.1 4.1L19 6.2" />
    </svg>
  )
}

function PhoneShot({
  src,
  alt,
  priority = false,
  className = ''
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={`phone-shot ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 56vw, 260px"
      />
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="OpenVitals home">
          <Image
            src="/images/openvitals-logo.png"
            alt=""
            width={40}
            height={28}
            priority
          />
          <span>OpenVitals</span>
        </a>
        <nav>
          <a href="#privacy">Privacy</a>
          <a href="#features">Features</a>
          <a href={docsUrl}>Docs</a>
          <a className="nav-action" href="#install">
            Install
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <PhoneShot
            src="/images/dashboard.png"
            alt=""
            priority
            className="phone-shot-primary"
          />
          <PhoneShot
            src="/images/daily-readiness.png"
            alt=""
            priority
            className="phone-shot-secondary"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Local-first health tools for Android</p>
          <h1>OpenVitals</h1>
          <p className="hero-lede">
            A private Health Connect dashboard for viewing, logging, importing,
            and understanding your health data without accounts, ads, analytics,
            or an OpenVitals cloud.
          </p>
          <div className="hero-actions" aria-label="OpenVitals actions">
            <a className="button button-primary" href="#install">
              Install on Android
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href={docsUrl}>
              Read the docs
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="OpenVitals privacy guarantees">
        {proofPoints.map((point) => (
          <div className="proof-item" key={point}>
            <CheckIcon />
            <span>{point}</span>
          </div>
        ))}
      </section>

      <section className="section section-intro">
        <div className="section-copy">
          <p className="eyebrow">Built for people, not profiles</p>
          <h2>Health data should be useful without becoming someone else's dataset.</h2>
        </div>
        <p className="section-text">
          OpenVitals reads supported Health Connect records, turns them into clear
          daily views and detail screens, and keeps control close to the device.
          You decide which permissions to grant and when anything gets written.
        </p>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-copy">
          <p className="eyebrow">Privacy stance</p>
          <h2>No account. No feed. No background data business.</h2>
          <p>
            The Android app is designed around explicit local flows. It reads
            Health Connect, stores app preferences on device, and writes health
            records only after a save, import, record, edit, or delete action.
          </p>
          <a className="text-link" href={privacyUrl}>
            Review the privacy details
            <ArrowIcon />
          </a>
        </div>
        <div className="privacy-list" aria-label="Privacy details">
          <div>
            <strong>Local by default</strong>
            <span>No OpenVitals server is needed for the app dashboard.</span>
          </div>
          <div>
            <strong>User-granted access</strong>
            <span>Health Connect permissions stay visible and deliberate.</span>
          </div>
          <div>
            <strong>Open source</strong>
            <span>The Android app and documentation are available on Codeberg.</span>
          </div>
        </div>
      </section>

      <section className="devices-section" id="devices">
        <div className="devices-copy">
          <p className="eyebrow">Wearables</p>
          <h2>Works with your watch, through Health Connect.</h2>
          <p>
            OpenVitals does not pair with watches directly. Your watch syncs
            into Health Connect via Gadgetbridge or your vendor&apos;s app, and
            OpenVitals reads it there and brings it all together into one
            private dashboard.
          </p>
          <a className="text-link" href={healthConnectDocsUrl}>
            How Health Connect syncing works
            <ArrowIcon />
          </a>
        </div>
        <div className="devices-list" aria-label="Watch and sensor support">
          {wearablePoints.map((point) => (
            <div key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-section" id="features">
        <div className="section-heading">
          <p className="eyebrow">What it does</p>
          <h2>See it, import it, record it, log it, and understand it. All on the phone.</h2>
        </div>
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article
              className="feature-card"
              key={feature.title}
              style={{ '--accent': feature.accent } as CSSProperties}
            >
              <span aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screens-section" aria-label="OpenVitals screenshots">
        <div className="section-heading">
          <p className="eyebrow">Product views</p>
          <h2>Designed for scanning today, then going deeper when it matters.</h2>
        </div>
        <div className="screens-grid">
          {screenshotSet.map((screenshot) => (
            <figure key={screenshot.label}>
              <PhoneShot src={screenshot.src} alt={screenshot.alt} />
              <figcaption>{screenshot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="install-section" id="install">
        <div>
          <p className="eyebrow">Get OpenVitals</p>
          <h2>Install OpenVitals on Android.</h2>
          <p>
            Choose the Android channel that fits how you update apps. OpenVitals
            is also available as signed releases for people who prefer direct
            project downloads.
          </p>
        </div>
        <div className="install-card-grid">
          {installCards.map((card) => (
            <a className="install-card" href={card.href} key={card.title}>
              <span className="badge-frame">
                <img
                  src={card.badge}
                  alt={card.alt}
                  loading="lazy"
                />
              </span>
              <span>
                <strong>{card.title}</strong>
                <small>{card.text}</small>
              </span>
            </a>
          ))}
        </div>
        <div className="install-links" aria-label="More install resources">
          <a href={installUrl}>
            Install guide
            <ArrowIcon />
          </a>
          <a href={supportUrl}>
            Support OpenVitals
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="support-section" aria-labelledby="support-heading">
        <div>
          <p className="eyebrow">Support the project</p>
          <h2 id="support-heading">Help OpenVitals grow.</h2>
          <p>
            Translate the Android app for more people, or fund the ongoing
            development, testing, documentation, releases, and maintenance
            behind this free and open-source project.
          </p>
        </div>
        <div className="support-actions" aria-label="Support OpenVitals">
          <a className="button button-primary" href={translateUrl}>
            Translate OpenVitals
            <ExternalIcon />
          </a>
          <a className="liberapay-badge" href={liberapayUrl}>
            <img
              src="https://liberapay.com/assets/widgets/donate.svg"
              alt="Support OpenVitals on Liberapay"
              width="83"
              height="30"
              loading="lazy"
            />
          </a>
          <a className="button button-secondary" href={supportUrl}>
            More ways to support
            <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="OpenVitals home">
          <Image src="/images/openvitals-logo.png" alt="" width={34} height={24} />
          <span>OpenVitals</span>
        </a>
        <nav aria-label="Footer navigation">
          <a href={docsUrl}>Documentation</a>
          <a href={privacyUrl}>Privacy</a>
          <a href={codeUrl}>Source</a>
          <a href={translateUrl}>Translate</a>
          <a href={supportUrl}>Support</a>
        </nav>
      </footer>
    </main>
  )
}
