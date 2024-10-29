// src/components/Calculator.tsx
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [currentGrade, setCurrentGrade] = useState<number>(0);
  const [desiredGrade, setDesiredGrade] = useState<number>(0);
  const [finalExamWeight, setFinalExamWeight] = useState<number>(0);
  const [requiredScore, setRequiredScore] = useState<number | null>(null);

  const calculateRequiredScore = (e: React.FormEvent) => {
    e.preventDefault();
    const required =
      (desiredGrade - (1 - finalExamWeight / 100) * currentGrade) /
      (finalExamWeight / 100);
    setRequiredScore(required);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h1 className="text-2xl font-bold mb-4">Final Exam Score Calculator</h1>
      <form onSubmit={calculateRequiredScore} className="space-y-4">
        <div>
          <label
            htmlFor="currentGrade"
            className="block text-sm font-medium text-gray-700"
          >
            Current Grade (%)
          </label>
          <input
            type="number"
            id="currentGrade"
            value={currentGrade}
            onChange={(e) => setCurrentGrade(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <div>
          <label
            htmlFor="desiredGrade"
            className="block text-sm font-medium text-gray-700"
          >
            Desired Grade (%)
          </label>
          <input
            type="number"
            id="desiredGrade"
            value={desiredGrade}
            onChange={(e) => setDesiredGrade(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <div>
          <label
            htmlFor="finalExamWeight"
            className="block text-sm font-medium text-gray-700"
          >
            Final Exam Weight (%)
          </label>
          <input
            type="number"
            id="finalExamWeight"
            value={finalExamWeight}
            onChange={(e) => setFinalExamWeight(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            required
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Calculate Required Score
        </button>
      </form>
      {requiredScore !== null && (
        <div className="mt-4">
          <p className="text-lg">
            You need to score{' '}
            <span className="font-bold">{requiredScore.toFixed(2)}%</span> on your final exam to
            achieve a <span className="font-bold">{desiredGrade}%</span> in the class.
          </p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
