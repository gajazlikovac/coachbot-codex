"use client";

import { Button } from "@/shared/Button";
import { Logo } from "@/shared/Logo";
import { PrivateRoutes } from "@/lib/constants";

export default function NewCoachWelcome() {
  return (
    <div className="relative flex flex-col items-center gap-y-6 p-6">
      <Button
        href={PrivateRoutes.dashboard}
        variant="solid"
        color="gray"
        className="cbi-close-circle fixed right-6 top-6 aspect-square w-12 shrink-0 px-3 py-0 text-lg text-main"
      />
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
