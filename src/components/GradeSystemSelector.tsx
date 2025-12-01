// src/components/GradeSystemSelector.tsx
import React from "react";
import type { GradeSystemId, GradeSystem } from "../gradeSystems";
import { gradeSystems } from "../gradeSystems";


type Props = {
  selectedSystemId: GradeSystemId;
  onChange: (id: GradeSystemId) => void;
};

const GradeSystemSelector: React.FC<Props> = ({
  selectedSystemId,
  onChange,
}) => {
  const selected: GradeSystem | undefined = gradeSystems.find(
    (g) => g.id === selectedSystemId
  );

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="h5 mb-3">1. Select grading system</h2>

        <div className="mb-3">
          <label className="form-label">Grading system</label>
          <select
            className="form-select"
            value={selectedSystemId}
            onChange={(e) => onChange(e.target.value as GradeSystemId)}
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
