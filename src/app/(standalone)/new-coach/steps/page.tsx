'use client';

import { useState } from 'react';
import { Button } from '@/shared/Button';
import Step1 from '../_steps/Step1';
import Step2 from '../_steps/Step2';
import Step3 from '../_steps/Step3';
import Step4 from '../_steps/Step4';
import Step5 from '../_steps/Step5';
import Step6 from '../_steps/Step6';
import Step7 from '../_steps/Step7';
import Step8 from '../_steps/Step8';
import Step9 from '../_steps/Step9';
import Step10 from '../_steps/Step10';

export default function NewCoach() {
  const questions = Array.from({ length: 10 }, (_, i) => `Question ${i + 1}`);
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(''));
  const [step, setStep] = useState(0);

  const steps = [
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
  ];

  const handleChange = (value: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[step] = value;
      return copy;
    });
  };

  const prevStep = () => setStep((s) => Math.max(0, s - 1));
  const nextStep = () => setStep((s) => Math.min(questions.length - 1, s + 1));

  const StepComponent = steps[step];

  return (
    <div className="flex min-h-0 flex-col items-center gap-y-6 p-6">
      <div className="flex gap-x-1">
        {questions.map((_, i) => (
          <span
            key={`indicator-${i}`}
            className={`size-2 rounded-full ${step === i ? 'bg-dark-aquamarine' : 'bg-storm-gray'}`}
          />
        ))}
      </div>

      <StepComponent
        question={questions[step]}
        value={answers[step]}
        onChange={handleChange}
      />

      <div className="flex gap-x-2">
        <Button
          onClick={prevStep}
          variant="outline"
          color="darkGray"
          disabled={step === 0}
          className="cbi-arrow-left aspect-square px-3 text-xl"
        />
        <Button
          onClick={nextStep}
          variant="solid"
          color="light"
          disabled={step === questions.length - 1}
          className="flex items-center gap-x-2"
        >
          Next
          <i className="cbi-arrow-right text-xl" />
        </Button>
      </div>
    </div>
  );
}
