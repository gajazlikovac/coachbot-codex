"use client";

import { Input } from "@/shared/Input";
import { StepProps } from "./StepProps";

export default function Step8({ question, category, subquestion, placeholder, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-y-4">
      <p className="text-center text-2xl text-main font-bold">{question}</p>
      <p className="text-center text-3xl text-main font-bold">{category}</p>
      <p className="text-center text-base text-gray-400 -mt-3">{subquestion}</p>
      <Input
        id={`answer-8`}
        type="textarea"
        initialValue={value}
        placeholderKey={placeholder}
        onChange={(e) => onChange((e.target as HTMLTextAreaElement).value)}
        inputClassName="border-white/60 bg-white/20 !max-h-28"
        readOnly={false}
      />
    </div>
  );
}

export function Step8Title() {
  return (
    <h1 className="text-xl font-bold text-dark-aquamarine">PROFILE</h1>
  );
}