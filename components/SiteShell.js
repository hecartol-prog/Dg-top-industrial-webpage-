"use client";

import Link from "next/link";
import { useState } from "react";
import { Building2, ChevronDown, MessageCircle } from "lucide-react";
import { href, otherLocale } from "@/lib/site-data";

function mainNavLinks(locale, dict) {
  return [
    ["about", dict.nav.about],
    ["industries", dict.nav.industries],
    ["solutions", dict.nav.solutions],
    ["services", dict.nav.services],
    ["capabilities", dict.nav.capabilities],
    ["caseStudies", dict.nav.caseStudies],
  ].map(([key, label]) => ({ href: href(locale, key), label }));
}

function secondaryNavLinks(locale, dict) {
  return [
    "process",
    "quality",
    "contact",
    "blog",
    "resources",
    "privacy",
    "terms",
  ].map((key) => ({
    href: href(locale, key),
    label: dict.secondaryNav[key],
  }));
}

function localeHref(locale) {
  return `/${otherLocale(locale)}`;
}

export function PartnerPlaceholder({ label }) {
  return (
    <div className="partner-placeholder" title={label} aria-label={label}>
      <Building2 size={28} strokeWidth={1.6} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function SiteShell({ locale, dict, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = mainNavLinks(locale, dict);
  const secondaryLinks = secondaryNavLinks(locale, dict);
  const consultationHref = href(locale, "consultation");
  const rfqHref = href(locale, "rfq");

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href={`/${locale}`} aria-label="Top Industrial home">
            Top Industrial
            <span>Manufacturing</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((item) => (
              <Link className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}

            <div className="more-menu">
              <button className="more-button" type="button" aria-haspopup="true">
                {dict.nav.more}
                <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div className="more-list" role="menu">
                {secondaryLinks.map((item) => (
                  <Link href={item.href} key={item.href} role="menuitem">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link className="language-link" href={localeHref(locale)}>
              {dict.nav.language}: {dict.otherLocaleName}
            </Link>
          </nav>

          <div className="header-actions">
            <Link className="button button-secondary" href={consultationHref}>
              {dict.nav.consultation}
            </Link>
            <Link className="button button-primary" href={rfqHref}>
              {dict.nav.rfq}
            </Link>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {dict.nav.menu}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="container mobile-panel">
            {[...navLinks, ...secondaryLinks].map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href={localeHref(locale)} onClick={() => setIsMenuOpen(false)}>
              {dict.nav.language}: {dict.otherLocaleName}
            </Link>
            <Link className="button" href={consultationHref} onClick={() => setIsMenuOpen(false)}>
              {dict.common.requestConsultation}
            </Link>
            <Link className="button" href={rfqHref} onClick={() => setIsMenuOpen(false)}>
              {dict.common.rfq}
            </Link>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <section>
            <h2>{dict.footer.companyName}</h2>
            <p>{dict.footer.description}</p>
          </section>
          <section>
            <h3>{dict.footer.insightsTitle}</h3>
            <div className="grid">
              <Link href={href(locale, "blog")}>{dict.footer.blog}</Link>
              <Link href={href(locale, "resources")}>{dict.footer.resources}</Link>
              <Link href={href(locale, "caseStudies")}>{dict.footer.caseStudies}</Link>
            </div>
          </section>
          <section>
            <h3>{dict.footer.contact}</h3>
            <p>{dict.footer.email}</p>
            <p>{dict.footer.contactCta}</p>
            <div className="footer-ctas">
              <Link className="button button-primary" href={consultationHref}>
                {dict.common.requestConsultation}
              </Link>
              <Link className="button button-secondary" href={rfqHref}>
                {dict.common.rfq}
              </Link>
            </div>
          </section>
        </div>
        <div className="footer-bottom">
          <div className="container">{dict.footer.copyright}</div>
        </div>
      </footer>

      <Link
        className="floating-whatsapp"
        href="https://wa.me/0000000000"
        aria-label={dict.common.whatsapp}
      >
        <MessageCircle aria-hidden="true" />
      </Link>

      <div className="mobile-cta-bar" aria-label="Mobile contact actions">
        <Link className="button button-primary" href={consultationHref}>
          {dict.nav.consultation}
        </Link>
        <Link className="button button-secondary" href={rfqHref}>
          {dict.nav.rfq}
        </Link>
        <Link className="whatsapp-mini" href="https://wa.me/0000000000" aria-label={dict.common.whatsapp}>
          <MessageCircle size={22} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
