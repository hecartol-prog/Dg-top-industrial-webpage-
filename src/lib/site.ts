export const siteConfig = {
  name: "DG Top Industrial",
  legalName: "Dongguan Top Industrial Co., Ltd.",
  legalNameZh: "东莞拓达工业有限公司",
  domain: "https://dgtopindustrial.com",
  email: "hector@dgtopindustrial.com",
  whatsapp: "8613800000000",
  linkedin: "https://www.linkedin.com/company/dg-top-industrial",
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
