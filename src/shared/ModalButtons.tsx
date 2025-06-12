'use client';

import { ReactNode, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from './Button';
import { Modal, ModalProps } from './Modal';

export function DeleteWithConfirmationButton({
  config,
  iconClassName,
  className,
  children,
  buttonText,
}: {
  config: Omit<ModalProps, 'isOpen' | 'closeModal'>;
  iconClassName?: string;
  className?: string;
  children: ReactNode;
  buttonText?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConfirm = useCallback(async () => {
    config?.confirm && (await config?.confirm());
    setModalOpen(false);
  }, [config.confirm]);

  return (
    <>
      <Button className={twMerge('items-center justify-center', className)} onClick={() => setModalOpen(true)}>
        <i className={iconClassName}></i>
        {buttonText}
      </Button>
      {config && modalOpen && (
        <Modal
          {...config}
          isOpen={modalOpen}
          closeModal={() => setModalOpen(false)}
          confirm={handleConfirm}
          confirmButtonClass="bg-main hover:bg-white/[8%] hover:border-background-border/[16%] text-background"
        >
          {children}
        </Modal>
      )}
    </>
  );
}

export function EditModalButton({
  initialValue,
  config,
  className,
  children,
}: {
  config: Omit<ModalProps, 'isOpen' | 'closeModal'>;
  className?: string;
  children: ReactNode;
  initialValue: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleConfirm = useCallback(async () => {
    config?.confirm && (await config?.confirm(value));
    setModalOpen(false);
  }, [config.confirm, value]);

  return (
    <>
      <Button className={(twMerge('cbi-trash'), className)} onClick={() => setModalOpen(true)} />
      {config && modalOpen && (
        <Modal {...config} isOpen={modalOpen} closeModal={() => setModalOpen(false)} confirm={handleConfirm}>
          {children}
          <input
            id="edit-value-input"
            required
            defaultValue={initialValue || ''}
            className={twMerge(
              'focus:no-outline rounded-lg border border-light-gray bg-white/[18%] px-4 py-2 text-lg text-main placeholder:text-base focus:ring-0'
            )}
            onChange={(e) => setValue(e.target.value)}
          />
        </Modal>
      )}
    </>
  );
}

export function ModalButton({
  config,
  className,
  children,
  showButtons = false,
}: {
  config: Omit<ModalProps, 'isOpen' | 'closeModal'>;
  className?: string;
  children: ReactNode;
  showButtons?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button className={(twMerge('cbi-trash'), className)} onClick={() => setModalOpen(true)} />
      {config && modalOpen && (
        <Modal
          {...config}
          showButtons={showButtons}
          isOpen={modalOpen}
          closeModal={() => setModalOpen(false)}
          confirm={() => setModalOpen(false)}
        >
          {children}
        </Modal>
      )}
    </>
  );
}
