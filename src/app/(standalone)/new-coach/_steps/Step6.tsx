"use client";

import { useState } from "react";
import { Input } from "@/shared/Input";
import { Button } from "@/shared/Button";
import { StepProps } from "./StepProps";

export default function Step6({
  question,
  subquestion,
  placeholder,
  value,
  onChange,
}: StepProps) {
  const [rows, setRows] = useState<{ value: string; added: boolean }[]>(() => {
    if (value.trim().length) {
      return value
        .split("\n")
        .filter((v) => v.trim().length)
        .map((v) => ({ value: v, added: true }));
    }

    return [{ value: "", added: false }];
  });

  const updateParent = (r: { value: string; added: boolean }[]) => {
    onChange(r.filter((row) => row.added).map((row) => row.value).join("\n"));
  };

  const handleInputChange = (index: number, val: string) => {
    setRows((prev) => {
      const copy = [...prev];
      copy[index].value = val;
      if (copy[index].added) {
        updateParent(copy);
      }
      return copy;
    });
  };

  const handleAddToggle = (index: number) => {
    setRows((prev) => {
      const copy = [...prev];
      if (!copy[index].added) {
        copy[index].added = true;
      } else {
        copy.splice(index, 1);
      }

      if (!copy.length) {
        copy.push({ value: "", added: false });
      }

      updateParent(copy);
      return copy;
    });
  };

  const handleAddRow = (index: number) => {
    setRows((prev) => {
      const copy = [...prev];
      copy.splice(index + 1, 0, { value: "", added: false });
      return copy;
    });
  };


  return (
    <div className="flex w-full max-w-2xl flex-col gap-y-4">
      <p className="text-center text-2xl text-main font-bold">{question}</p>
      <p className="text-center text-3xl text-main font-bold">{category}</p>
      <p className="text-center text-base text-gray-400 -mt-3">{subquestion}</p>

      {rows.map((row, i) => (
        <div key={i} className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Input
              key={`input-${i}`}
              id={`answer-6-${i}`}
              type="url"
              placeholder={placeholder + "..."}
              initialValue={row.value}
              onChange={(e) =>
                handleInputChange(i, (e.target as HTMLInputElement).value)
              }
              inputClassName="border-white/60 bg-white/20"
              readOnly={false}
            />
            <Button
              type="button"
              variant="solid"
              color="gray"
              className={row.added ? "cbi-trash aspect-square p-3" : "px-4"}
              onClick={() => handleAddToggle(i)}
            >
              {row.added ? "" : "Add"}
            </Button>
          </div>
          {row.added && i === rows.length - 1 && (
            <Button
              type="button"
              variant="solid"
              color="gray"
              className="cbi-add self-start aspect-square p-2 text-lg"
              onClick={() => handleAddRow(i)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function Step6Title() {
  return (
    <h1 className="text-xl font-bold text-dark-aquamarine">SOURCE KNOWLEDGE UPLOAD</h1>
  );
}