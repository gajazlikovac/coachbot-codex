'use client';

import { Button } from '@/shared/Button';

export default function NewCoachWelcome() {
  return (
    <div className="flex flex-col items-center gap-y-6 p-6">
      <h1 className="text-2xl font-bold text-main">Welcome to the Coach Setup</h1>
      <Button href="/new-coach/steps" variant="solid" color="light">

        Start
      </Button>
    </div>
  );
}
