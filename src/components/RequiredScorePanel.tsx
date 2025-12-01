// src/components/RequiredScorePanel.tsx
import React from "react";
import type { Assessment } from "../gradeUtils";

type Props = {
  assessments: Assessment[];
  targetFinalPercent: number;
  onTargetFinalPercentChange: (value: number) => void;
  targetAssessmentId: string;
  onTargetAssessmentChange: (id: string) => void;
  requiredScore: number | null;
};

const RequiredScorePanel: React.FC<Props> = ({
  assessments,
  targetFinalPercent,
  onTargetFinalPercentChange,
  targetAssessmentId,
  onTargetAssessmentChange,
  requiredScore,
}) => {
  const selectedAssessment = assessments.find((a) => a.id === targetAssessmentId);

  return (
    <div className="card card-highlight mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">4. What do I need on the final?</h2>
        <p className="text-muted small">
          Choose an assessment (often your final exam), then set your target
          overall percentage. We&apos;ll calculate the minimum score you need on
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
                    onTargetFinalPercentChange(Number.isNaN(v) ? 0 : v);
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


        <div className="border rounded p-3 bg-light">
          {requiredScore == null || !selectedAssessment ? (
            <p className="mb-0 small">
              Based on your current scores and weights, this target might be
              impossible or your setup is incomplete. Check that:
              <br />
              • your weights are correct, and
              <br />• you&apos;ve entered scores for all other assessments.
            </p>
          ) : (
            <p className="mb-0">
              To finish with <strong>{targetFinalPercent.toFixed(1)}%</strong>{" "}
              overall, you need at least{" "}
              <strong>{requiredScore.toFixed(2)}%</strong> on{" "}
              <strong>{selectedAssessment.name}</strong>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequiredScorePanel;
