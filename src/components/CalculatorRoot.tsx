"use client";

import React, { useEffect, useMemo } from "react";

import GradeSystemSelector from "./GradeSystemSelector";
import AssessmentTable from "./AssessmentTable";
import FinalGradeSummary from "./FinalGradeSummary";
import RequiredScorePanel from "./RequiredScorePanel";
import UniAuWamGpaCalculator from "./UniAuWamGpaCalculator";

import type { GradeSystemId } from "../gradeSystems";
import { getBandForPercentage, getGradeSystem } from "../gradeSystems";

import type { Assessment } from "../gradeUtils";
import {
  calculateCurrentWeightedPercentage,
  calculateFinalPercentage,
  calculateRequiredScoreOnAssessment,
  getTotalWeight,
} from "../gradeUtils";

import { usePersistentState } from "../usePersistentState";

type Props = {
  /** Fixed grading system for this page (route). Defaults to US letter. */
  systemId?: GradeSystemId;
  /** Whether to show the AU-only WAM & GPA panel. */
  showWamPanel?: boolean;
};

const DEFAULT_ASSESSMENTS: Assessment[] = [
  { id: "a1", name: "Assignment 1", weight: 20, score: null },
  { id: "a2", name: "Assignment 2", weight: 30, score: null },
  { id: "exam", name: "Final Exam", weight: 50, score: null },
];

export default function CalculatorRoot({
  systemId = "us_letter", // 👈 default for pages that don't specify
  showWamPanel = false,
}: Props) {
  const effectiveSystemId = systemId;

  const [assessments, setAssessments] = usePersistentState<Assessment[]>(
    "ggc:assessments",
    DEFAULT_ASSESSMENTS
  );

  const [targetFinalPercent, setTargetFinalPercent] =
    usePersistentState<number>("ggc:targetFinalPercent", 85);

  const [targetAssessmentId, setTargetAssessmentId] =
    usePersistentState<string>("ggc:targetAssessmentId", "exam");

  const system = useMemo(
    () => getGradeSystem(effectiveSystemId),
    [effectiveSystemId]
  );

  const totalWeight = useMemo(
    () => getTotalWeight(assessments),
    [assessments]
  );

  const { currentPercent, completedWeight } = useMemo(
    () => calculateCurrentWeightedPercentage(assessments),
    [assessments]
  );

  const finalPercent = useMemo(
    () => calculateFinalPercentage(assessments),
    [assessments]
  );

  const finalBand = useMemo(
    () => getBandForPercentage(system, finalPercent),
    [system, finalPercent]
  );

  const requiredScore = useMemo(
    () =>
      calculateRequiredScoreOnAssessment(
        assessments,
        targetAssessmentId,
        targetFinalPercent
      ),
    [assessments, targetAssessmentId, targetFinalPercent]
  );

  useEffect(() => {
    if (!assessments.find((a) => a.id === targetAssessmentId)) {
      if (assessments.length > 0) {
        setTargetAssessmentId(assessments[assessments.length - 1].id);
      }
    }
  }, [assessments, targetAssessmentId, setTargetAssessmentId]);

  return (
    <div className="row g-4">
      <div className="col-lg-7">
        {/* 👇 selector now only needs the current system id */}
        <GradeSystemSelector selectedSystemId={effectiveSystemId} />

        <AssessmentTable
          assessments={assessments}
          onChange={setAssessments}
        />
      </div>

      <div className="col-lg-5">
        <div className="small text-muted mb-2">
          Grading system: <strong>{system.name}</strong>
        </div>
        <FinalGradeSummary
          totalWeight={totalWeight}
          completedWeight={completedWeight}
          currentPercent={currentPercent}
          finalPercent={finalPercent}
          finalBand={finalBand}
        />

        <RequiredScorePanel
          assessments={assessments}
          targetFinalPercent={targetFinalPercent}
          onTargetFinalPercentChange={setTargetFinalPercent}
          targetAssessmentId={targetAssessmentId}
          onTargetAssessmentChange={setTargetAssessmentId}
          requiredScore={requiredScore}
        />

        {/* 👇 WAM panel only on AU + when explicitly enabled */}
        {showWamPanel && effectiveSystemId === "au_uni" && (
          <UniAuWamGpaCalculator />
        )}
      </div>
    </div>
  );
}
