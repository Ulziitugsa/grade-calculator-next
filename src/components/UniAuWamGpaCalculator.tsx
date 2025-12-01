// src/components/UniAuWamGpaCalculator.tsx
import React, { useMemo, useState } from "react";
import type { GradeBand } from "../gradeSystems";
import { getGradeSystem, getBandForPercentage } from "../gradeSystems";

type CourseResult = {
  id: string;
  code: string;
  name: string;
  credits: number; // e.g. 4.5, 6, 10
  mark: number | null; // 0–100
};

const AU_SYSTEM = getGradeSystem("au_uni");

function getBandAndGpa(mark: number | null): GradeBand | null {
  if (mark == null || Number.isNaN(mark)) return null;
  return getBandForPercentage(AU_SYSTEM, mark);
}

const UniAuWamGpaCalculator: React.FC = () => {
  const [courses, setCourses] = useState<CourseResult[]>([
    { id: "c1", code: "COURSE 1", name: "Course 1", credits: 4.5, mark: null },
    { id: "c2", code: "COURSE 2", name: "Course 2", credits: 4.5, mark: null },
  ]);

  const totalCredits = useMemo(
    () =>
      courses.reduce(
        (sum, c) => sum + (Number.isFinite(c.credits) ? c.credits : 0),
        0
      ),
    [courses]
  );

  const wam = useMemo(() => {
    let weightedSum = 0;
    let creditsSum = 0;

    courses.forEach((c) => {
      if (c.mark != null && !Number.isNaN(c.mark) && c.credits > 0) {
        weightedSum += c.mark * c.credits;
        creditsSum += c.credits;
      }
    });

    if (creditsSum === 0) return 0;
    return weightedSum / creditsSum;
  }, [courses]);

  const approxGpa = useMemo(() => {
    let weightedGpaSum = 0;
    let creditsSum = 0;

    courses.forEach((c) => {
      if (c.mark == null || Number.isNaN(c.mark) || c.credits <= 0) return;
      const band = getBandAndGpa(c.mark);
      if (!band || band.gpa == null) return;
      weightedGpaSum += band.gpa * c.credits;
      creditsSum += c.credits;
    });

    if (creditsSum === 0) return 0;
    return weightedGpaSum / creditsSum;
  }, [courses]);

  const handleCourseChange = (
    id: string,
    field: "code" | "name" | "credits" | "mark",
    value: string
  ) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;

        if (field === "code") {
          return { ...c, code: value };
        }
        if (field === "name") {
          return { ...c, name: value };
        }
        if (field === "credits") {
          const num = parseFloat(value);
          return { ...c, credits: Number.isNaN(num) ? 0 : num };
        }
        if (field === "mark") {
          if (value === "") return { ...c, mark: null };
          const num = parseFloat(value);
          return { ...c, mark: Number.isNaN(num) ? null : num };
        }

        return c;
      })
    );
  };

  const addCourse = () => {
    const id = `c_${Date.now()}`;
    setCourses((prev) => [
      ...prev,
      {
        id,
        code: `COURSE ${prev.length + 1}`,
        name: `Course ${prev.length + 1}`,
        credits: 4.5,
        mark: null,
      },
    ]);
  };

  const removeCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="card card-highlight mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">
          5. WAM & GPA (Australia – Uni, approx.)
        </h2>
        <p className="text-muted small">
          Enter your completed courses, credit points, and marks to estimate
          your WAM (Weighted Average Mark) and an approximate GPA on a 1–7
          scale based on typical HD / D / C / P1 / P2 bands. Real university
          formulas may differ slightly.
        </p>

        <div className="table-responsive mb-3">
          <table className="table table-sm align-middle wam-table">
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Code</th>
                <th style={{ width: "35%" }}>Name</th>
                <th style={{ width: "15%" }}>Credits</th>
                <th style={{ width: "15%" }}>Mark (%)</th>
                <th style={{ width: "20%" }}>Band</th>
                <th style={{ width: "5%" }} />
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => {
                const band = getBandAndGpa(c.mark);
                return (
                  <tr key={c.id}>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        value={c.code}
                        onChange={(e) =>
                          handleCourseChange(c.id, "code", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        value={c.name}
                        onChange={(e) =>
                          handleCourseChange(c.id, "name", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        step="0.5"
                        min={0}
                        value={c.credits}
                        onChange={(e) =>
                          handleCourseChange(c.id, "credits", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        min={0}
                        max={100}
                        value={c.mark ?? ""}
                        placeholder="—"
                        onChange={(e) =>
                          handleCourseChange(c.id, "mark", e.target.value)
                        }
                      />
                    </td>
                    <td className="small">
                      {band ? (
                        <>
                          <strong>{band.id}</strong>{" "}
                          <span className="text-muted">
                            – {band.label}
                          </span>
                          {band.gpa != null && (
                            <span className="badge bg-light text-dark ms-2">
                              GPA {band.gpa}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                    <td className="text-end">
                      {courses.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeCourse(c.id)}
                        >
                          ✕
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary btn-sm mb-3"
          onClick={addCourse}
        >
          + Add course
        </button>

        <div className="border rounded p-3 bg-light">
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="small text-muted">Total credits</div>
              <div className="fw-semibold">{totalCredits.toFixed(2)}</div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="small text-muted">WAM (Weighted Avg Mark)</div>
              <div className="fw-semibold">
                {totalCredits > 0 ? wam.toFixed(2) + "%" : "—"}
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="small text-muted">
                Approx. GPA (1–7, band-based)
              </div>
              <div className="fw-semibold">
                {totalCredits > 0 ? approxGpa.toFixed(2) : "—"}
              </div>
            </div>
          </div>
          <p className="text-muted small mb-0 mt-2">
            This is an approximation using the HD/D/C/P1/P2 bands defined in
            this tool. Always check your official WAM/GPA in your university
            portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniAuWamGpaCalculator;
