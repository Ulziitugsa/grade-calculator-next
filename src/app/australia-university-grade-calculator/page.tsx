import type { Metadata } from "next";
import CalculatorRoot from "../../components/CalculatorRoot";
import React from "react";
import OtherCalculators from "@/components/OtherCalculators";

export const metadata: Metadata = {
  title: "Australia University Grade Calculator (HD / D / C / P1 / P2)",
  description:
    "Free Australian university grade calculator using the HD, D, C, P1 and P2 bands. Combine assignment and exam marks, see your final grade, and work out what you need on your final.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Australia University Grade Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-AU",
  description:
    "Free Australian university grade calculator using HD, D, C, P1 and P2 bands. Calculates final mark, grade band, and required exam score.",
  url: "https://globalgradecalc.com/australia-university-grade-calculator",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
  },
  featureList: [
    "Australian HD / D / C / P1 / P2 grade bands",
    "Weighted final grade calculator",
    "What do I need on my exam calculator",
  ],
};

export default function AustraliaUniGradePage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        <header className="mb-4 mb-md-5">
          <h1 className="app-hero-title mb-2">
            Australia University Grade Calculator (HD / D / C / P1 / P2)
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free Australian university grade calculator to combine
            your assignment, quiz and exam marks into a final percentage and
            grade band using the typical HD, D, C, P1 and P2 system. You can
            also see what you need on your final exam to pass, get a Credit, or
            aim for a High Distinction.
          </p>
        </header>

        {/* Calculator pre-configured for Australian universities */}
        <CalculatorRoot systemId="au_uni" />

        {/* SEO content – helps Google understand + gives value to students */}
        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">
            How Australian university grades work (HD, D, C, P1, P2)
          </h2>
          <p className="text-muted small">
            Every Australian university has its own slight variation, but most
            follow a similar structure:
          </p>
          <ul className="small">
            <li>
              <strong>HD – High Distinction</strong>: usually 85–100%
            </li>
            <li>
              <strong>D – Distinction</strong>: usually 75–84%
            </li>
            <li>
              <strong>C – Credit</strong>: usually 65–74%
            </li>
            <li>
              <strong>P1 / P2 – Pass levels</strong>: usually 50–64%
            </li>
            <li>
              <strong>F – Fail</strong>: below 50%
            </li>
          </ul>
          <p className="small text-muted">
            Your final grade for a course is normally based on a combination of
            assignments, quizzes, labs, group work and your final exam, each
            with their own weight (for example 20% + 30% + 50%).
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this Australian grade calculator
          </h2>
          <ol className="small">
            <li>
              Make sure the grading system at the top is set to{" "}
              <strong>Australia – Uni (HD / D / C / P1 / P2)</strong>.
            </li>
            <li>
              Under <strong>Assessments &amp; weights</strong>, list each
              assessment (Assignment 1, Quiz, Final Exam, etc.).
            </li>
            <li>
              Enter the <strong>weight</strong> of each item as a percentage
              (for example 20, 30, 50). Most subjects will add up to 100%.
            </li>
            <li>
              As you receive marks back, type them into the{" "}
              <strong>Score</strong> column (for example 78, 92, 64).
            </li>
            <li>
              Look at the <strong>Grade summary</strong> on the right to see
              your current average, final percentage and grade band.
            </li>
          </ol>

          <p className="small text-muted">
            You can leave future assessments blank and the tool will
            automatically calculate your average based only on completed work.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Work out what you need on the final exam
          </h2>
          <p className="small text-muted">
            The section called <strong>&quot;What do I need on the final?&quot;</strong>{" "}
            is designed for the classic question:
          </p>
          <p className="fst-italic small">
            “If my current average is X, what mark do I need on the exam to
            pass or get a HD?”
          </p>
          <ol className="small">
            <li>
              Make sure you have entered marks for all completed assessment
              items.
            </li>
            <li>
              Choose your <strong>target overall percentage</strong> (e.g. 50
              for a pass, 75 for a Distinction, 85 for a High Distinction).
            </li>
            <li>
              In the dropdown, select your <strong>Final Exam</strong> (or
              whichever assessment you are solving for).
            </li>
            <li>
              The calculator will show the <strong>minimum score</strong> you
              need on that assessment to reach your target final mark.
            </li>
          </ol>

          <h2 className="h4 mt-4 mb-3">
            Want WAM & GPA as well?
          </h2>
          <p className="small text-muted">
            If you also need your <strong>WAM (Weighted Average Mark)</strong>{" "}
            and an approximate <strong>1–7 GPA</strong> based on the HD / D / C
            / P1 / P2 bands, try the{" "}
            <a href="/australia-wam-gpa-calculator">
              Australia WAM &amp; GPA Calculator
            </a>
            .
          </p>

          <h2 className="h4 mt-4 mb-3">
            Other grade calculators you might need
          </h2>
          <p className="small text-muted">
            If you study overseas or compare results, you may also want:
          </p>
          <ul className="small">
            <li>US letter grade calculator (A, B, C, D, F)</li>
            <li>UK honours degree calculator (1st, 2:1, 2:2, 3rd)</li>
            <li>IB Diploma 7–1 calculator</li>
            <li>A-Level and GCSE 9–1 style calculators</li>
          </ul>
          <p className="small text-muted">
            This site is designed to support multiple grading systems so you can
            stay on top of your results, no matter where you study.
          </p>
        </section>

        <OtherCalculators current="au_uni" />

        {/* JSON-LD schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
