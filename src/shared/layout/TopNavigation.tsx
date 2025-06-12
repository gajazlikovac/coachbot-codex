'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { Button } from '../Button';

const variantStyles = {
  main: {
    nav: 'max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl bg-graphic/[14%] border border-white/[2%]',
    option: 'basis-1/4 text-light-gray hover:bg-main hover:text-background',
    selected: 'bg-main text-background',
  },
  secondary: {
    nav: 'max-w-2xl gap-1',
    option:
      'text-light-gray text-sm bg-white/[8%] border border-background-border/[18%] hover:border-main hover:text-main px-16 font-medium',
    selected: 'bg-storm-gray text-main hover:border-background-border/[18%]',
  },
};

export interface NavigationOption {
  id?: string;
  label: string;
  icon?: string;
  href: string;
  hidden?: boolean;
  clickHandler?: (opion: NavigationOption) => void;
}

export default function TopNavigation({
  variant = 'main',
  strictEqual,
  navigationOptions,
  className,
  optionClassName,
  optionClickHandler,
}: {
  variant: 'main' | 'secondary';
  strictEqual?: boolean;
  navigationOptions: NavigationOption[];
  className?: string;
  optionClassName?: string;
  optionClickHandler?: (option: NavigationOption) => void;
}) {
  const t = useTranslations();
  const pathname = usePathname();

  const getIsActive = useCallback(
    ({ href }: NavigationOption) => (strictEqual ? pathname === href : pathname.startsWith(href)),
    [strictEqual, pathname]
  );

  return (
    <nav className={twMerge('isolate flex flex-grow flex-wrap rounded-lg p-1', variantStyles[variant].nav, className)}>
      {navigationOptions.map(
        (option: NavigationOption, id: number) =>
          !option.hidden && (
            <Button
              key={id}
              id={option.id}
              href={option.href}
              className={twMerge(
                'flex-1 text-nowrap rounded-lg px-3 py-1.5',
                optionClassName,
                variantStyles[variant].option,
                getIsActive(option) && variantStyles[variant].selected
              )}
              onClick={() => optionClickHandler?.(option)}
            >
              {option.icon && <i className={`${option.icon} text-lg`}></i>}
              {t(option.label)}
            </Button>
          )
      )}
    </nav>
  );
}
