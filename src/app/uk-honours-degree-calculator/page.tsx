import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "../../components/OtherCalculators";


export const metadata: Metadata = {
  title: "UK Honours Degree Grade Calculator (1st, 2:1, 2:2, 3rd)",
  description:
    "Free UK honours degree calculator. Combine module marks to see your final percentage and classification (First, 2:1, 2:2, Third) and work out what you need in remaining modules.",
  // When deployed, set your real canonical URL:
  // alternates: {
  //   canonical: "https://yourdomain.com/uk-honours-degree-calculator",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UK Honours Degree Grade Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-GB",
  description:
    "Free UK honours degree calculator for First, 2:1, 2:2 and Third class classifications. Calculates weighted final degree percentage and what you need in remaining modules.",
  url: "https://yourdomain.com/uk-honours-degree-calculator", // update when deployed
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  featureList: [
    "UK honours degree classification (1st, 2:1, 2:2, 3rd)",
    "Weighted final percentage calculator",
    "What do I need in my remaining modules",
    "Support for multiple modules and weights",
  ],
};

export default function UkHonoursDegreePage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="mb-4 mb-md-5">
          <h1 className="app-hero-title mb-2">
            UK Honours Degree Grade Calculator (1st, 2:1, 2:2, 3rd)
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free UK honours degree grade calculator to combine your
            module marks into an overall percentage and classification –
            First, Upper Second (2:1), Lower Second (2:2) or Third. You can
            also see what you need in your remaining modules to reach a 2:1 or
            a First.
          </p>
        </header>

        {/* Calculator pre-configured for UK honours */}
        <CalculatorRoot initialSystem="uk_honours" />

        {/* SEO content */}
        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">
            How UK honours degree classifications work
          </h2>
          <p className="small text-muted">
            In the UK, most undergraduate degrees are awarded with an honours
            classification based on your final overall percentage. While
            universities can differ slightly, a common pattern is:
          </p>
          <ul className="small">
            <li>
              <strong>First Class (1st)</strong>: usually{" "}
              <strong>70% or above</strong>
            </li>
            <li>
              <strong>Upper Second (2:1)</strong>: usually{" "}
              <strong>60–69%</strong>
            </li>
            <li>
              <strong>Lower Second (2:2)</strong>: usually{" "}
              <strong>50–59%</strong>
            </li>
            <li>
              <strong>Third Class (3rd)</strong>: usually{" "}
              <strong>40–49%</strong>
            </li>
            <li>
              <strong>Fail</strong>: below <strong>40%</strong>
            </li>
          </ul>
          <p className="small text-muted">
            Your final classification is typically calculated from your marks
            in different years or levels (for example, Level 5 and Level 6),
            sometimes with different weightings. This calculator uses a simple
            weighted average approach so you can get a clear estimate of where
            you currently stand.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this UK honours degree calculator
          </h2>
          <ol className="small">
            <li>
              Confirm that the grading system is set to{" "}
              <strong>UK – Honours Degree (1st / 2:1 / 2:2 / 3rd)</strong>.
            </li>
            <li>
              Under <strong>&quot;Assessments &amp; weights&quot;</strong>,
              treat each row as a module, year block or assessment group.
              Examples:
              <ul>
                <li>Module A – 20 credits</li>
                <li>Module B – 40 credits</li>
                <li>Final year project – 60 credits</li>
              </ul>
            </li>
            <li>
              Enter the <strong>weight</strong> for each item as a percentage
              of the final classification (for example 20, 40, 40). For some
              courses you may want to treat credits as weights and then scale
              them to sum to 100.
            </li>
            <li>
              Once you know your marks (e.g. 62, 68, 73), type them into the{" "}
              <strong>Score (%)</strong> column.
            </li>
            <li>
              The <strong>Grade summary</strong> panel will show your overall
              percentage and estimated classification (First, 2:1, 2:2, Third).
            </li>
          </ol>
          <p className="small text-muted">
            If some modules are still in progress, you can leave those marks
            blank and the calculator will estimate your current position based
            on completed modules only.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Estimate what you need for a 2:1 or a First
          </h2>
          <p className="small text-muted">
            Many UK students aim specifically for a <strong>2:1</strong> or a{" "}
            <strong>First</strong>, so it&apos;s useful to know what marks you
            need in your remaining modules. The{" "}
            <strong>&quot;What do I need on the final?&quot;</strong> section
            lets you:
          </p>
          <ol className="small">
            <li>
              Choose a <strong>target overall percentage</strong>:
              <ul>
                <li>70% or above for a First</li>
                <li>60–69% for a solid 2:1</li>
                <li>50–59% for a 2:2</li>
              </ul>
            </li>
            <li>
              Select a module or assessment in the dropdown that you want to
              solve for (for example, your final year project).
            </li>
            <li>
              The calculator will tell you the{" "}
              <strong>minimum mark</strong> you need in that module to reach
              your target classification.
            </li>
          </ol>
          <p className="small text-muted">
            This is especially useful in your final year, when a few large
            modules or your dissertation can have a big impact on your overall
            degree.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Things to keep in mind about real university rules
          </h2>
          <p className="small text-muted">
            Universities can use more complex rules than a simple weighted
            average. For example:
          </p>
          <ul className="small">
            <li>Certain years might be discounted or capped.</li>
            <li>
              Some classifications use borderline rules (e.g. uplift to a First
              if enough credits are in the higher band).
            </li>
            <li>
              Professional programmes (like engineering or medicine) may have
              additional requirements.
            </li>
          </ul>
          <p className="small text-muted">
            This calculator is designed as an easy-to-understand estimate. For
            the exact rules, always check your course handbook or speak to your
            course administrator.
          </p>

          <h2 className="h4 mt-4 mb-3">Other grading systems you might use</h2>
          <p className="small text-muted">
            If you plan to study abroad, convert your marks, or compare
            systems, you may also find these calculators helpful:
          </p>
          <ul className="small">
            <li>US letter grade calculator (A, B, C, D, F)</li>
            <li>Australian university HD / D / C / P1 / P2 calculator</li>
            <li>IB Diploma 7–1 calculator</li>
            <li>A-Level and GCSE 9–1 calculators</li>
          </ul>
          <p className="small text-muted">
            All of these use the same core engine but apply different bands and
            labels, so you can focus on the numbers rather than the maths.
          </p>
        </section>
        <OtherCalculators current="uk_honours" />
      </div>
    </div>
  );
}
