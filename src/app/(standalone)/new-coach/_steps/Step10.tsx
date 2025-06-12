'use client';

import { Input } from '@/shared/Input';
import { StepProps } from './StepProps';

export default function Step10({ question, value, onChange }: StepProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-y-4">
      <p className="text-lg text-main">{question}</p>
      <Input
        id={`answer-10`}
        value={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        inputClassName="border-main bg-transparent"
      />
    </div>
  );
}
