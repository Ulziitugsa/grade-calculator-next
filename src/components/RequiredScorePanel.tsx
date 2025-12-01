"use client";

import React, { useMemo } from "react";
import type { Assessment } from "../gradeUtils";

type Props = {
  assessments: Assessment[];
  targetFinalPercent: number;
  onTargetFinalPercentChange: (value: number) => void;
  targetAssessmentId: string;
  onTargetAssessmentChange: (id: string) => void;
  requiredScore: number | null;
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export default function RequiredScorePanel({
  assessments,
  targetFinalPercent,
  onTargetFinalPercentChange,
  targetAssessmentId,
  onTargetAssessmentChange,
  requiredScore,
}: Props) {
  const hasAnyScore = useMemo(
    () => assessments.some((a) => a.score != null),
    [assessments]
  );

  const otherAssessmentsMissingScores = useMemo(
    () =>
      assessments.some(
        (a) => a.id !== targetAssessmentId && a.score == null
      ),
    [assessments, targetAssessmentId]
  );

  const targetAssessment =
    assessments.find((a) => a.id === targetAssessmentId) ?? assessments[0];

  let content: React.ReactNode;

  // 1. No marks at all yet
  if (!hasAnyScore) {
    content = (
      <span className="required-score-placeholder">
        Enter some marks first to see what you need.
      </span>
    );
  }
  // 2. Some marks, but not all other assessments are filled
  else if (otherAssessmentsMissingScores) {
    content = (
      <span className="required-score-placeholder">
        To calculate an exact required score, enter marks for all other
        assessments first.
      </span>
    );
  }
  // 3. Everything filled, but calculation says "impossible"
  else if (requiredScore == null || Number.isNaN(requiredScore)) {
    content = (
      <>
        Based on your current marks and weights, reaching{" "}
        <strong>{targetFinalPercent.toFixed(1)}%</strong> overall is{" "}
        <strong>not mathematically possible</strong>, even with a perfect
        score on <strong>{targetAssessment?.name}</strong>.
        <br />
        <span className="text-muted small d-block mt-1">
          Check that your weights and marks are correct, or try lowering your
          target to something more realistic.
        </span>
      </>
    );
  }
  // 4. Would require more than 100% on that assessment
  else if (requiredScore > 100) {
    content = (
      <>
        You would need more than{" "}
        <strong>{requiredScore.toFixed(1)}%</strong> on{" "}
        <strong>{targetAssessment?.name}</strong>, which isn&apos;t
        realistically achievable.
        <span className="text-muted small d-block mt-1">
          Even a perfect score cannot reach{" "}
          {targetFinalPercent.toFixed(1)}%. Try lowering your target or
          reviewing earlier marks.
        </span>
      </>
    );
  }
  // 5. You’re already safe
  else if (requiredScore <= 0) {
    content = (
      <>
        You can score <strong>0%</strong> on{" "}
        <strong>{targetAssessment?.name}</strong> and still reach your
        target. Nice work!
      </>
    );
  }
  // 6. Normal case
  else {
    content = (
      <>
        You need at least{" "}
        <strong>{requiredScore.toFixed(1)}%</strong> on{" "}
        <strong>{targetAssessment?.name}</strong> to finish on{" "}
        <strong>{targetFinalPercent.toFixed(1)}%</strong> overall.
      </>
    );
  }

  return (
    <div className="card card-highlight mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">4. What do I need on the final?</h2>
        <p className="text-muted small">
          Choose a target overall percentage and the assessment you want to
          solve for. The calculator will estimate the minimum score needed on
          that assessment.
        </p>

        <div className="row g-3 align-items-end mb-3">
          <div className="col-sm-6">
            <label className="form-label form-label-sm">
              Target overall percentage
            </label>
            <input
              type="number"
              min={0}
              max={100}
              className="form-control form-control-sm"
              value={targetFinalPercent}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                const clamped = clamp(v, 0, 100);
                onTargetFinalPercentChange(clamped);
              }}
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label form-label-sm">
              Assessment to solve for
            </label>
            <select
              className="form-select form-select-sm"
              value={targetAssessmentId}
              onChange={(e) => onTargetAssessmentChange(e.target.value)}
            >
              {assessments.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} ({a.weight}%)
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="required-score-box p-3">
          <div className="small text-muted mb-1">Required score</div>
          <div className="fs-6">{content}</div>
        </div>
      </div>
    </div>
  );
}
