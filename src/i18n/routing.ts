import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      es: "/nosotros",
    },
    "/industries": {
      en: "/industries",
      es: "/industrias",
    },
    "/industries/[slug]": {
      en: "/industries/[slug]",
      es: "/industrias/[slug]",
    },
    "/solutions": {
      en: "/solutions",
      es: "/soluciones",
    },
    "/solutions/[slug]": {
      en: "/solutions/[slug]",
      es: "/soluciones/[slug]",
    },
    "/services": {
      en: "/services",
      es: "/servicios",
    },
    "/services/[slug]": {
      en: "/services/[slug]",
      es: "/servicios/[slug]",
    },
    "/capabilities": {
      en: "/capabilities",
      es: "/capacidades",
    },
    "/case-studies": {
      en: "/case-studies",
      es: "/casos-de-exito",
    },
    "/case-studies/[slug]": {
      en: "/case-studies/[slug]",
      es: "/casos-de-exito/[slug]",
    },
    "/process": {
      en: "/process",
      es: "/proceso",
    },
    "/quality": {
      en: "/quality",
      es: "/calidad",
    },
    "/blog": {
      en: "/blog",
      es: "/blog",
    },
    "/blog/[category]": {
      en: "/blog/[category]",
      es: "/blog/[category]",
    },
    "/blog/[category]/[slug]": {
      en: "/blog/[category]/[slug]",
      es: "/blog/[category]/[slug]",
    },
    "/resources": {
      en: "/resources",
      es: "/recursos",
    },
    "/resources/[slug]": {
      en: "/resources/[slug]",
      es: "/recursos/[slug]",
    },
    "/contact": {
      en: "/contact",
      es: "/contacto",
    },
    "/consultation": {
      en: "/consultation",
      es: "/consulta",
    },
    "/rfq": {
      en: "/rfq",
      es: "/cotizacion",
    },
    "/privacy": {
      en: "/privacy",
      es: "/privacidad",
    },
    "/terms": {
      en: "/terms",
      es: "/terminos",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
