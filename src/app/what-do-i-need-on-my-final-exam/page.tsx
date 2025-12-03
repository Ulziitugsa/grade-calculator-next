import type { Metadata } from "next";
import React from "react";
import CalculatorRoot from "../../components/CalculatorRoot";
import OtherCalculators from "../../components/OtherCalculators";

/* ------------------------ PAGE METADATA ------------------------ */

export const metadata: Metadata = {
  title:
    "What Do I Need On My Final Exam? | Final Grade Needed Calculator (2025)",
  description:
    "Find out exactly what score you need on your final exam to get an A, B, HD, Distinction, 7, or any target grade. Free 'what do I need on my final' calculator supporting A–F, HD/D/C/P, IB 7–1, A-Levels, GCSE 9–1 and more.",
  keywords: [
    "what do I need on my final exam",
    "final grade calculator",
    "grade needed calculator",
    "exam score needed calculator",
    "what do I need to get an A",
    "what do I need to pass",
    "final exam grade calculator",
  ],
};

/* ---------------------- STRUCTURED DATA ------------------------ */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Final Exam Grade Needed Calculator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en",
  description:
    "Find out what score you need on your final exam to achieve your desired final grade. Supports multiple grading systems including A–F, HD/D/C/P, IB, A-Level, GCSE, and more.",
  url: "https://globalgradecalc.com/what-do-i-need-on-my-final-exam", // update when deployed
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Calculate final exam score required",
    "Supports all major grading systems",
    "Weighted exam calculations",
    "Instant grade predictions",
    "Mobile-friendly interface",
  ],
};

/* --------------------------- PAGE UI --------------------------- */

export default function WhatDoINeedPage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="mb-4 mb-md-5">
          <h1 className="app-hero-title mb-2">
            What Do I Need On My Final Exam?
          </h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Use this free <strong>Final Grade Needed Calculator</strong> to find
            out exactly what score you need on your final exam to get an A, B,
            HD, 7, or any target grade — across multiple grading systems.
          </p>
        </header>

        {/* Calculator */}
        <CalculatorRoot systemId="au_uni" />

        {/* ---------------------------------------------------------------- */}
        {/* ---------------------- LONG SEO CONTENT ------------------------ */}
        {/* ---------------------------------------------------------------- */}

        <section className="mt-5">
          <h2 className="h4 mb-3">
            Calculate what you need on your final exam — instantly
          </h2>
          <p className="small text-muted">
            This tool solves the biggest exam question every student asks:
          </p>

          <p className="small fst-italic">
            “What do I need to get on my final exam to pass — or to get the
            grade I want?”
          </p>

          <p className="small text-muted">
            Whether you're aiming for an <strong>A in the US</strong>, a{" "}
            <strong>Distinction in Australia</strong>, a{" "}
            <strong>7 in the IB Diploma</strong>, an{" "}
            <strong>A in A-Levels</strong>, or a{" "}
            <strong>Grade 7 in GCSE</strong>, this calculator works for all
            major grading systems.
          </p>

          <h2 className="h4 mt-4 mb-3">
            How does the “What do I need on my final?” calculator work?
          </h2>
          <p className="small text-muted">
            Your final grade is usually based on a mix of:
          </p>
          <ul className="small">
            <li>Assignments / coursework</li>
            <li>Midterms or tests</li>
            <li>Quizzes or participation</li>
            <li>The final exam (worth 20%–70% of the course)</li>
          </ul>

          <p className="small text-muted">
            This calculator uses your existing marks and your final exam weight
            to compute the exact minimum score you need. It supports unlimited
            assessments, custom weights, and any grading target.
          </p>

          <h2 className="h4 mt-4 mb-3">
            What do I need on my final exam to get an A?
          </h2>
          <p className="small text-muted">
            This varies by school, but most students use this calculator to see
            if an A is still possible. Just:
          </p>

          <ol className="small">
            <li>Enter your assignment marks</li>
            <li>Set the final exam as one of the weighted components</li>
            <li>Select a target (e.g. 90% for an A)</li>
            <li>Choose the exam from the dropdown</li>
          </ol>

          <p className="small text-muted">
            The calculator will tell you: “You need at least X% on the final.”
          </p>

          <h2 className="h4 mt-4 mb-3">
            What do I need on the final exam to pass?
          </h2>
          <p className="small text-muted">
            Many students also want to know the bare minimum to pass a course.
            To find this:
          </p>

          <ul className="small">
            <li>Use a target that matches the passing grade (e.g., 50% or 60%)</li>
            <li>Select the final exam as the target assessment</li>
            <li>The tool shows the minimum required score</li>
          </ul>

          <p className="small text-muted">
            This is especially useful if your course has a heavy final exam
            weight, such as 40%–70%.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Supported grading systems (A–F, HD/D/C/P, IB 7–1, GCSE, A-Level)
          </h2>
          <p className="small text-muted">
            The calculator automatically supports:
          </p>

          <ul className="small">
            <li>US Letter Grades (A, B, C, D, F)</li>
            <li>Australian University Grades (HD / D / C / P1 / P2 / N)</li>
            <li>IB Diploma (7–1)</li>
            <li>GCSE (9–1)</li>
            <li>A-Level (A* to E)</li>
            <li>UK Honours Degrees (1st, 2:1, 2:2, 3rd)</li>
          </ul>

          <p className="small text-muted">
            You can switch systems at any time using the dropdown at the top of
            the calculator.
          </p>

          <h2 className="h4 mt-4 mb-3">
            Why this page is better than a normal “final grade calculator”
          </h2>
          <p className="small text-muted">
            Most “final grade calculators” only show the weighted average, but
            this tool:
          </p>

          <ul className="small">
            <li>
              Lets you calculate the **exact score needed** on any assessment
            </li>
            <li>
              Supports all grading systems instead of just one country or school
            </li>
            <li>Adds unlimited assessments</li>
            <li>Is mobile-first and works on any device</li>
            <li>Allows custom targets (A, B, pass, HD, 7, etc.)</li>
          </ul>

          <h2 className="h4 mt-4 mb-3">Examples</h2>

          <p className="small text-muted">
            If your final exam is worth 40% and you currently have 68%, and you
            want to finish the course with 75%, the calculator might tell you:
          </p>

          <p className="small fst-italic">
            “You need at least 83% on the final exam.”
          </p>

          <p className="small text-muted">
            This helps you plan your revision and realistically assess your
            goals.
          </p>

          <h2 className="h4 mt-4 mb-3">
            When should you use this final exam calculator?
          </h2>

          <ul className="small">
            <li>Before exams — to set study goals</li>
            <li>After receiving assignment marks</li>
            <li>During exam period when pressure is high</li>
            <li>When deciding whether a grade is still achievable</li>
          </ul>

          <p className="small text-muted">
            This tool is most popular the week before exams — when students are
            most anxious and checking what they need to secure their target
            grade.
          </p>

          {/* Internal linking block */}
          <OtherCalculators current="global" />
        </section>
      </div>
    </div>
  );
}
