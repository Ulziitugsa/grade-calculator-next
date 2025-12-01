import React from "react";
import Link from "next/link";

type CalculatorId =
  | "global"
  | "au_uni"
  | "us_letter"
  | "uk_honours"
  | "uk_alevel"
  | "uk_gcse"
  | "ib_diploma";

const CALCULATORS: { id: CalculatorId; label: string; href: string }[] = [
  { id: "global", label: "Global Grade Calculator (all systems)", href: "/" },
  {
    id: "au_uni",
    label: "Australia University Grade Calculator (HD / D / C / P1 / P2)",
    href: "/australia-university-grade-calculator",
  },
  {
    id: "us_letter",
    label: "US Letter Grade Calculator (A, B, C, D, F)",
    href: "/us-letter-grade-calculator",
  },
  {
    id: "uk_honours",
    label: "UK Honours Degree Grade Calculator (1st, 2:1, 2:2, 3rd)",
    href: "/uk-honours-degree-calculator",
  },
  {
    id: "uk_alevel",
    label: "A-Level Grade Calculator (A* to E)",
    href: "/a-level-grade-calculator",
  },
  {
    id: "uk_gcse",
    label: "GCSE Grade Calculator (9–1 scale)",
    href: "/gcse-grade-calculator",
  },
  {
    id: "ib_diploma",
    label: "IB Diploma Grade Calculator (7–1)",
    href: "/ib-grade-calculator",
  },
];

type Props = {
  current: CalculatorId;
};

export default function OtherCalculators({ current }: Props) {
  const others = CALCULATORS.filter((c) => c.id !== current);

  return (
    <section className="mt-4 mt-md-5">
      <h2 className="h5 mb-3">Other free grade calculators</h2>
      <p className="small text-muted">
        Switch to a different grading system – each calculator uses the same
        layout so it’s easy to use.
      </p>
      <ul className="small mb-0">
        {others.map((calc) => (
          <li key={calc.id}>
            <Link href={calc.href} className="link-secondary text-decoration-none">
              {calc.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
