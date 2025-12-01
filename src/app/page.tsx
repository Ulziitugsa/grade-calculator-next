"use client";

import CalculatorRoot from "../components/CalculatorRoot";
import OtherCalculators from "../components/OtherCalculators";

export default function HomePage() {
  return (
    <div className="app-shell">
      <div className="container app-container py-4 py-md-5">
        <header className="mb-4 mb-md-5">
          <h1 className="app-hero-title mb-2">Global Grade Calculator</h1>
          <p className="text-muted app-hero-subtitle mb-0">
            Calculate your final grade, overall percentage, exam score needed,
            GPA/WAM and more. Supports Australia, USA, UK, IB and A-Levels.
          </p>
        </header>

        <CalculatorRoot initialSystem="au_uni" />
        <OtherCalculators current="global" />
      </div>
    </div>
  );
}
