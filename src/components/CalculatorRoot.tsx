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
  initialSystem?: GradeSystemId;
};

const DEFAULT_ASSESSMENTS: Assessment[] = [
  { id: "a1", name: "Assignment 1", weight: 20, score: null },
  { id: "a2", name: "Assignment 2", weight: 30, score: null },
  { id: "exam", name: "Final Exam", weight: 50, score: null },
];

export default function CalculatorRoot({ initialSystem = "au_uni" }: Props) {
  const [systemId, setSystemId] = usePersistentState<GradeSystemId>(
    "ggc:systemId",
    initialSystem
  );

  const [assessments, setAssessments] = usePersistentState<Assessment[]>(
    "ggc:assessments",
    DEFAULT_ASSESSMENTS
  );

  const [targetFinalPercent, setTargetFinalPercent] =
    usePersistentState<number>("ggc:targetFinalPercent", 85);

  const [targetAssessmentId, setTargetAssessmentId] =
    usePersistentState<string>("ggc:targetAssessmentId", "exam");

  const system = useMemo(() => getGradeSystem(systemId), [systemId]);

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
        <GradeSystemSelector
          selectedSystemId={systemId}
          onChange={setSystemId}
        />

        <AssessmentTable
          assessments={assessments}
          onChange={setAssessments}
        />
      </div>

      <div className="col-lg-5">
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

        {systemId === "au_uni" && <UniAuWamGpaCalculator />}
      </div>
    </div>
  );
}
