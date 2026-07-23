export type Locale = "en" | "es";
export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;
export type SlugMap = Record<Locale, string>;

export type ServiceGroup =
  | "engineering"
  | "quality"
  | "execution"
  | "supply-chain";

export interface SluggedContent {
  id: string;
  slug: LocalizedString;
}

export interface Industry extends SluggedContent {
  title: LocalizedString;
  summary: LocalizedString;
  challenge: LocalizedString;
  approach: LocalizedString;
  relatedSolutions: string[];
  relatedServices: string[];
  projectTypes: LocalizedStringArray;
}

export interface Solution extends SluggedContent {
  title: LocalizedString;
  summary: LocalizedString;
  problem: LocalizedString;
  approach: LocalizedString;
  capabilities: LocalizedStringArray;
  relatedIndustries: string[];
  relatedServices: string[];
}

export interface Service extends SluggedContent {
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  whenNeeded: LocalizedString;
  howWeExecute: LocalizedString;
  deliverables: LocalizedStringArray;
  group: ServiceGroup;
}

export function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}
