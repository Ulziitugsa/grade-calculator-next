import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "../../components/OtherCalculators";

export const metadata: Metadata = {
  title: "GCSE Grade Calculator (9–1 Scale)",
  description:
    "Free GCSE 9–1 grade calculator. Enter marks for papers and components, see your overall percentage and approximate GCSE grade from 9 to 1, and estimate what you need on remaining exams.",
  // When deployed, set your real canonical URL:
  // alternates: {
  //   canonical: "https://globalgradecalc.com/gcse-grade-calculator",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GCSE Grade Calculator (9–1)",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-GB",
  description:
    "Free GCSE grade calculator for the 9–1 scale. Calculates a weighted overall percentage from different papers/components and shows the approximate grade band.",
  url: "https://globalgradecalc.com/gcse-grade-calculator", // update when deployed
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  featureList: [
    "GCSE 9–1 grade bands",
    "Weighted overall percentage calculator",
    "What do I need in remaining papers",
    "Support for multiple components and tiers",
  ],
};

export default function GcseGradeCalculatorPage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        {/* JSON-LD schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="mb-4 mb-md-5">
          <h1 className="app-hero-title mb-2">
            GCSE Grade Calculator (9–1 Scale)
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free GCSE 9–1 grade calculator to combine your paper and
            component marks into an overall percentage and approximate grade
            from 9 to 1. You can also estimate what you need in your remaining
            exams to reach a target grade.
          </p>
        </header>

        {/* Calculator pre-configured for GCSE 9–1 */}
        <CalculatorRoot systemId="uk_gcse" />

        {/* SEO content */}
        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">How GCSE 9–1 grades usually work</h2>
          <p className="small text-muted">
            The GCSE grading system in England now mostly uses a numerical
            scale from <strong>9 (highest)</strong> down to{" "}
            <strong>1 (lowest)</strong>, with <strong>U</strong> meaning
            ungraded. Grades roughly map onto the old A*–G system, but not
            exactly:
          </p>
          <ul className="small">
            <li>
              <strong>9</strong> – higher than an old A*
            </li>
            <li>
              <strong>7–8</strong> – roughly in the A–A* range
            </li>
            <li>
              <strong>6–5</strong> – in the B–C range, with{" "}
              <strong>5</strong> often called a &quot;strong pass&quot;
            </li>
            <li>
              <strong>4</strong> – standard pass, close to a low C
            </li>
            <li>
              <strong>3–1</strong> – below a standard pass
            </li>
            <li>
              <strong>U</strong> – ungraded
            </li>
          </ul>
          <p className="small text-muted">
            Exam boards like AQA, Edexcel and OCR set exact grade boundaries
            for each subject and each exam sitting, so the marks needed for a
            7 or a 5 can vary slightly year to year. This calculator uses
            approximated percentage bands to give you a quick idea of where your
            overall mark sits on the 9–1 scale.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this GCSE 9–1 grade calculator
          </h2>
          <ol className="small">
            <li>
              Check that the grading system is set to{" "}
              <strong>UK – GCSE (9–1 scale)</strong>.
            </li>
            <li>
              Under <strong>&quot;Assessments &amp; weights&quot;</strong>, use
              each row for:
              <ul>
                <li>an exam paper (e.g. Paper 1, Paper 2)</li>
                <li>a component (e.g. speaking, coursework, practical)</li>
                <li>a unit if your subject is modular</li>
              </ul>
            </li>
            <li>
              Enter how much each paper or component counts towards your final
              grade in the <strong>Weight (%)</strong> column. For example:
              <ul>
                <li>Paper 1 – 50%</li>
                <li>Paper 2 – 50%</li>
              </ul>
            </li>
            <li>
              As you receive marks, type your{" "}
              <strong>Score (%)</strong> into the table (e.g. 72, 63, 81).
            </li>
            <li>
              The <strong>Grade summary</strong> card will show:
              <ul>
                <li>Your total weight so far</li>
                <li>Your current average (based on completed papers)</li>
                <li>Your final percentage (once all marks are in)</li>
                <li>
                  An <strong>approximate GCSE grade</strong> on the 9–1 scale
                </li>
              </ul>
            </li>
          </ol>
          <p className="small text-muted">
            You can rename each row, add extra components or remove ones you
            don&apos;t need so that the calculator matches your exact subject
            structure.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Estimating what you need in your remaining GCSE papers
          </h2>
          <p className="small text-muted">
            If you&apos;ve already taken some exams, you&apos;ll probably want
            to know:
          </p>
          <p className="small fst-italic">
            &quot;What do I need in Paper 2 to get at least a 5 (or a 7)?&quot;
          </p>
          <p className="small text-muted">
            The <strong>&quot;What do I need on the final?&quot;</strong> panel
            is made for that. To use it:
          </p>
          <ol className="small">
            <li>
              Make sure all completed exams and components have marks entered.
            </li>
            <li>
              Choose a <strong>target overall percentage</strong> that matches
              the grade you&apos;re aiming for. For example:
              <ul>
                <li>around 80%+ for a grade 7–9</li>
                <li>around 60–70% for a grade 5–6</li>
                <li>around 40–50% for a grade 4–5</li>
              </ul>
            </li>
            <li>
              Select the paper you want to solve for (e.g. Paper 2) from the
              dropdown.
            </li>
            <li>
              The calculator will show the{" "}
              <strong>minimum percentage</strong> you need on that paper to hit
              your target overall percentage.
            </li>
          </ol>
          <p className="small text-muted">
            This can help you decide how much to prioritise each paper when
            revising.
          </p>

          <h2 className="h4 mt-4 mb-3">Actual GCSE boundaries vs this tool</h2>
          <p className="small text-muted">
            It&apos;s important to remember that real GCSE grade boundaries are
            set by exam boards <strong>after</strong> the exams have been
            marked. They can change slightly each year depending on how
            difficult the paper was and how students perform overall.
          </p>
          <p className="small text-muted">
            This calculator uses simple percentage bands to give an approximate
            idea of your grade. It&apos;s a great way to understand how your
            marks combine – but for final results, always check the official
            boundaries and your results from your school or exam board.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Other calculators for when you move beyond GCSE
          </h2>
          <p className="small text-muted">
            After GCSEs, you might go on to A-Levels, IB, or another route.
            These calculators can help at the next stage:
          </p>
          <ul className="small">
            <li>A-Level grade calculator (A*–E)</li>
            <li>IB Diploma 7–1 grade calculator</li>
            <li>UK honours degree classification calculator</li>
            <li>US letter grade calculator (A–F)</li>
          </ul>
          <p className="small text-muted">
            All use the same simple interface, so once you&apos;re used to this
            GCSE calculator, the others will feel familiar too.
          </p>
        </section>
        <OtherCalculators current="uk_gcse" />
      </div>
    </div>
  );
}
