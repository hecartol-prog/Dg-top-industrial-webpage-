export const siteConfig = {
  name: "Top Industrial",
  legalName: "Dongguan Top Industrial and Commerce Co. Ltd",
  legalNameZh: "东莞若希迈贸易有限公司",
  domain: "https://www.dgtopindustrial.com",
  email: "info@dgtopindustrial.com",
  whatsapp: "8618038257063",
  linkedin: "https://www.linkedin.com/company/dgtopindustrialandcommerce",
  address: {
    line1: "No. 41 Chatang Road, Building 1, Third Floor Room 302",
    line2: "Chashan Town, Dongguan City, Guangdong Province",
    country: "People's Republic of China",
    postalCode: "523308",
  },
  experienceYears: 15,
  brandNavy: "#3B498F",
} as const;

export function fullAddress() {
  const { line1, line2, country, postalCode } = siteConfig.address;
  return `${line1}, ${line2}, ${country}, Z.P. ${postalCode}`;
}
