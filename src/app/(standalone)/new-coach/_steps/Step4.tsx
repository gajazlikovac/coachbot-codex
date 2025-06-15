"use client";

import { Input } from "@/shared/Input";
import { StepProps } from "./StepProps";

export default function Step4({ question, subquestion, placeholder, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-y-4">
      <p className="text-center text-lg text-main">{question}</p>
      <Input
        id={`answer-4`}
        initialValue={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        inputClassName="border-main bg-transparent"
        readOnly={false}
      />
    </div>
  );
}

export function Step4Title() {
  return (
    <h1 className="text-2xl font-bold text-main">Step 4</h1>
  );
}