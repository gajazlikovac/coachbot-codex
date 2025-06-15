"use client";

import { Input } from "@/shared/Input";
import { StepProps } from "./StepProps";

export default function Step2({question, category, subquestion, placeholder, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-y-4">
      <p className="text-center text-2xl text-main font-bold">{question}</p>
      <div className="flex justify-center p-2 w-full">
        <p className="text-left text-base text-gray-400 -mt-3 max-w-md">{subquestion}</p>
      </div>
      <Input
        id={`answer-2`}
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

export function Step2Title() {
  return (
    <h1 className="text-xl font-bold text-dark-aquamarine">PURPOSE / INTENT</h1>
  );
}
