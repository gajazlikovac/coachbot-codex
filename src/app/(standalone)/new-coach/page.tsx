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
      <h1 className="text-center text-2xl font-bold uppercase text-white">
        LET'S CREATE YOU AI COACH
      </h1>
      <p className="max-w-md text-center text-light-gray">
        You’re about to design a powerful assistant tailored to your coaching
        style and goals. The process includes 10 short, focused steps — each
        with a single question. You can respond by voice or text.
      </p>
      <div className="w-full max-w-md rounded-xl bg-white/30 p-4">
        <p className="text-center text-light-gray">Example questions include:</p>
        <p className="text-center text-white">“Who is your Coach for?” “What’s their main purpose?” “How should they speak or guide?”</p>
      </div>
      <p className="text-primary-green">Ready to Begin?</p>
      <Button
        href="/new-coach/steps"
        variant="solid"
        color="primary"
        className="flex items-center gap-x-2"
      >
        <i className="cbi-add-square" />
        Start Creating
      </Button>
    </div>
  );
}
