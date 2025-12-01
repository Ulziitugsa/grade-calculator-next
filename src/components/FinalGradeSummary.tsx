// src/components/FinalGradeSummary.tsx
import React from "react";
import type { GradeBand } from "../gradeSystems";

type Props = {
  totalWeight: number;
  completedWeight: number;
  currentPercent: number;
  finalPercent: number;
  finalBand: GradeBand | null;
};

const FinalGradeSummary: React.FC<Props> = ({
  totalWeight,
  completedWeight,
  currentPercent,
  finalPercent,
  finalBand,
}) => {
  return (
    <div className="card card-highlight mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">3. Grade summary</h2>

        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <div className="small text-muted">Total weight</div>
            <div className="fw-semibold">
              {totalWeight.toFixed(1)}%
              {Math.abs(totalWeight - 100) > 0.1 && (
                <span className="text-warning ms-2 small">
                  (usually 100%)
                </span>
              )}
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="small text-muted">Completed weight</div>
            <div className="fw-semibold">
              {completedWeight.toFixed(1)}%
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="small text-muted">Current average</div>
            <div className="fw-semibold">
              {completedWeight > 0 ? `${currentPercent.toFixed(2)}%` : "—"}
              <span className="text-muted small ms-1">
                (based on completed work)
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="small text-muted">Final percentage</div>
            <div className="fs-4">
              {totalWeight > 0 ? `${finalPercent.toFixed(2)}%` : "—"}
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="small text-muted">Grade band</div>
            <div className="fs-5">
              {finalBand ? (
                <>
                  {finalBand.id}{" "}
                  <span className="text-muted small">
                    – {finalBand.label}
                  </span>
                </>
              ) : (
                "—"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalGradeSummary;
