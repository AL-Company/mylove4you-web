import React from "react";

interface Props {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
  isPreviousDisabled?: boolean;
}

const StepNavigation: React.FC<Props> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  isNextDisabled = false,
  isPreviousDisabled = currentStep === 1,
}) => {
  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < currentStep ? "bg-pink-500" : "bg-slate-700"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between">
        <button
          onClick={onPrevious}
          disabled={isPreviousDisabled}
          className="px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-slate-800 text-white hover:bg-slate-700"
        >
          Voltar
        </button>

        <div className="text-center text-gray-400">
          Etapa {currentStep} de {totalSteps}
        </div>

        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600"
        >
          {currentStep === totalSteps ? "Finalizar" : "Próximo"}
        </button>
      </div>
    </div>
  );
};

export default StepNavigation;
