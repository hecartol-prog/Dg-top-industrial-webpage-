import { blog } from './blog';
import { capabilities } from './capabilities';
import { caseStudies } from './case-studies';
import { industries } from './industries';
import { process } from './process';
import { resources } from './resources';
import { services } from './services';
import { solutions } from './solutions';
import type { Locale, LocalizedString, SluggedContent } from './types';

export { blog, capabilities, caseStudies, industries, process, resources, services, solutions };

type SlugEntity = SluggedContent;
const bySlug = <T extends SlugEntity>(entities: T[], locale: Locale, slug: string) =>
  entities.find((entity) => entity.slug[locale] === slug);

export const getIndustryBySlug = (locale: Locale, slug: string) => bySlug(industries, locale, slug);
export const getSolutionBySlug = (locale: Locale, slug: string) => bySlug(solutions, locale, slug);
export const getServiceBySlug = (locale: Locale, slug: string) => bySlug(services, locale, slug);
export const getCaseStudyBySlug = (locale: Locale, slug: string) => bySlug(caseStudies, locale, slug);
export const getBlogBySlug = (locale: Locale, slug: string) => bySlug(blog, locale, slug);
export const getResourceBySlug = (locale: Locale, slug: string) => bySlug(resources, locale, slug);

export const getLocalizedSlug = (entity: { slug: LocalizedString }, locale: Locale) => entity.slug[locale];
export const alternateLocale = (locale: Locale): Locale => (locale === 'en' ? 'es' : 'en');
export const resolveAlternateSlug = <T extends SlugEntity>(entities: T[], locale: Locale, slug: string) => {
  const entity = bySlug(entities, locale, slug);
  return entity ? entity.slug[alternateLocale(locale)] : undefined;
};

export const resolveIndustryAlternateSlug = (locale: Locale, slug: string) => resolveAlternateSlug(industries, locale, slug);
export const resolveSolutionAlternateSlug = (locale: Locale, slug: string) => resolveAlternateSlug(solutions, locale, slug);
export const resolveServiceAlternateSlug = (locale: Locale, slug: string) => resolveAlternateSlug(services, locale, slug);
export const resolveCaseStudyAlternateSlug = (locale: Locale, slug: string) => resolveAlternateSlug(caseStudies, locale, slug);
export const resolveBlogAlternateSlug = (locale: Locale, slug: string) => resolveAlternateSlug(blog, locale, slug);
export const resolveResourceAlternateSlug = (locale: Locale, slug: string) => resolveAlternateSlug(resources, locale, slug);
