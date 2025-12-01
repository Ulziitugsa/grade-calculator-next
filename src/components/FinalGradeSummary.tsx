"use client";

import React from "react";
import type { GradeBand } from "../gradeSystems";

type Props = {
  totalWeight: number;
  completedWeight: number;
  currentPercent: number;
  finalPercent: number;
  finalBand: GradeBand | null;
};

export default function FinalGradeSummary({
  totalWeight,
  completedWeight,
  currentPercent,
  finalPercent,
  finalBand,
}: Props) {
  const weightIs100 = Math.round(totalWeight) === 100;

  return (
    <div className="card card-highlight mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">3. Current and final grade</h2>

        {!weightIs100 && (
          <div className="alert alert-warning py-2 small mb-3">
            <strong>Note:</strong> Your assessment weights add up to{" "}
            <strong>{totalWeight.toFixed(1)}%</strong>. Most courses expect
            a total of 100%. Check that you’ve entered the correct weights.
          </div>
        )}

        <div className="row mb-2">
          <div className="col-6">
            <div className="text-muted small">Completed weight</div>
            <div className="fs-6 fw-semibold">
              {completedWeight.toFixed(1)}%
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="text-muted small">Total weight</div>
            <div className="fs-6 fw-semibold">{totalWeight.toFixed(1)}%</div>
          </div>
        </div>

        <hr className="my-2" />

        <div className="row">
          <div className="col-6">
            <div className="text-muted small">Current average so far</div>
            <div className="fs-4">
              {Number.isNaN(currentPercent)
                ? "—"
                : `${currentPercent.toFixed(2)}%`}
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="text-muted small">Projected final result</div>
            <div className="fs-4">
              {Number.isNaN(finalPercent)
                ? "—"
                : `${finalPercent.toFixed(2)}%`}
            </div>
            <div className="small mt-1">
              {finalBand ? (
                <>
                  <strong>{finalBand.id}</strong>{" "}
                  <span className="text-muted">– {finalBand.label}</span>
                </>
              ) : (
                <span className="text-muted">No band yet</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
