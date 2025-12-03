import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "../../components/OtherCalculators";

export const metadata: Metadata = {
  title: "US Letter Grade Calculator (A, B, C, D, F)",
  description:
    "Free US letter grade calculator. Combine assignment and exam scores, see your final percentage and letter grade (A, B, C, D, F), and work out what you need on the final.",
  // When deployed, set your real canonical URL:
  // alternates: {
  //   canonical: "https://globalgradecalc.com/us-letter-grade-calculator",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "US Letter Grade Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-US",
  description:
    "Free US letter grade calculator for A, B, C, D and F. Calculates weighted final grade and required score on the final exam.",
  url: "https://globalgradecalc.com/us-letter-grade-calculator", // update once deployed
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "US letter grade scale (A, B, C, D, F)",
    "Weighted final grade calculator",
    "What do I need on my final exam calculator",
    "Support for multiple assignments and tests",
  ],
};

export default function UsLetterGradePage() {
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
            US Letter Grade Calculator (A, B, C, D, F)
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free US letter grade calculator to combine your homework,
            quizzes, projects and exams into one final percentage and letter
            grade. You can also see what score you need on the final exam to
            finish with an A, B, C, or to pass the class.
          </p>
        </header>

        {/* Calculator pre-configured for US letter system */}
        <CalculatorRoot systemId="us_letter" />

        {/* SEO-friendly explanatory content */}
        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">How US letter grades are typically calculated</h2>
          <p className="small text-muted">
            In many US schools, colleges and universities, your final grade in a
            class is based on several categories with different weights. For
            example, homework might be worth 20%, quizzes 20%, projects 30% and
            the final exam 30%. Each category has its own scores, which are
            combined into one overall percentage.
          </p>
          <p className="small text-muted">
            That final percentage is then converted into a letter grade using a
            scale similar to:
          </p>
          <ul className="small">
            <li>
              <strong>A</strong>: usually around <strong>90–100%</strong>
            </li>
            <li>
              <strong>B</strong>: usually around <strong>80–89%</strong>
            </li>
            <li>
              <strong>C</strong>: usually around <strong>70–79%</strong>
            </li>
            <li>
              <strong>D</strong>: usually around <strong>60–69%</strong>
            </li>
            <li>
              <strong>F</strong>: below <strong>60%</strong>
            </li>
          </ul>
          <p className="small text-muted">
            Exact cut-offs can vary by teacher, school or university. Some
            classes also use plus and minus grades (A−, B+, B−, etc.), but this
            calculator focuses on the core A–F bands.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this US letter grade calculator
          </h2>
          <ol className="small">
            <li>
              Check that the grading system is set to{" "}
              <strong>USA – Letter (A–F, 4.0 scale)</strong>.
            </li>
            <li>
              Under <strong>&quot;Assessments &amp; weights&quot;</strong>,
              create a row for each graded item or category:
              <ul>
                <li>Homework or assignments</li>
                <li>Quizzes or tests</li>
                <li>Midterm exam</li>
                <li>Final exam</li>
              </ul>
            </li>
            <li>
              For each row, set the <strong>weight</strong> as a percentage of
              your final grade (for example 20, 25, 30). The weights will
              usually add up to 100%.
            </li>
            <li>
              As you get scores back, type them into the{" "}
              <strong>Score (%)</strong> column (for example 86, 92, 74).
            </li>
            <li>
              Look at the <strong>Grade summary</strong> to see your current
              average, estimated final percentage and letter grade.
            </li>
          </ol>
          <p className="small text-muted">
            You can leave future items blank and the calculator will use only
            completed work to estimate your current standing in the class.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Find out what you need on the final exam
          </h2>
          <p className="small text-muted">
            One of the most common questions students ask is:
          </p>
          <p className="small fst-italic">
            &quot;What do I need on my final exam to get an A (or to pass)?&quot;
          </p>
          <p className="small text-muted">
            The <strong>&quot;What do I need on the final?&quot;</strong>{" "}
            section is built exactly for that. Here&apos;s how to use it:
          </p>
          <ol className="small">
            <li>
              Make sure all completed assignments, quizzes and earlier exams
              have their scores entered.
            </li>
            <li>
              Set your <strong>target overall percentage</strong>. For example:
              <ul>
                <li>90 for an A</li>
                <li>80 for a B</li>
                <li>70 for a C</li>
                <li>60 for a passing D</li>
              </ul>
            </li>
            <li>
              In the dropdown, select your <strong>Final Exam</strong> (or
              whichever assessment you are solving for).
            </li>
            <li>
              The calculator will show the minimum percentage you need on that
              exam to reach your target final grade.
            </li>
          </ol>

          <h2 className="h4 mt-4 mb-3">
            Letter grades and the 4.0 GPA scale
          </h2>
          <p className="small text-muted">
            Many schools convert letter grades into a 4.0 GPA scale, where:
          </p>
          <ul className="small">
            <li>A ≈ 4.0</li>
            <li>B ≈ 3.0</li>
            <li>C ≈ 2.0</li>
            <li>D ≈ 1.0</li>
            <li>F ≈ 0.0</li>
          </ul>
          <p className="small text-muted">
            In reality there are often plus/minus values (like 3.7 for A− or 2.3
            for C+). This calculator shows you the basic letter grade and
            approximate GPA band so you can quickly understand where you stand.
            For precise GPA calculations, always refer to your school&apos;s
            official policy.
          </p>

          <h2 className="h4 mt-4 mb-3">Other helpful grade tools</h2>
          <p className="small text-muted">
            If you study overseas, are in an international program, or want to
            compare grading systems, you might also find these useful:
          </p>
          <ul className="small">
            <li>Australian HD / D / C / P1 / P2 grade calculator</li>
            <li>UK honours degree calculator (1st, 2:1, 2:2, 3rd)</li>
            <li>IB Diploma 7–1 grade calculator</li>
            <li>A-Level and GCSE 9–1 calculators</li>
          </ul>
          <p className="small text-muted">
            This site is designed to support multiple grading systems, so you
            can keep track of your results no matter where you&apos;re
            studying.
          </p>
        </section>

        <OtherCalculators current="us_letter" />

      </div>
    </div>
  );
}
