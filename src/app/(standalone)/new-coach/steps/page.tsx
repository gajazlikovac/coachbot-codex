'use client';

import { useRef, useState } from 'react';
import { Button } from '@/shared/Button';
import Step1 from '../_steps/Step1';
import Step2 from '../_steps/Step2';
import Step3 from '../_steps/Step3';
import Step4 from '../_steps/Step4';
import Step5 from '../_steps/Step5';
import Step6 from '../_steps/Step6';
import Step7 from '../_steps/Step7';
import Step8 from '../_steps/Step8';
import Step9 from '../_steps/Step9';
import Step10 from '../_steps/Step10';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NewCoach() {
  const questions = Array.from({ length: 10 }, (_, i) => `Question ${i + 1}`);
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(''));
  const [step, setStep] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const steps = [
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
  ];

  const handleChange = (index: number, value: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const prevStep = () => swiperRef.current?.slidePrev();
  const nextStep = () => swiperRef.current?.slideNext();

  return (
    <div className="flex min-h-0 flex-col items-center gap-y-6 p-6">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setStep(s.activeIndex)}
        className="w-full flex-1"
      >
        {steps.map((StepComponent, i) => (
          <SwiperSlide key={`step-${i}`} className="flex justify-center">
            <StepComponent
              question={questions[i]}
              value={answers[i]}
              onChange={(val) => handleChange(i, val)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-x-2">
        <Button
          onClick={prevStep}
          variant="outline"
          color="darkGray"
          disabled={step === 0}
          className="cbi-arrow-left aspect-square px-3 text-xl"
        />
        <Button
          onClick={nextStep}
          variant="solid"
          color="light"
          disabled={step === questions.length - 1}
          className="flex items-center gap-x-2"
        >
          Next
          <i className="cbi-arrow-right text-xl" />
        </Button>
      </div>
    </div>
  );
}
