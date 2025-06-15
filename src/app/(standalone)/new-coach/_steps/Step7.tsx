"use client";

import { StepProps } from "./StepProps";

export default function Step7({ question, category, subquestion }: StepProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-y-4">
      <p className="text-center text-2xl text-main font-bold">{question}</p>
      <p className="text-center text-3xl text-main font-bold">{category}</p>
      <p className="text-center text-base text-gray-400 -mt-3">{subquestion}</p>

      <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-storm-gray bg-white/20 text-light-gray">
        Drag & drop your files here
      </div>
    </div>
  );
}

export function Step7Title() {
  return (
    <h1 className="text-xl font-bold text-dark-aquamarine">
      SOURCE KNOWLEDGE UPLOAD
    </h1>
  );
}
