"use client";

import CalculatorRoot from "../components/CalculatorRoot";
import OtherCalculators from "../components/OtherCalculators";

export default function HomePage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        <header className="app-hero mb-3 mb-md-4">
          <h1 className="app-hero-title mb-2">Global Grade Calculator</h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Calculate your final grade, overall percentage, exam score needed,
            GPA/WAM and more. Supports Australia, USA, UK, IB and A-Levels.
          </p>
        </header>

        {/* 👇 NEW helper line */}
        <p className="small text-muted mb-3">
          <strong>How to use:</strong> 1) Choose your grading system · 2) Add
          your assessments & marks · 3) See your grade and what you need on the
          final.
        </p>

        <CalculatorRoot systemId="us_letter" />
        <OtherCalculators current="global" />
      </div>
    </div>
  );
}
