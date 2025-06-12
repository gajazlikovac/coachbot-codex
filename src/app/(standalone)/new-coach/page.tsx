'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/shared/Button';

export default function NewCoachWelcome() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-y-6 p-6">
      <h1 className="text-2xl font-bold text-main">Welcome to the Coach Setup</h1>
      <Button variant="solid" color="light" onClick={() => router.push('./steps')}>
        Start
      </Button>
    </div>
  );
}
