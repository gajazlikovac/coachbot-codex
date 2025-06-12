'use client';

import React, { ReactNode } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import ComingSoon from './CoomingSoon';

export interface MenuOption {
  label?: string;
  labelKey?: string;
  subTitle?: string;
  inDevelompent?: boolean;
  divider?: boolean;
  icon?: string;
  className?: string;
  onClick?: (data: any) => void;
  children?: (close: () => any) => ReactNode;
}

interface DropdownMenuProps {
  menuId?: string;
  menuBtnClass?: string;
  menuBtnIcon?: string;
  menuItemsClass?: string;
  options: MenuOption[];
}

export function DropdownMenu({ menuId, menuBtnClass, menuBtnIcon, menuItemsClass, options }: DropdownMenuProps) {
  return (
    <Menu>
      {({ open, close }) => (
        <div key={menuId}>
          <MenuButton
            className={twMerge(
              'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-main focus:outline-none data-[focus]:text-main data-[hover]:text-main data-[open]:text-main',
              menuBtnClass
            )}
          >
            {menuBtnIcon && <i className={menuBtnIcon}></i>}
          </MenuButton>

          {open && (
            <MenuItems
              transition
              anchor="bottom end"
              className={twMerge(
                'z-10 flex w-max min-w-40 flex-col gap-y-1.5 rounded-xl border border-light-gray bg-violet-950 p-2.5 text-light-gray transition duration-200 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0',
                menuItemsClass
              )}
            >
              {options &&
                options.map((option: MenuOption, id: number) => (
                  <MenuItem key={`menu-item-${id}`} as={'div'}>
                    {option.children ? (
                      option.children(close)
                    ) : (
                      <button
                        onClick={() => option.onClick?.(menuId)}
                        className={twMerge(
                          'group flex w-full items-center justify-start gap-2 p-1.5 text-base font-semibold hover:text-main data-[focus]:text-main data-[hover]:text-main',
                          option.className
                        )}
                      >
                        {option.icon && <i className={option.icon}></i>}
                        <div className="flex flex-col items-start justify-start">
                          {option.label}
                          {option.subTitle && <span className="leading-4 text-light-gray"> {option.subTitle}</span>}
                          {option.inDevelompent && <ComingSoon onlyLabel={true} />}
                        </div>
                      </button>
                    )}
                    {option.divider && <MenuSeparator className="my-1 h-px bg-storm-gray" />}
                  </MenuItem>
                ))}
            </MenuItems>
          )}
        </div>
      )}
    </Menu>
  );
}
