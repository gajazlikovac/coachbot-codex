"use client";

import { useState } from "react";
import { Button } from "@/shared/Button";
import { Logo } from "@/shared/Logo";
import { PrivateRoutes } from "@/lib/constants";
import Step1, { Step1Title } from "../_steps/Step1";
import Step2, { Step2Title } from "../_steps/Step2";
import Step3, { Step3Title } from "../_steps/Step3";
import Step4, { Step4Title }from "../_steps/Step4";
import Step5, { Step5Title } from "../_steps/Step5";
import Step6, { Step6Title } from "../_steps/Step6";
import Step7, { Step7Title } from "../_steps/Step7";
import Step8, { Step8Title } from "../_steps/Step8";
import Step9, { Step9Title } from "../_steps/Step9";
import Step10, { Step10Title } from "../_steps/Step10";

const data = require('./step_data.json');

export default function NewCoach() {
  const steps_data = Array.from({ length: 10 }, (_, i) => {
    return data[`step_${i + 1}`];
  });
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""));
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

  const titles = [
    Step1Title,
    Step2Title,
    Step3Title,
    Step4Title,
    Step5Title,
    Step6Title,
    Step7Title,
    Step8Title,
    Step9Title,
    Step10Title,
  ]

  const handleChange = (index: number, value: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = value;

      return copy;
    });
  };

  const prevStep = () => setStep((s) => Math.max(0, s - 1));
  const nextStep = () => setStep((s) => Math.min(steps.length - 1, s + 1));

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-y-6 p-6">
      <Button
        href={PrivateRoutes.dashboard}
        variant="solid"
        color="gray"
        className="cbi-close-circle fixed right-6 top-6 aspect-square w-12 shrink-0 px-3 py-0 text-lg text-main"
      />
      <Logo className="mx-auto mb-4 h-10 w-auto" />

      <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-6">
        <p className="text-center text-base text-gray-400 -mt-3">Create AI Coach</p>
        
        {(() => {
          const StepTitleComponent = titles[step];
          return (
            <StepTitleComponent/>
          );
        })()}
        
        <div className="w-full max-w-2xl border-b border-white/30 my-0" />


        <div className="flex items-center justify-center gap-x-4">
          <div className="flex gap-x-2">
            {steps_data.map((_, i) => (
              <span
          key={i}
          className={`h-2 w-2 rounded-full ${i === step ? "bg-dark-aquamarine" : "bg-gray-400/50"}`}
              />
            ))}
          </div>
          <span className="text-sm text-white">
            {step + 1}/{steps_data.length}
          </span>
        </div>

        {(() => {
          const StepComponent = steps[step];
          return (
        <StepComponent
          question={steps_data[step].question}
          category={steps_data[step].category}
          subquestion={steps_data[step].subquestion}
          placeholder={steps_data[step].placeholder}
          value={answers[step]}
          onChange={(val) => handleChange(step, val)}
        />
          );
        })()}

        <div className="flex gap-x-2">
          <Button
            onClick={prevStep}
            variant="outline"
            color="darkGray"
            disabled={step === 0}
            className="cbi-arrow-left aspect-square h-12 text-xl bg-white/10"
          />
            <Button
            onClick={() => {
              if (step === steps_data.length - 1) {
              window.location.href = './summary';
              } else {
              nextStep();
              }
            }}
            variant="solid"
            color="light"
            className={`flex h-12 items-center gap-x-2 w-48 ${
              step === steps_data.length - 1 ? 'bg-dark-aquamarine text-white' : ''
            }`}
            >
            <i className="cbi-arrow-right text-xl" />
            {step === steps_data.length - 1 ? 'Review & Create' : 'Next'}
            </Button>
        </div>
      </div>
    </div>
  );
}
