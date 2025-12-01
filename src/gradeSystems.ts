// src/gradeSystems.ts

export type GradeSystemId =
  | "au_uni"
  | "us_letter"
  | "uk_honours"
  | "uk_alevel"
  | "uk_gcse"
  | "ib_diploma";

export type GradeBand = {
  id: string;
  label: string;
  min: number; // inclusive percentage
  max: number; // inclusive percentage
  gpa?: number; // optional for GPA-like systems
};

export type GradeSystem = {
  id: GradeSystemId;
  name: string;
  description?: string;
  bands: GradeBand[];
};

export const gradeSystems: GradeSystem[] = [
  {
    id: "au_uni",
    name: "Australia – Uni (HD / D / C / P1 / P2)",
    description:
      "Typical Australian university bands with High Distinction, Distinction, Credit, Pass levels and Fail.",
    bands: [
      { id: "HD", label: "High Distinction (HD)", min: 85, max: 100, gpa: 7 },
      { id: "D", label: "Distinction (D)", min: 75, max: 84, gpa: 6 },
      { id: "C", label: "Credit (C)", min: 65, max: 74, gpa: 5 },
      { id: "P1", label: "Pass Level 1 (P1)", min: 55, max: 64, gpa: 4 },
      { id: "P2", label: "Pass Level 2 (P2)", min: 50, max: 54, gpa: 3 },
      { id: "F", label: "Fail (F)", min: 0, max: 49, gpa: 1 },
    ],
  },
  {
    id: "us_letter",
    name: "USA – Letter (A–F, 4.0 scale)",
    description:
      "Typical US-style letter grades mapped roughly to a 4.0 GPA scale.",
    bands: [
      { id: "A", label: "A (Excellent)", min: 90, max: 100, gpa: 4.0 },
      { id: "B", label: "B (Good)", min: 80, max: 89, gpa: 3.0 },
      { id: "C", label: "C (Average)", min: 70, max: 79, gpa: 2.0 },
      { id: "D", label: "D (Below Average)", min: 60, max: 69, gpa: 1.0 },
      { id: "F", label: "F (Fail)", min: 0, max: 59, gpa: 0.0 },
    ],
  },
  {
    id: "uk_honours",
    name: "UK – Honours Degree (1st / 2:1 / 2:2 / 3rd)",
    description:
      "Typical UK undergraduate honours degree classification based on overall percentage.",
    bands: [
      { id: "FIRST", label: "First Class (1st)", min: 70, max: 100 },
      { id: "TWO_ONE", label: "Upper Second (2:1)", min: 60, max: 69 },
      { id: "TWO_TWO", label: "Lower Second (2:2)", min: 50, max: 59 },
      { id: "THIRD", label: "Third Class (3rd)", min: 40, max: 49 },
      { id: "FAIL", label: "Fail", min: 0, max: 39 },
    ],
  },
  {
    id: "uk_alevel",
    name: "UK – A-Level (A*–E, U)",
    description:
      "Approximate A-Level grade boundaries. Real exam boards may vary slightly.",
    bands: [
      { id: "A*", label: "A* (A star)", min: 90, max: 100 },
      { id: "A", label: "A", min: 80, max: 89 },
      { id: "B", label: "B", min: 70, max: 79 },
      { id: "C", label: "C", min: 60, max: 69 },
      { id: "D", label: "D", min: 50, max: 59 },
      { id: "E", label: "E", min: 40, max: 49 },
      { id: "U", label: "Ungraded (U)", min: 0, max: 39 },
    ],
  },
  {
    id: "uk_gcse",
    name: "UK – GCSE (9–1 scale)",
    description:
      "Approximate GCSE 9–1 bands. Real exam boundaries can vary by subject and year.",
    bands: [
      { id: "9", label: "Grade 9 (top)", min: 90, max: 100 },
      { id: "8", label: "Grade 8", min: 80, max: 89 },
      { id: "7", label: "Grade 7", min: 70, max: 79 },
      { id: "6", label: "Grade 6", min: 60, max: 69 },
      { id: "5", label: "Grade 5", min: 50, max: 59 },
      { id: "4", label: "Grade 4 (standard pass)", min: 40, max: 49 },
      { id: "3", label: "Grade 3", min: 30, max: 39 },
      { id: "2", label: "Grade 2", min: 20, max: 29 },
      { id: "1", label: "Grade 1", min: 10, max: 19 },
      { id: "U", label: "Ungraded (U)", min: 0, max: 9 },
    ],
  },
  {
    id: "ib_diploma",
    name: "IB Diploma (7–1)",
    description:
      "International Baccalaureate Diploma Programme, with subject grades from 7 (highest) to 1 (lowest).",
    bands: [
      { id: "7", label: "7 (Excellent)", min: 85, max: 100 },
      { id: "6", label: "6 (Very good)", min: 75, max: 84 },
      { id: "5", label: "5 (Good)", min: 65, max: 74 },
      { id: "4", label: "4 (Satisfactory)", min: 55, max: 64 },
      { id: "3", label: "3 (Mediocre)", min: 45, max: 54 },
      { id: "2", label: "2 (Poor)", min: 35, max: 44 },
      { id: "1", label: "1 (Very poor)", min: 0, max: 34 },
    ],
  },
];

export function getGradeSystem(id: GradeSystemId): GradeSystem {
  const found = gradeSystems.find((g) => g.id === id);
  if (!found) {
    throw new Error(`Unknown grade system: ${id}`);
  }
  return found;
}

export function getBandForPercentage(
  system: GradeSystem,
  percentage: number
): GradeBand | null {
  if (Number.isNaN(percentage)) return null;
  const clamped = Math.max(0, Math.min(100, percentage));
  return (
    system.bands.find((band) => clamped >= band.min && clamped <= band.max) ??
    null
  );
}
