import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://globalgradecalc.com";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/australia-university-grade-calculator`, lastModified: new Date() },
    { url: `${base}/us-letter-grade-calculator`, lastModified: new Date() },
    { url: `${base}/uk-honours-degree-calculator`, lastModified: new Date() },
    { url: `${base}/a-level-grade-calculator`, lastModified: new Date() },
    { url: `${base}/gcse-grade-calculator`, lastModified: new Date() },
    { url: `${base}/ib-grade-calculator`, lastModified: new Date() },
    { url: `${base}/what-do-i-need-on-my-final-exam`, lastModified: new Date() },
  ];
}
