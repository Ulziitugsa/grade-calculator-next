import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "../../components/OtherCalculators";

export const metadata: Metadata = {
  title: "IB Diploma Grade Calculator (7–1 Scale)",
  description:
    "Free IB Diploma grade calculator. Enter your internal assessment and exam scores to estimate subject grades on the 7–1 scale and see what you need in remaining components.",
  // When deployed, set your real canonical URL:
  // alternates: {
  //   canonical: "https://yourdomain.com/ib-grade-calculator",
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "IB Diploma Grade Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en",
  description:
    "Free IB Diploma grade calculator for the 7–1 scale. Combines internal assessment and exam components into an estimated subject grade, and shows what you need in remaining papers.",
  url: "https://yourdomain.com/ib-grade-calculator", // update when deployed
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "IB subject grade estimate on 7–1 scale",
    "Weighted combination of IA and exam papers",
    "What do I need on remaining components",
    "Support for HL and SL style weightings",
  ],
};

export default function IbGradeCalculatorPage() {
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
            IB Diploma Grade Calculator (7–1 Scale)
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free IB Diploma grade calculator to combine your internal
            assessment and exam paper marks into an estimated subject grade on
            the 7–1 scale. You can also see what you need on remaining
            components to reach your target grade.
          </p>
        </header>

        {/* Calculator pre-configured for IB 7–1 */}
        <CalculatorRoot initialSystem="ib_diploma" />

        {/* SEO content */}
        <section className="mt-4 mt-md-5">
          <h2 className="h4 mb-3">How IB subject grades work (7 to 1)</h2>
          <p className="small text-muted">
            In the IB Diploma Programme, each subject is awarded a{" "}
            <strong>grade from 7 (highest) to 1 (lowest)</strong>. Your final
            subject grade is based on a mix of:
          </p>
          <ul className="small">
            <li>
              <strong>Internal assessment (IA)</strong> – marked by your
              teacher, moderated by the IB
            </li>
            <li>
              <strong>External exams</strong> – usually several papers at the
              end of the course
            </li>
          </ul>
          <p className="small text-muted">
            Exact weightings vary by subject and level (HL vs SL), but a common
            pattern is something like 20–30% for IA and 70–80% for written
            exams. The raw marks are converted to scaled marks and then mapped
            to the 7–1 grade boundaries set by the IB.
          </p>
          <p className="small text-muted">
            This calculator uses an approximate mapping from percentage to 7–1
            grades, so you can quickly see where your combined performance
            might sit. For exact boundaries, you&apos;ll need the official IB
            documentation for your subject and session.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How to use this IB subject grade calculator
          </h2>
          <ol className="small">
            <li>
              Make sure the grading system is set to{" "}
              <strong>IB Diploma (7–1)</strong>.
            </li>
            <li>
              Under <strong>&quot;Assessments &amp; weights&quot;</strong>, use
              each row for one IB component. For example:
              <ul>
                <li>Internal Assessment (IA)</li>
                <li>Paper 1</li>
                <li>Paper 2</li>
                <li>Paper 3 (for HL subjects)</li>
              </ul>
            </li>
            <li>
              Enter the <strong>weight (%)</strong> of each component based on
              your subject guide. Example for a typical HL subject:
              <ul>
                <li>IA – 20%</li>
                <li>Paper 1 – 40%</li>
                <li>Paper 2 – 40%</li>
              </ul>
            </li>
            <li>
              When you know your marks for a component (or a good estimate),
              type your <strong>Score (%)</strong> into the table.
            </li>
            <li>
              Look at the <strong>Grade summary</strong> card to see:
              <ul>
                <li>Your total weight so far</li>
                <li>Your current weighted average</li>
                <li>
                  Your estimated final percentage (once all components have
                  marks)
                </li>
                <li>
                  An <strong>approximate IB subject grade</strong> on the 7–1
                  scale
                </li>
              </ul>
            </li>
          </ol>
          <p className="small text-muted">
            You can rename each row, add or remove components, and adjust
            weights to match any specific IB subject, whether HL or SL.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Estimating what you need for a 6 or 7 in IB
          </h2>
          <p className="small text-muted">
            Many IB students aim for a grade <strong>6</strong> or{" "}
            <strong>7</strong> in their higher level subjects, or across their
            best subjects for university applications. The{" "}
            <strong>&quot;What do I need on the final?&quot;</strong> section
            helps you answer:
          </p>
          <p className="small fst-italic">
            &quot;What do I need on Paper 2 (or my IA) to end up with a 6 or
            7 overall?&quot;
          </p>
          <ol className="small">
            <li>
              Enter all the grades you already know (for example, IA and Paper
              1).
            </li>
            <li>
              Choose a <strong>target overall percentage</strong> that roughly
              matches the grade you are aiming for. As a simplified example:
              <ul>
                <li>around 85–100% for a 7</li>
                <li>around 75–84% for a 6</li>
                <li>around 65–74% for a 5</li>
              </ul>
            </li>
            <li>
              Select the component you want to solve for (e.g. Paper 2) in the
              dropdown.
            </li>
            <li>
              The calculator will show the <strong>minimum score</strong> you
              need on that component to reach your target overall percentage.
            </li>
          </ol>
          <p className="small text-muted">
            This is useful for planning how much you need to push in final
            exams if your IA or earlier papers didn&apos;t go as planned.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Limitations of any IB grade calculator
          </h2>
          <p className="small text-muted">
            The real IB marking and scaling process is more complex than a
            simple weighted average:
          </p>
          <ul className="small">
            <li>
              Raw marks are converted to scaled marks using grade boundaries
              set for each session.
            </li>
            <li>
              Some components use bands and markschemes rather than pure
              percentages.
            </li>
            <li>
              There are additional rules when calculating the{" "}
              <strong>overall Diploma score</strong> (TOK, EE, bonus points).
            </li>
          </ul>
          <p className="small text-muted">
            This calculator is designed to give a{" "}
            <strong>simple, percentage-based estimate</strong> for an
            individual subject, not an official prediction. Always rely on your
            school and the IB&apos;s official documentation for final results
            and full Diploma scoring.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Other grade calculators for before and after IB
          </h2>
          <p className="small text-muted">
            If you&apos;re comparing systems or planning study in another
            country, you might also want:
          </p>
          <ul className="small">
            <li>A-Level grade calculator (A*–E)</li>
            <li>GCSE 9–1 grade calculator</li>
            <li>US letter grade calculator (A–F, 4.0 scale)</li>
            <li>Australian university grade calculator (HD / D / C / P1 / P2)</li>
            <li>UK honours degree classification calculator</li>
          </ul>
          <p className="small text-muted">
            All of these calculators use the same simple interface, so once you
            understand one, the others will feel familiar and quick to use.
          </p>
        </section>
        <OtherCalculators current="ib_diploma" />
      </div>
    </div>
  );
}
