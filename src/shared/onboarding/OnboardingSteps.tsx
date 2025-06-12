'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tour } from 'nextstepjs';

import { Theme } from '@/contexts/ThemeContext';

function BlurredImage(props: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative flex min-h-52 w-full flex-grow items-center justify-center overflow-hidden rounded-xl transition-[height] duration-300 will-change-contents">
      <Image
        width={2960}
        height={1621}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;utf8,<svg width='700' height='220' xmlns='http://www.w3.org/2000/svg'><filter id='b'><feGaussianBlur stdDeviation='3' /></filter><rect width='700' height='220' fill='%23e2e4e8' filter='url(%23b)'/></svg>"
        className={`relative h-auto w-full rounded-xl object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadingComplete={() => setLoaded(true)}
        {...props}
        alt={props.alt || 'Blurred onboarding image'}
      />
    </div>
  );
}

export const getSteps = (theme: Theme, t: any): Tour[] => [
  {
    tour: 'mainTour',
    steps: [
      {
        icon: <>🎉</>,
        title: t('Common.Onboarding.steps.1.title'),
        content: (
          <div className="flex min-h-0 w-full flex-col items-center justify-center gap-y-5 text-center text-main">
            <p>{t('Common.Onboarding.steps.1.description')} </p>

            <video className="aspect-video w-full rounded-xl" controls playsInline preload="metadata">
              <source src="/videos/Hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p>{t('Common.Onboarding.steps.1.subDescription')} </p>
          </div>
        ),
      },
      {
        icon: <>📱</>,
        title: t('Common.Onboarding.steps.2.title'),
        content: (
          <div className="flex min-h-0 flex-col items-center justify-center gap-y-5 text-center text-main">
            <p>{t('Common.Onboarding.steps.2.description')} </p>
            <BlurredImage src={`/images/onboarding/step-2_MacBook_${theme}.png`} alt="Step 2: desktop Studio image" />
          </div>
        ),
      },
      {
        icon: <>🧭</>,
        title: t('Common.Onboarding.steps.3.title'),
        content: (
          <div className="flex min-h-0 flex-col items-center justify-center gap-y-5 text-center text-main">
            <p>{t('Common.Onboarding.steps.1.description')} </p>
            <div className="flex max-h-full min-w-0 flex-grow items-center justify-center gap-x-2 rounded-xl">
              {[
                '/images/onboarding/step-3_sidebar-1',
                '/images/onboarding/step-3_sidebar-2',
                '/images/onboarding/step-3_sidebar-3',
              ].map((src, index) => (
                <div className="flex w-1/3 items-center justify-center overflow-hidden" key={`step-2-image-${index}`}>
                  <BlurredImage src={`${src}_${theme}.png`} alt={`Step 3: sidebar image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ),
        selector: '#sidebar-toggle',
        pointerPadding: 0,
        pointerRadius: 12,
      },
      {
        icon: <>🧠</>,
        title: t('Common.Onboarding.steps.4.title'),
        content: (
          <div className="flex min-h-0 flex-grow flex-col items-center justify-center gap-y-5 py-5 text-main">
            <div className="flex w-full items-center justify-start gap-x-5 border-b border-storm-gray px-[15%] pb-5">
              <span className="inline-flex aspect-square items-center justify-center rounded-xl bg-graphic/[14%] p-3.5 text-main">
                <i className="cbi-cpu !text-7xl" />
              </span>
              <p className="text-wrap text-main">
                <span className="font-bold text-dark-aquamarine"> {t('Common.Onboarding.steps.4.items.0.title')} </span>
                {t('Common.Onboarding.steps.4.items.0.description')}
              </p>
            </div>
            <div className="flex w-full items-center justify-center gap-x-5 px-[15%]">
              <span className="inline-flex aspect-square items-center justify-center rounded-xl bg-graphic/[14%] p-3.5 text-main">
                <i className="cbi-cpu !text-7xl" />
              </span>
              <p className="text-main">
                <span className="font-bold text-dark-aquamarine"> {t('Common.Onboarding.steps.4.items.1.title')} </span>
                {t('Common.Onboarding.steps.4.items.1.description')}
              </p>
            </div>
          </div>
        ),
        selector: '#assistant-manage',
        pointerPadding: 0,
        pointerRadius: 12,
      },
      {
        icon: <>⚠️</>,
        title: t('Common.Onboarding.steps.5.title'),
        content: (
          <div className="flex min-h-0 flex-col items-center justify-center gap-y-5 text-center text-main">
            <p>{t('Common.Onboarding.steps.5.description')} </p>
            <BlurredImage src={`/images/onboarding/step-5_knowledge_${theme}.png`} alt="Step 5: content page image" />
            <p> {t('Common.Onboarding.steps.5.subDescription')} </p>
          </div>
        ),
        selector: '#nav-content',
        pointerPadding: 0,
        pointerRadius: 12,
      },
      {
        icon: <>🚀</>,
        title: t('Common.Onboarding.steps.6.title'),
        content: (
          <div className="flex min-h-0 w-full flex-col items-center gap-y-7 pt-5 text-center text-base text-main">
            <p>
              {t.rich('Common.Onboarding.steps.6.title1', {
                link: (chunk: any) => (
                  <Link className="font-bold text-dark-aquamarine underline underline-offset-4" href="#">
                    {chunk}
                  </Link>
                ),
              })}
            </p>

            <p className="border-b border-storm-gray pb-7">
              {t.rich('Common.Onboarding.steps.6.title2', {
                link: (chunk: any) => (
                  <Link className="font-bold text-dark-aquamarine underline underline-offset-4" href="#">
                    {chunk}
                  </Link>
                ),
              })}
            </p>

            <span className="text-sm"> {t('Common.Onboarding.steps.6.subDescription')}</span>
          </div>
        ),
      },
    ],
  },
];
