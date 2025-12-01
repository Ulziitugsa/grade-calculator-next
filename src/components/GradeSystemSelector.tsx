"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

import type { GradeSystemId, GradeSystem } from "../gradeSystems";
import { gradeSystems, gradeSystemRoutes } from "../gradeSystems";

type Props = {
  selectedSystemId: GradeSystemId;
};

const GradeSystemSelector: React.FC<Props> = ({ selectedSystemId }) => {
  const router = useRouter();
  const pathname = usePathname();

  const selected: GradeSystem | undefined = gradeSystems.find(
    (g) => g.id === selectedSystemId
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value as GradeSystemId;
    const targetRoute = gradeSystemRoutes[newId];

    if (!targetRoute) return;
    if (pathname === targetRoute) return;

    router.push(targetRoute);
  };

  return (
    <div className="card card-highlight mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">1. Select grading system</h2>

        <div className="mb-3">
          <label className="form-label">Grading system</label>
          <select
            className="form-select"
            value={selectedSystemId}
            onChange={handleChange}
          >
            {gradeSystems.map((gs) => (
              <option key={gs.id} value={gs.id}>
                {gs.name}
              </option>
            ))}
          </select>
        </div>

        {selected?.description && (
          <p className="text-muted mb-2">{selected.description}</p>
        )}

        {selected && (
          <>
            <h3 className="h6 mt-3">Grade bands</h3>
            <ul className="list-unstyled mb-0 bands-list">
              {selected.bands.map((b) => (
                <li key={b.id} className="small mb-1">
                  <strong>{b.id}</strong> – {b.label} ({b.min}–{b.max}%)
                  {b.gpa != null && (
                    <span className="badge bg-light text-dark ms-2">
                      GPA ~ {b.gpa}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default GradeSystemSelector;
