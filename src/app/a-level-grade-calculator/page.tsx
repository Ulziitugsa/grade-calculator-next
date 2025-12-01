import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "../../components/OtherCalculators";

export const metadata: Metadata = {
  title: "A-Level Grade Calculator (A* to E)",
  description:
    "Free A-Level grade calculator. Enter your component or paper marks, see your overall percentage and approximate A-Level grade (A*, A, B, C, D, E), and estimate what you need on remaining exams.",
  // When deployed, set your real canonical URL:
  // alternates: {
  //   canonical: "https://yourdomain.com/a-level-grade-calculator",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "A-Level Grade Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-GB",
  description:
    "Free A-Level grade calculator for A*, A, B, C, D and E. Calculates weighted overall mark from multiple papers/components and shows the approximate grade band.",
  url: "https://yourdomain.com/a-level-grade-calculator", // update once deployed
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  featureList: [
    "A-Level grade bands from A* to E",
    "Weighted overall percentage calculator",
    "What do I need in remaining papers",
    "Support for multiple components and resits",
  ],
};

export default function ALevelGradeCalculatorPage() {
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
            A-Level Grade Calculator (A* to E)
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free A-Level grade calculator to combine your paper and
            component marks into one overall percentage and approximate A-Level
            grade from A* to E. You can also estimate what you need in your
            remaining exams to reach your target grade.
          </p>
        </header>

        {/* Calculator pre-configured for A-Level bands */}
        <CalculatorRoot initialSystem="uk_alevel" />

        {/* SEO content */}
        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">How A-Level grades are usually set</h2>
          <p className="small text-muted">
            Every exam board (AQA, Edexcel, OCR, etc.) sets its own detailed
            grade boundaries for each subject and each year. However, most
            students think of A-Level grades in broad bands:
          </p>
          <ul className="small">
            <li>
              <strong>A*</strong> – top performance, usually very high marks
              (often 90%+ in the A2 modules or combined score)
            </li>
            <li>
              <strong>A</strong> – strong performance, around 80–89%
            </li>
            <li>
              <strong>B</strong> – good performance, roughly 70–79%
            </li>
            <li>
              <strong>C</strong> – solid pass, often 60–69%
            </li>
            <li>
              <strong>D</strong> – pass, around 50–59%
            </li>
            <li>
              <strong>E</strong> – minimum pass, around 40–49%
            </li>
          </ul>
          <p className="small text-muted">
            This calculator uses an approximate set of boundaries so you can
            quickly see what grade band your overall percentage falls into.
            Always check your exam board&apos;s official boundaries for exact
            results.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this A-Level grade calculator
          </h2>
          <ol className="small">
            <li>
              Make sure the grading system is set to{" "}
              <strong>UK – A-Level (A*–E, U)</strong>.
            </li>
            <li>
              Under <strong>&quot;Assessments &amp; weights&quot;</strong>, use
              each row for a:
              <ul>
                <li>Paper (e.g. Paper 1, Paper 2)</li>
                <li>Component (e.g. coursework, practical)</li>
                <li>Module or unit (if your course is modular)</li>
              </ul>
            </li>
            <li>
              Set the <strong>Weight (%)</strong> for each paper or component
              based on how much it counts towards the final grade. For example:
              <ul>
                <li>Paper 1 – 40%</li>
                <li>Paper 2 – 40%</li>
                <li>Coursework – 20%</li>
              </ul>
            </li>
            <li>
              After you get results, type your{" "}
              <strong>Score (%)</strong> for each paper or component into the
              table.
            </li>
            <li>
              The <strong>Grade summary</strong> card will show:
              <ul>
                <li>Your total weight</li>
                <li>Your current average (based on completed components)</li>
                <li>Your final percentage (when all marks are entered)</li>
                <li>
                  The <strong>approximate A-Level grade band</strong> (A*, A, B,
                  C, D or E)
                </li>
              </ul>
            </li>
          </ol>
          <p className="small text-muted">
            You can edit the names of each row, add more components or delete
            unused ones, so the calculator matches your exact exam structure.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Estimating what you need in your remaining papers
          </h2>
          <p className="small text-muted">
            Closer to exam season, the big question becomes:
          </p>
          <p className="small fst-italic">
            &quot;What do I need on Paper 2 to get an A overall?&quot;
          </p>
          <p className="small text-muted">
            The <strong>&quot;What do I need on the final?&quot;</strong> panel
            does this for you:
          </p>
          <ol className="small">
            <li>
              Enter all the marks you already have (for completed papers or
              coursework).
            </li>
            <li>
              Choose a <strong>target overall percentage</strong> that matches
              the grade you are aiming for. For example:
              <ul>
                <li>85% for a strong A</li>
                <li>90%+ if you&apos;re aiming for an A*</li>
                <li>70% for a B</li>
              </ul>
            </li>
            <li>
              Pick the paper you want to solve for (e.g. Paper 2) in the
              dropdown.
            </li>
            <li>
              The calculator will display the{" "}
              <strong>minimum score</strong> you need on that paper to hit your
              target overall percentage.
            </li>
          </ol>
          <p className="small text-muted">
            This is a great way to plan your study time – you&apos;ll know
            which papers are most critical and what is realistically achievable.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Remember: real A-Level boundaries can change
          </h2>
          <p className="small text-muted">
            Exam boards set official grade boundaries after each exam series,
            and they can change slightly each year and between subjects. This
            calculator is designed as a{" "}
            <strong>simple, percentage-based guide</strong> so you understand
            how your different papers and components combine.
          </p>
          <p className="small text-muted">
            For final, official grades, always refer to your exam board&apos;s
            published boundaries and your results statement.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Other useful calculators for students
          </h2>
          <p className="small text-muted">
            Depending on your route after A-Levels, you might also want:
          </p>
          <ul className="small">
            <li>GCSE 9–1 grade calculator</li>
            <li>IB Diploma 7–1 grade calculator</li>
            <li>UK honours degree classification calculator</li>
            <li>US letter grade calculator (A–F)</li>
          </ul>
          <p className="small text-muted">
            This site is built so you can switch between different grading
            systems using the same simple interface, without having to learn a
            new calculator every time.
          </p>
        </section>
        <OtherCalculators current="uk_alevel" />
      </div>
    </div>
  );
}
