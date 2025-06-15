"use client";

import { Input } from "@/shared/Input";
import { StepProps } from "./StepProps";

export default function Step6({ question, subquestion, placeholder, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-xl flex-col gap-y-4">
      <p className="text-center text-2xl text-main font-bold">{question}</p>
      <p className="text-center text-base text-gray-400 -mt-3">{subquestion}</p>
      <Input
        id={`answer-6`}
        initialValue={value}
        placeholder={placeholder + "..."}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        inputClassName="border-white/60 bg-white/20"
        readOnly={false}
      />
    </div>
  );
}

export function Step6Title() {
  return (
    <h1 className="text-xl font-bold text-dark-aquamarine">Step 6</h1>
  );
}