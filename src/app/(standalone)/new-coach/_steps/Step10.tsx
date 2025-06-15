"use client";

import { Input } from "@/shared/Input";
import { StepProps } from "./StepProps";

export default function Step10({ question, subquestion, placeholder, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-xl flex-col gap-y-4">
      <p className="text-center text-2xl text-main font-bold">{question}</p>
      <p className="text-center text-base text-gray-400 -mt-3">{subquestion}</p>
      <Input
        id={`answer-10`}
        initialValue={value}
        placeholder={placeholder + "..."}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        inputClassName="border-white/60 bg-white/20"
        readOnly={false}
      />
    </div>
  );
}

export function Step10Title() {
  return (
    <h1 className="text-xl font-bold text-dark-aquamarine">Step 10</h1>
  );
}
