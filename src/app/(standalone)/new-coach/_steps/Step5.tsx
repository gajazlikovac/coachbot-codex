"use client";

import { Input } from "@/shared/Input";
import { StepProps } from "./StepProps";

export default function Step5({ question, subquestion, placeholder, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-y-4">
      <p className="text-center text-lg text-main">{question}</p>
      <Input
        id={`answer-5`}
        initialValue={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        inputClassName="border-main bg-transparent"
        readOnly={false}
      />
    </div>
  );
}

export function Step5Title() {
  return (
    <h1 className="text-2xl font-bold text-main">Step 5</h1>
  );
}