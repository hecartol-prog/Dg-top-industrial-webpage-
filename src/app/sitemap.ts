import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  blog,
  caseStudies,
  industries,
  resources,
  services,
  solutions,
} from "@/content/slug-maps";

const staticPaths = {
  en: [
    "",
    "/about",
    "/industries",
    "/solutions",
    "/services",
    "/capabilities",
    "/case-studies",
    "/process",
    "/quality",
    "/blog",
    "/resources",
    "/contact",
    "/consultation",
    "/rfq",
    "/privacy",
    "/terms",
  ],
  es: [
    "",
    "/nosotros",
    "/industrias",
    "/soluciones",
    "/servicios",
    "/capacidades",
    "/casos-de-exito",
    "/proceso",
    "/calidad",
    "/blog",
    "/recursos",
    "/contacto",
    "/consulta",
    "/cotizacion",
    "/privacidad",
    "/terminos",
  ],
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["en", "es"] as const) {
    for (const path of staticPaths[locale]) {
      entries.push({
        url: `${siteConfig.domain}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }

    for (const item of industries) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/${locale === "es" ? "industrias" : "industries"}/${item.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const item of solutions) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/${locale === "es" ? "soluciones" : "solutions"}/${item.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const item of services) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/${locale === "es" ? "servicios" : "services"}/${item.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const item of caseStudies) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/${locale === "es" ? "casos-de-exito" : "case-studies"}/${item.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const item of resources) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/${locale === "es" ? "recursos" : "resources"}/${item.slug[locale]}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const item of blog) {
      entries.push({
        url: `${siteConfig.domain}/${locale}/blog/${item.category.slug[locale]}/${item.slug[locale]}`,
        lastModified: new Date(item.publishedAt),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
