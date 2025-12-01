// src/components/AssessmentTable.tsx
import React from "react";
import type { Assessment } from "../gradeUtils";

type Props = {
  assessments: Assessment[];
  onChange: (updated: Assessment[]) => void;
  onTargetAssessmentChange?: (id: string) => void; // optional, used by parent
};

const AssessmentTable: React.FC<Props> = ({
  assessments,
  onChange,
}) => {
  const handleFieldChange = (
    id: string,
    field: "name" | "weight" | "score",
    value: string
  ) => {
    const updated = assessments.map((a) => {
      if (a.id !== id) return a;

      if (field === "name") {
        return { ...a, name: value };
      }

      if (field === "weight") {
        const parsed = parseFloat(value);
        return { ...a, weight: Number.isNaN(parsed) ? 0 : parsed };
      }

      if (field === "score") {
        if (value === "") return { ...a, score: null };
        const parsed = parseFloat(value);
        return { ...a, score: Number.isNaN(parsed) ? null : parsed };
      }

      return a;
    });

    onChange(updated);
  };

  const addAssessment = () => {
    const id = `a_${Date.now()}`;
    const updated: Assessment[] = [
      ...assessments,
      { id, name: "New assessment", weight: 0, score: null },
    ];
    onChange(updated);
  };

  const removeAssessment = (id: string) => {
    const updated = assessments.filter((a) => a.id !== id);
    onChange(updated);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">2. Assessments & weights</h2>
        <p className="text-muted small">
          Enter your assessments, their weight and scores. Leave the score blank
          if it hasn&apos;t been graded yet.
        </p>

        <div className="table-responsive mb-3">
          <table className="table table-sm align-middle">
            <thead>
              <tr>
                <th style={{ width: "40%" }}>Name</th>
                <th style={{ width: "20%" }}>Weight (%)</th>
                <th style={{ width: "20%" }}>Score (%)</th>
                <th style={{ width: "10%" }} />
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
                        handleFieldChange(a.id, "name", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      min={0}
                      max={100}
                      value={a.weight}
                      onChange={(e) =>
                        handleFieldChange(a.id, "weight", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      min={0}
                      max={100}
                      value={a.score ?? ""}
                      placeholder="—"
                      onChange={(e) =>
                        handleFieldChange(a.id, "score", e.target.value)
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
                        ✕
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
};

export default AssessmentTable;
