import type { Locale } from './i18n'

export type Messages = {
  meta: {
    title: string
    description: string
    ogDescription: string
    twitterDescription: string
  }
  nav: {
    primary: string
    privacy: string
    features: string
    docs: string
    install: string
    home: string
    language: string
  }
  hero: {
    eyebrow: string
    lede: string
    install: string
    docs: string
  }
  proof: {
    label: string
    points: string[]
  }
  intro: {
    eyebrow: string
    title: string
    text: string
  }
  privacy: {
    eyebrow: string
    title: string
    text: string
    link: string
    items: { title: string; text: string }[]
    detailsLabel: string
  }
  devices: {
    eyebrow: string
    title: string
    text: string
    link: string
    listLabel: string
    points: { title: string; text: string }[]
  }
  features: {
    eyebrow: string
    title: string
    cards: { title: string; text: string; accent: string }[]
  }
  screens: {
    label: string
    eyebrow: string
    title: string
    items: { src: string; alt: string; label: string }[]
  }
  reviews: {
    label: string
    eyebrow: string
    title: string
    text: string
    link: string
    trackLabel: string
    /** Accessible rating text; `{rating}` is replaced with the star count. */
    ratingLabel: string
    /** Shown on cards whose text is Google's translation of the original. */
    translatedNote: string
    items: {
      author: string
      rating: 1 | 2 | 3 | 4 | 5
      /** ISO date (YYYY-MM-DD) of the review, formatted per locale. */
      date: string
      text: string
      translated?: boolean
    }[]
  }
  install: {
    eyebrow: string
    title: string
    text: string
    moreLabel: string
    guide: string
    cards: {
      title: string
      text: string
      hrefKey: 'playStore' | 'fdroid' | 'releases'
      badge: string
      alt: string
    }[]
  }
  support: {
    eyebrow: string
    title: string
    text: string
    actionsLabel: string
    review: string
    translate: string
    liberapayAlt: string
    more: string
  }
  footer: {
    nav: string
    documentation: string
    privacy: string
    source: string
    translate: string
    support: string
  }
}

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: 'OpenVitals - Local-first Android health dashboard',
      description:
        'OpenVitals is a local-first Android app for viewing, logging, importing, and understanding Health Connect data without accounts, ads, or analytics.',
      ogDescription:
        'A local-first Android health dashboard powered by Health Connect, built without accounts, ads, or analytics.',
      twitterDescription:
        'Local-first Android health tools for Health Connect data, without accounts, ads, or analytics.'
    },
    nav: {
      primary: 'Primary navigation',
      privacy: 'Privacy',
      features: 'Features',
      docs: 'Docs',
      install: 'Install',
      home: 'OpenVitals home',
      language: 'Language'
    },
    hero: {
      eyebrow: 'Local-first health tools for Android',
      lede:
        'A private Health Connect dashboard for viewing, logging, importing, and understanding your health data without accounts, ads, analytics, or an OpenVitals cloud.',
      install: 'Install on Android',
      docs: 'Read the docs'
    },
    proof: {
      label: 'OpenVitals privacy guarantees',
      points: [
        'No OpenVitals cloud account',
        'No app-level internet permission',
        'No ads or analytics SDK',
        'Health Connect stays the source of truth'
      ]
    },
    intro: {
      eyebrow: 'Built for people, not profiles',
      title: "Health data should be useful without becoming someone else's dataset.",
      text:
        'OpenVitals reads supported Health Connect records, turns them into clear daily views and detail screens, and keeps control close to the device. You decide which permissions to grant and when anything gets written.'
    },
    privacy: {
      eyebrow: 'Privacy stance',
      title: 'No account. No feed. No background data business.',
      text:
        'The Android app is designed around explicit local flows. It reads Health Connect, stores app preferences on device, and writes health records only after a save, import, record, edit, or delete action.',
      link: 'Review the privacy details',
      detailsLabel: 'Privacy details',
      items: [
        {
          title: 'Local by default',
          text: 'No OpenVitals server is needed for the app dashboard.'
        },
        {
          title: 'User-granted access',
          text: 'Health Connect permissions stay visible and deliberate.'
        },
        {
          title: 'Open source',
          text: 'The Android app and documentation are available on Codeberg.'
        }
      ]
    },
    devices: {
      eyebrow: 'Wearables',
      title: 'Works with your watch.',
      text:
        "Connect any wearable through Gadgetbridge or your vendor's official app. Sync notifications, live heart rate, weather, and your calendar directly over Bluetooth. Everything flows into Health Connect, and OpenVitals brings it all together into one private dashboard.",
      link: 'How Health Connect syncing works',
      listLabel: 'Watch and sensor support',
      points: [
        {
          title: 'Any wearable that writes to Health Connect',
          text: 'Whether it uses Gadgetbridge or your vendor\'s official app, if the companion app syncs to Health Connect, OpenVitals sees it.'
        },
        {
          title: 'Sleep, heart rate, steps, and workouts',
          text: 'All your wearable metrics land in Health Connect: sleep stages, heart rate, HRV, steps, and workouts appear in one clear dashboard.'
        },
        {
          title: 'Live sensors stay direct',
          text: 'BLE heart-rate straps and cadence and power sensors still connect to the app for live data while you record a workout.'
        }
      ]
    },
    features: {
      eyebrow: 'What it does',
      title: 'See it, import it, record it, log it, and understand it. All on the phone.',
      cards: [
        {
          title: 'Every metric in one place',
          text: 'Activity, sleep, heart, body, hydration, nutrition, and cycle on one daily dashboard. Trends, statistics, and detail screens are one tap deeper when you want to know what changed.',
          accent: '#0f766e'
        },
        {
          title: 'Import what you already have',
          text: 'Bring in Apple Health exports, FIT, GPX, KML/KMZ, TCX, and CSV files, one at a time or whole folders. The history you built elsewhere comes with you.',
          accent: '#2f6f9f'
        },
        {
          title: 'Record activities and workouts',
          text: 'GPS routes drawn on offline maps that rotate and follow you, live CoMaps turn-by-turn guidance with the planned route on the map, BLE heart-rate, cadence, and power sensors, voice announcements, laps, and rep counting. Workout plans built once and run as guided sessions, with reps counted by the phone and rests that count down. Any workout exports without its route as TCX, FIT, or CSV. Written to Health Connect only when you save.',
          accent: '#d95c3f'
        },
        {
          title: 'Works with your watch',
          text: "Connect any wearable through Gadgetbridge or your vendor's app: sync notifications, live heart rate, weather, and calendar over Bluetooth, on a schedule if you want. Everything syncs through Health Connect into one unified dashboard.",
          accent: '#a07b00'
        },
        {
          title: 'Log the numbers only you know',
          text: 'Weight, height, blood pressure with its measurement context, HRV, glucose, meals, drinks, and mindfulness minutes. Quick manual entry, with reminders and home-screen widgets.',
          accent: '#1f9d55'
        },
        {
          title: 'A report your doctor can hold',
          text: 'Pick metrics and a time range, and the app builds a PDF on your phone: charts, statistics, and clinical sections for blood pressure, glucose, workouts, and sleep. Share it or save it; nothing is uploaded.',
          accent: '#4f5d9e'
        },
        {
          title: 'Cycle tracking that stays yours',
          text: 'Log flow, ovulation tests, cervical mucus, and basal temperature. Period days and next-period predictions are derived on-device, and everything lives only in Health Connect behind its own permission.',
          accent: '#b03a5b'
        },
        {
          title: 'Insights made on your phone',
          text: 'Sleep scores, Body Energy, and daily readiness are computed on-device against your own baselines. Body Energy reads how well you slept - efficiency, time awake, deep and REM - not just how long. No cloud reads your data to tell you how you slept.',
          accent: '#6b5dd3'
        }
      ]
    },
    screens: {
      label: 'OpenVitals screenshots',
      eyebrow: 'Product views',
      title: 'Designed for scanning today, then going deeper when it matters.',
      items: [
        {
          src: '/images/daily-readiness.png',
          alt: 'OpenVitals Body Energy detail screen',
          label: 'Body Energy'
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
    },
    reviews: {
      label: 'Google Play reviews',
      eyebrow: 'From Google Play',
      title: 'What people say after living with it.',
      text: 'Quoted verbatim from public reviews on the Google Play listing.',
      link: 'Read all reviews on Google Play',
      trackLabel: 'Reviews carousel, scroll sideways to see more',
      ratingLabel: '{rating} out of 5 stars',
      translatedNote: 'Translated by Google',
      // Verbatim from the Google Play listing, newest first.
      items: [
        {
          author: 'Peter',
          rating: 5,
          date: '2026-08-31',
          text: 'fantastic app, no account no cloud and much better features than google health. And the vest part: it is open source.'
        },
        {
          author: 'James Wiles',
          rating: 5,
          date: '2026-08-27',
          text: "It's like the Fitbit app from back when the Fitbit app was good. Fantastic work!"
        },
        {
          author: 'Vlastní Cestou',
          rating: 5,
          date: '2026-08-25',
          text: "Refreshing to find a health app that actually respects privacy - no account, no ads, no tracking, and it reads Health Connect data more reliably than Google's own Fit app. Daily Readiness and Body Energy insights are genuinely useful, and the dev is quick to respond to feedback. Open source too - impressive work for a solo project!"
        },
        {
          author: 'Przemyslaw Kusiak',
          rating: 5,
          date: '2026-08-23',
          text: 'Great app! I use it to import FIT and TCX workouts to Google Health'
        },
        {
          author: 'José Papaianni',
          rating: 5,
          date: '2026-08-10',
          text: 'Finally! A transparent health tracking app'
        },
        {
          author: 'Ezequiel Aciar',
          rating: 5,
          date: '2026-08-10',
          text: 'everything I was looking for!'
        },
        {
          author: 'aniket kadam',
          rating: 5,
          date: '2026-07-06',
          text: "great app! The developer deserves big praise. He's great with feedback and resolution. Thank you!"
        },
        {
          author: 'Joshua King',
          rating: 5,
          date: '2026-07-04',
          text: 'Exactly what I wanted from the Google Health app but better! Great work man! 👏'
        },
        {
          author: 'Karan Dhillon',
          rating: 5,
          date: '2026-06-13',
          text: "as an android engineer, i am really disappointed how google's own google health app cannot correct query their own health connect repo. Yet this app does that job flawlessly!"
        },
        {
          author: 'Rob Pitt',
          rating: 5,
          date: '2026-06-05',
          text: "Cool little tool that displays health data with no forced data collection, in fact according to Gemini, it currently doesn't even have system level permission to access the Internet."
        }
      ]
    },
    install: {
      eyebrow: 'Get OpenVitals',
      title: 'Install OpenVitals on Android.',
      text: 'Choose the Android channel that fits how you update apps. OpenVitals is also available as signed releases for people who prefer direct project downloads.',
      moreLabel: 'More install resources',
      guide: 'Install guide',
      cards: [
        {
          title: 'Google Play',
          text: 'Use the standard Android install and update path.',
          hrefKey: 'playStore',
          badge: '/images/google-play-badge.png',
          alt: 'Get it on Google Play'
        },
        {
          title: 'F-Droid',
          text: 'Install through the free and open-source Android app store.',
          hrefKey: 'fdroid',
          badge: '/images/fdroid-badge.svg',
          alt: 'Get it on F-Droid'
        },
        {
          title: 'Codeberg releases',
          text: 'Download signed APK releases directly from the project.',
          hrefKey: 'releases',
          badge: '/images/codeberg-releases-badge.svg',
          alt: 'Get it on Codeberg'
        }
      ]
    },
    support: {
      eyebrow: 'Support the project',
      title: 'Help OpenVitals grow.',
      text: 'Leave a positive review on Google Play, translate the Android app for more people, or fund the ongoing development, testing, documentation, releases, and maintenance behind this free and open-source project.',
      actionsLabel: 'Support OpenVitals',
      review: 'Review on Google Play',
      translate: 'Translate OpenVitals',
      liberapayAlt: 'Support OpenVitals on Liberapay',
      more: 'More ways to support'
    },
    footer: {
      nav: 'Footer navigation',
      documentation: 'Documentation',
      privacy: 'Privacy',
      source: 'Source',
      translate: 'Translate',
      support: 'Support'
    }
  },
  es: {
    meta: {
      title: 'OpenVitals - Panel de salud local-first para Android',
      description:
        'OpenVitals es una app Android local-first para ver, registrar, importar y entender datos de Health Connect sin cuentas, anuncios ni analítica.',
      ogDescription:
        'Un panel de salud local-first para Android impulsado por Health Connect, sin cuentas, anuncios ni analítica.',
      twitterDescription:
        'Herramientas de salud local-first para Android con datos de Health Connect, sin cuentas, anuncios ni analítica.'
    },
    nav: {
      primary: 'Navegación principal',
      privacy: 'Privacidad',
      features: 'Funciones',
      docs: 'Docs',
      install: 'Instalar',
      home: 'Inicio de OpenVitals',
      language: 'Idioma'
    },
    hero: {
      eyebrow: 'Herramientas de salud local-first para Android',
      lede:
        'Un panel privado de Health Connect para ver, registrar, importar y entender tus datos de salud sin cuentas, anuncios, analítica ni una nube de OpenVitals.',
      install: 'Instalar en Android',
      docs: 'Leer la documentación'
    },
    proof: {
      label: 'Garantías de privacidad de OpenVitals',
      points: [
        'Sin cuenta en la nube de OpenVitals',
        'Sin permiso de internet a nivel de app',
        'Sin anuncios ni SDK de analítica',
        'Health Connect sigue siendo la fuente de verdad'
      ]
    },
    intro: {
      eyebrow: 'Hecho para personas, no para perfiles',
      title: 'Los datos de salud deben servir sin convertirse en el conjunto de datos de otra persona.',
      text:
        'OpenVitals lee los registros compatibles de Health Connect, los convierte en vistas diarias claras y pantallas de detalle, y mantiene el control cerca del dispositivo. Tú decides qué permisos conceder y cuándo se escribe algo.'
    },
    privacy: {
      eyebrow: 'Enfoque de privacidad',
      title: 'Sin cuenta. Sin feed. Sin negocio de datos en segundo plano.',
      text:
        'La app de Android está pensada en torno a flujos locales explícitos. Lee Health Connect, guarda preferencias en el dispositivo y escribe registros de salud solo tras guardar, importar, grabar, editar o eliminar.',
      link: 'Revisar los detalles de privacidad',
      detailsLabel: 'Detalles de privacidad',
      items: [
        {
          title: 'Local por defecto',
          text: 'No hace falta un servidor de OpenVitals para el panel de la app.'
        },
        {
          title: 'Acceso concedido por ti',
          text: 'Los permisos de Health Connect siguen visibles y deliberados.'
        },
        {
          title: 'Código abierto',
          text: 'La app de Android y la documentación están disponibles en Codeberg.'
        }
      ]
    },
    devices: {
      eyebrow: 'Wearables',
      title: 'Funciona con tu reloj.',
      text:
        'Conecta cualquier wearable a través de Gadgetbridge o la app oficial del fabricante. Sincroniza notificaciones, frecuencia cardiaca en vivo, tiempo y tu calendario directamente por Bluetooth. Todo fluye a Health Connect, y OpenVitals lo reúne en un solo panel privado.',
      link: 'Cómo funciona la sincronización con Health Connect',
      listLabel: 'Compatibilidad con relojes y sensores',
      points: [
        {
          title: 'Cualquier wearable que escriba en Health Connect',
          text: 'Ya sea Gadgetbridge o la app oficial del fabricante, si la app compañera sincroniza a Health Connect, OpenVitals lo ve.'
        },
        {
          title: 'Sueño, frecuencia cardiaca, pasos y entrenamientos',
          text: 'Todas tus métricas de wearable llegan a Health Connect: fases del sueño, frecuencia cardiaca, VFC, pasos y entrenamientos aparecen en un panel claro.'
        },
        {
          title: 'Los sensores en vivo siguen siendo directos',
          text: 'Las bandas de frecuencia cardiaca BLE y los sensores de cadencia y potencia siguen conectándose a la app para datos en vivo mientras grabas un entrenamiento.'
        }
      ]
    },
    features: {
      eyebrow: 'Qué hace',
      title: 'Véelo, impórtalo, grábalo, regístralo y entiéndelo. Todo en el teléfono.',
      cards: [
        {
          title: 'Todas las métricas en un solo lugar',
          text: 'Actividad, sueño, corazón, cuerpo, hidratación, nutrición y ciclo en un panel diario. Tendencias, estadísticas y pantallas de detalle están a un toque cuando quieras saber qué cambió.',
          accent: '#0f766e'
        },
        {
          title: 'Importa lo que ya tienes',
          text: 'Trae exportaciones de Apple Health, y archivos FIT, GPX, KML/KMZ, TCX y CSV, de uno en uno o por carpetas enteras. El historial que construiste en otro sitio te acompaña.',
          accent: '#2f6f9f'
        },
        {
          title: 'Graba actividades y entrenamientos',
          text: 'Rutas GPS sobre mapas offline que giran y te siguen, guía turn-by-turn de CoMaps en vivo con la ruta planificada en el mapa, sensores BLE de frecuencia cardiaca, cadencia y potencia, anuncios de voz, vueltas y conteo de repeticiones. Planes de entrenamiento que creas una vez y ejecutas como sesiones guiadas, con repeticiones contadas por el teléfono y descansos con cuenta atrás. Cualquier entrenamiento se exporta sin su ruta como TCX, FIT o CSV. Se escribe en Health Connect solo cuando guardas.',
          accent: '#d95c3f'
        },
        {
          title: 'Funciona con tu reloj',
          text: 'Conecta cualquier wearable a través de Gadgetbridge o la app del fabricante: sincroniza notificaciones, frecuencia cardiaca en vivo, tiempo y calendario por Bluetooth, con horario automático si quieres. Todo sincroniza a través de Health Connect en un panel unificado.',
          accent: '#a07b00'
        },
        {
          title: 'Registra los números que solo tú conoces',
          text: 'Peso, altura, presión arterial con su contexto de medición, VFC, glucosa, comidas, bebidas y minutos de mindfulness. Entrada manual rápida, con recordatorios y widgets en la pantalla de inicio.',
          accent: '#1f9d55'
        },
        {
          title: 'Un informe que tu médico puede tener',
          text: 'Elige métricas y un intervalo, y la app genera un PDF en tu teléfono: gráficos, estadísticas y secciones clínicas para presión arterial, glucosa, entrenamientos y sueño. Compártelo o guárdalo; no se sube nada.',
          accent: '#4f5d9e'
        },
        {
          title: 'Seguimiento del ciclo que sigue siendo tuyo',
          text: 'Registra flujo, pruebas de ovulación, moco cervical y temperatura basal. Los días de periodo y las predicciones del siguiente se calculan en el dispositivo, y todo vive solo en Health Connect tras su propio permiso.',
          accent: '#b03a5b'
        },
        {
          title: 'Insights hechos en tu teléfono',
          text: 'Las puntuaciones de sueño, Body Energy y la preparación diaria se calculan en el dispositivo frente a tus propias baselines. Body Energy lee lo bien que dormiste - eficiencia, tiempo despierto, sueño profundo y REM - no solo cuánto. Ninguna nube lee tus datos para decirte cómo dormiste.',
          accent: '#6b5dd3'
        }
      ]
    },
    screens: {
      label: 'Capturas de OpenVitals',
      eyebrow: 'Vistas del producto',
      title: 'Diseñado para revisar el día de un vistazo y profundizar cuando importa.',
      items: [
        {
          src: '/images/daily-readiness.png',
          alt: 'Pantalla de detalle de Body Energy de OpenVitals',
          label: 'Body Energy'
        },
        {
          src: '/images/activity-recording.png',
          alt: 'Pantalla de grabación de actividad de OpenVitals',
          label: 'Grabación'
        },
        {
          src: '/images/sleep.png',
          alt: 'Pantalla de seguimiento del sueño de OpenVitals',
          label: 'Sueño'
        },
        {
          src: '/images/hydration-entry.png',
          alt: 'Pantalla de registro de hidratación de OpenVitals',
          label: 'Hidratación'
        }
      ]
    },
    reviews: {
      label: 'Reseñas de Google Play',
      eyebrow: 'Desde Google Play',
      title: 'Lo que dice la gente después de usarla a diario.',
      text: 'Citas literales de reseñas públicas en la ficha de Google Play.',
      link: 'Leer todas las reseñas en Google Play',
      trackLabel: 'Carrusel de reseñas, desplaza lateralmente para ver más',
      ratingLabel: '{rating} de 5 estrellas',
      translatedNote: 'Traducido por Google',
      // Literal de la ficha de Google Play, de más reciente a más antigua.
      // Las reseñas en inglés usan la traducción que Google muestra en la ficha.
      items: [
        {
          author: 'Peter',
          rating: 5,
          date: '2026-08-31',
          text: 'Una aplicación fantástica, sin cuenta, sin nube y con funciones mucho mejores que Google Health. Y lo mejor de todo: es de código abierto.',
          translated: true
        },
        {
          author: 'James Wiles',
          rating: 5,
          date: '2026-08-27',
          text: 'Es como la aplicación de Fitbit de cuando la aplicación de Fitbit era buena. ¡Un trabajo fantástico!',
          translated: true
        },
        {
          author: 'Vlastní Cestou',
          rating: 5,
          date: '2026-08-25',
          text: 'Es un alivio encontrar una aplicación de salud que realmente respeta la privacidad: sin cuentas, sin anuncios, sin seguimiento, y lee los datos de Health Connect con más fiabilidad que la propia aplicación Fit de Google. Los análisis de Preparación Diaria y Energía Corporal son realmente útiles, y el desarrollador responde rápidamente a los comentarios. Además, es de código abierto: ¡un trabajo impresionante para un proyecto individual!',
          translated: true
        },
        {
          author: 'Przemyslaw Kusiak',
          rating: 5,
          date: '2026-08-23',
          text: '¡Excelente aplicación! La uso para importar entrenamientos de FIT y TCX a Google Health.',
          translated: true
        },
        {
          author: 'Leandro Ferri',
          rating: 5,
          date: '2026-08-11',
          text: 'buenísima app de código abierto que no solo sirve por si misma, sino que ademas puedo leer y usar todos mis datos registrados por otras aplicaciones de salud 10/10'
        },
        {
          author: 'José Papaianni',
          rating: 5,
          date: '2026-08-10',
          text: '¡Por fin! Una aplicación transparente para el seguimiento de la salud.',
          translated: true
        },
        {
          author: 'Alejandra Pedragosa',
          rating: 5,
          date: '2026-08-10',
          text: 'Me resulta muy útil para sistematizar toda mi información sobre salud y son muy útiles los reportes que puedo compartir con mi médico'
        },
        {
          author: 'Ezequiel Aciar',
          rating: 5,
          date: '2026-08-10',
          text: '¡Todo lo que estaba buscando!',
          translated: true
        },
        {
          author: 'Alejandro H. Marcatili',
          rating: 5,
          date: '2026-08-10',
          text: 'Excelente aplicacion, toma con exactitud los datos y los muestra de una manera amigable y certera'
        },
        {
          author: 'aniket kadam',
          rating: 5,
          date: '2026-07-06',
          text: '¡Excelente aplicación! El desarrollador merece un gran reconocimiento. Responde rápidamente a los comentarios y resuelve los problemas. ¡Gracias!',
          translated: true
        },
        {
          author: 'Joshua King',
          rating: 5,
          date: '2026-07-04',
          text: '¡Justo lo que buscaba en la app de Google Salud, pero mejor! ¡Excelente trabajo! 👏',
          translated: true
        },
        {
          author: 'Karan Dhillon',
          rating: 5,
          date: '2026-06-13',
          text: 'Como ingeniero de Android, me decepciona mucho que la propia aplicación Google Health no pueda consultar correctamente su repositorio de Health Connect. ¡Sin embargo, esta aplicación lo hace a la perfección!',
          translated: true
        },
        {
          author: 'Rob Pitt',
          rating: 5,
          date: '2026-06-05',
          text: 'Una pequeña y genial herramienta que muestra datos de salud sin recopilar datos de forma forzada; de hecho, según Gemini, actualmente ni siquiera tiene permiso a nivel de sistema para acceder a Internet.',
          translated: true
        }
      ]
    },
    install: {
      eyebrow: 'Consigue OpenVitals',
      title: 'Instala OpenVitals en Android.',
      text: 'Elige el canal de Android que encaje con cómo actualizas apps. OpenVitals también está disponible como releases firmados para quien prefiera descargas directas del proyecto.',
      moreLabel: 'Más recursos de instalación',
      guide: 'Guía de instalación',
      cards: [
        {
          title: 'Google Play',
          text: 'Usa la vía estándar de instalación y actualización en Android.',
          hrefKey: 'playStore',
          badge: '/images/google-play-badge.png',
          alt: 'Disponible en Google Play'
        },
        {
          title: 'F-Droid',
          text: 'Instálala desde la tienda de apps libres y de código abierto para Android.',
          hrefKey: 'fdroid',
          badge: '/images/fdroid-badge.svg',
          alt: 'Disponible en F-Droid'
        },
        {
          title: 'Releases de Codeberg',
          text: 'Descarga APKs firmados directamente desde el proyecto.',
          hrefKey: 'releases',
          badge: '/images/codeberg-releases-badge.svg',
          alt: 'Disponible en Codeberg'
        }
      ]
    },
    support: {
      eyebrow: 'Apoya el proyecto',
      title: 'Ayuda a que OpenVitals crezca.',
      text: 'Deja una reseña positiva en Google Play, traduce la app de Android para más personas o financia el desarrollo, las pruebas, la documentación, las releases y el mantenimiento de este proyecto libre y de código abierto.',
      actionsLabel: 'Apoyar OpenVitals',
      review: 'Valorar en Google Play',
      translate: 'Traducir OpenVitals',
      liberapayAlt: 'Apoyar OpenVitals en Liberapay',
      more: 'Más formas de apoyar'
    },
    footer: {
      nav: 'Navegación del pie',
      documentation: 'Documentación',
      privacy: 'Privacidad',
      source: 'Código',
      translate: 'Traducir',
      support: 'Apoyo'
    }
  }
}

export function getMessages(locale: Locale): Messages {
  return messages[locale]
}
