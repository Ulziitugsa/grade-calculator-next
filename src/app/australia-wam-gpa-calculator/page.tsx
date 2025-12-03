import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "@/components/OtherCalculators";

export const metadata: Metadata = {
  title: "Australia WAM & GPA Calculator (HD / D / C / P1 / P2)",
  description:
    "Free Australian WAM & GPA calculator. Enter your course marks and credit points to estimate your Weighted Average Mark and an approximate 1–7 GPA based on HD / D / C / P1 / P2 bands.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Australia WAM & GPA Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-AU",
  description:
    "Calculate your Australian university WAM (Weighted Average Mark) and an approximate 1–7 GPA using HD, D, C, P1 and P2 bands.",
  url: "https://globalgradecalc.com/australia-wam-gpa-calculator",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
  },
  featureList: [
    "Australian WAM (Weighted Average Mark) calculator",
    "Approximate 1–7 GPA estimator",
    "Supports HD / D / C / P1 / P2 bands",
  ],
};

export default function AustraliaWamGpaPage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        <header className="mb-4 mb-md-5">
          <h1 className="app-hero-title mb-2">
            Australia WAM &amp; GPA Calculator
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Enter your Australian university course marks and credit points to
            estimate your{" "}
            <strong>WAM (Weighted Average Mark)</strong> and an approximate{" "}
            <strong>1–7 GPA</strong> based on the typical HD / D / C / P1 / P2
            grading system.
          </p>
        </header>

        {/* Same core calculator, but with the WAM panel enabled */}
        <CalculatorRoot systemId="au_uni" showWamPanel />

        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">What is WAM?</h2>
          <p className="small text-muted">
            WAM stands for <strong>Weighted Average Mark</strong>. It is a
            weighted average of all your subject marks, where each subject
            contributes according to its credit value. Many Australian
            universities use WAM (rather than GPA) to determine academic
            standing, honours eligibility and scholarship cut-offs.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this WAM &amp; GPA calculator
          </h2>
          <ol className="small">
            <li>
              Under <strong>WAM &amp; GPA (Australia – Uni, approx.)</strong>,
              add each course with its code, name, credit points and final mark.
            </li>
            <li>
              The calculator will show your total credits, overall WAM and an
              approximate <strong>1–7 GPA</strong> based on the HD / D / C / P1
              / P2 bands defined on this site.
            </li>
            <li>
              You can adjust or remove rows to reflect only the courses you want
              to include (for example, only your major, or only completed
              subjects).
            </li>
          </ol>

          <p className="small text-muted">
            Different universities may use slightly different WAM and GPA
            formulas. This calculator is intended as a helpful estimate only –
            always check your official results in your student portal for the
            final word.
          </p>

          <OtherCalculators current="au_wam" />
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
