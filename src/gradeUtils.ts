// src/gradeUtils.ts

export type Assessment = {
  id: string;
  name: string;
  weight: number; // % of final grade (0–100)
  score: number | null; // percentage score (0–100), null = not graded yet
};

export function getTotalWeight(assessments: Assessment[]): number {
  return assessments.reduce((sum, a) => sum + (a.weight || 0), 0);
}

export function calculateCurrentWeightedPercentage(
  assessments: Assessment[]
): { currentPercent: number; completedWeight: number } {
  let weightedSum = 0;
  let completedWeight = 0;

  assessments.forEach((a) => {
    if (a.score != null && !Number.isNaN(a.score)) {
      weightedSum += (a.score * a.weight) / 100;
      completedWeight += a.weight;
    }
  });

  const currentPercent =
    completedWeight > 0 ? (weightedSum / completedWeight) * 100 : 0;

  return { currentPercent, completedWeight };
}

export function calculateFinalPercentage(assessments: Assessment[]): number {
  let total = 0;
  assessments.forEach((a) => {
    if (a.score != null && !Number.isNaN(a.score)) {
      total += (a.score * a.weight) / 100;
    }
  });
  return total;
}

export function calculateRequiredScoreOnAssessment(
  assessments: Assessment[],
  targetAssessmentId: string,
  targetFinalPercent: number
): number | null {
  const normalizedTarget = Math.max(0, Math.min(100, targetFinalPercent));

  const targetAssessment = assessments.find((a) => a.id === targetAssessmentId);
  if (!targetAssessment || targetAssessment.weight <= 0) return null;

  let otherWeighted = 0;

  assessments.forEach((a) => {
    if (a.id === targetAssessmentId) return;
    if (a.score != null && !Number.isNaN(a.score)) {
      otherWeighted += (a.score * a.weight) / 100;
    }
  });

  const required =
    (normalizedTarget - otherWeighted) * (100 / targetAssessment.weight);

  if (required < 0) return 0;
  if (required > 100) return null; // impossible to reach target
  return required;
}
