"use client";

import React from "react";
import type { Assessment } from "../gradeUtils";

type Props = {
  assessments: Assessment[];
  onChange: (assessments: Assessment[]) => void;
};

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export default function AssessmentTable({ assessments, onChange }: Props) {
  const updateAssessment = (
    id: string,
    field: "name" | "weight" | "score",
    value: string
  ) => {
    onChange(
      assessments.map((a) => {
        if (a.id !== id) return a;

        if (field === "name") {
          return { ...a, name: value };
        }

        if (field === "weight") {
          if (value === "") {
            return { ...a, weight: 0 };
          }
          const num = clamp(parseFloat(value), 0, 100);
          return { ...a, weight: Number.isNaN(num) ? 0 : num };
        }

        if (field === "score") {
          if (value === "") {
            return { ...a, score: null };
          }
          const num = clamp(parseFloat(value), 0, 100);
          return { ...a, score: Number.isNaN(num) ? null : num };
        }

        return a;
      })
    );
  };

  const addAssessment = () => {
    const newId = `a_${Date.now()}`;
    onChange([
      ...assessments,
      {
        id: newId,
        name: `Assessment ${assessments.length + 1}`,
        weight: 0,
        score: null,
      },
    ]);
  };

  const removeAssessment = (id: string) => {
    if (assessments.length <= 1) return;
    onChange(assessments.filter((a) => a.id !== id));
  };

  return (
    <div className="card  mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">2. Assessments & weights</h2>
        <p className="text-muted small">
          Add each assignment, quiz or exam with its percentage weight. Marks
          and weights are automatically clamped between 0 and 100.
        </p>

        <div className="table-responsive">
          <table className="table table-sm align-middle">
            <thead>
              <tr>
                <th style={{ width: "40%" }}>Assessment</th>
                <th style={{ width: "20%" }}>Weight (%)</th>
                <th style={{ width: "20%" }}>Score (%)</th>
                <th style={{ width: "20%" }}></th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((a) => (
                <tr key={a.id}>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      value={a.name}
                      onChange={(e) =>
                        updateAssessment(a.id, "name", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      className="form-control form-control-sm"
                      value={a.weight}
                      onChange={(e) =>
                        updateAssessment(a.id, "weight", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      className="form-control form-control-sm"
                      value={a.score ?? ""}
                      placeholder="—"
                      onChange={(e) =>
                        updateAssessment(a.id, "score", e.target.value)
                      }
                    />
                  </td>
                  <td className="text-end">
                    {assessments.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeAssessment(a.id)}
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={addAssessment}
        >
          + Add assessment
        </button>
      </div>
    </div>
  );
}
