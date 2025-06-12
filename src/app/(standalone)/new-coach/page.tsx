"use client";

import { Button } from "@/shared/Button";
import { Logo } from "@/shared/Logo";

export default function NewCoachWelcome() {
  return (
    <div className="flex flex-col items-center gap-y-6 p-6">
      <Logo className="mx-auto h-10 w-auto" />
      <h1 className="text-2xl font-bold text-main">
        Welcome to the Coach Setup
      </h1>
      <Button href="/new-coach/steps" variant="solid" color="light">
        Start
      </Button>
    </div>
  );
}
