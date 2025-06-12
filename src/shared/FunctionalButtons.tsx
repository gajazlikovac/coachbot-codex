'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { useAsideContext } from '@/contexts/AsideContext';
import { PrivateRoutes } from '@/lib/constants';
import { HeapTrackEvent } from '@/lib/models/analytic.models';
import { Assistant } from '@/lib/models/assistant.models';
import { Chat } from '@/lib/models/chat.models';
import { User } from '@/lib/models/common.models';
import { heapAnalytics } from '@/lib/services/HeapAnalytics';
import { isAssistantCreationAllowed } from '@/lib/utils/common.utils';
import { getFomatedDate } from '@/lib/utils/date.utils';
import { generateAssistantFile, generateChatFile, handleFileDownload } from '@/lib/utils/file.utils';
import { getAssistantConfiguration } from '@/server/actions/assistantActions';
import { getChat } from '@/server/actions/chatActions';
import { Button } from './Button';
import Tooltip from './Tooltip';

export function AsideToggleButton({
  className,
  label,
  closedLabel,
  open,
  iconClassName,
  id,
}: {
  id?: string;
  className?: string;
  label?: string;
  open: boolean;
  closedLabel?: string;
  iconClassName?: string;
}) {
  const { toggleAside, isAsideOpen } = useAsideContext();

  if (open && isAsideOpen) return null;

  return (
    <Button id={id} variant="solid" color="gray" onClick={toggleAside} className={`z-10 w-max px-3.5 ${className}`}>
      <i className={`${!isAsideOpen ? 'cbi-arrow-right' : 'cbi-arrow-left'} text-lg ${iconClassName}`} />

      {closedLabel && !isAsideOpen ? closedLabel : label}
    </Button>
  );
}

export function NewChatButton() {
  const t = useTranslations();
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = async () => {
    heapAnalytics.trackEvent(HeapTrackEvent.create_new_chat);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <>
      {showNotification && (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-2.5">
          <i className="cbi-tick-circle-fill !text-6xl text-main"></i>
          <p className="flex flex-col gap-y-1 text-center text-main">
            <span className="text-base">{t('Chat.newChatTitle')}</span>
            <span className="text-sm">{t('Chat.newChatSubtitle')}</span>
          </p>
        </div>
      )}
      <Button
        href="/"
        variant="solid"
        color="aquamarine"
        className="inline-flex items-center justify-center px-6 py-3 text-lg"
        onClick={handleShowNotification}
      >
        <i className="cbi-edit"></i>
        {t('Chat.newChatButton')}
      </Button>
    </>
  );
}

export function NewAssistantButton({
  user,
  assistants,
  className,
  labelKey,
  iconClassName,
  onClick,
}: {
  user: User | null;
  assistants: Assistant[];
  className?: string;
  iconClassName?: string;
  labelKey?: string;
  onClick?: () => void;
}) {
  const t = useTranslations();
  const isCreationAllowed = useMemo(
    () => isAssistantCreationAllowed(user, assistants),
    [user?.subscription, assistants.length]
  );

  return isCreationAllowed ? (
    <>
      <Button
        id="assistant-manage"
        variant="solid"
        color="primary"
        className={twMerge(
          'w-full text-nowrap rounded-xl p-3 text-base font-semibold text-main hover:z-20 hover:bg-background',
          className
        )}
        href={`/create-agent`}
        onClick={() => onClick?.()}
      >
        <i className={`cbi-add-square ${iconClassName}`} />
        {t(labelKey || 'Assistants.createButton')}
      </Button>
    </>
  ) : null;
}

export function CopyToClipboardButton({
  searchParams,
  titileKey,
  tooltipKey,
  icon,
  variant,
  color,
  className,
  disabled,
}: {
  searchParams: string;
  titileKey: string;
  tooltipKey: string;
  icon?: string;
  variant?: any;
  color?: any;
  className?: string;
  disabled?: boolean;
}) {
  const t = useTranslations();
  const [showTooltip, setShowTooltip] = useState(false);
  const sharableLink = process.env.SHARE_LINK || 'https://coachbot.ai/chat';

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(`${sharableLink}?${searchParams}`);

      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  return (
    <div className="relative flex items-center">
      <Button
        {...(variant && { variant })}
        {...(color && { color })}
        disabled={disabled}
        className={twMerge(className || 'm-0 items-center text-nowrap p-0 text-sm text-storm-gray hover:text-main')}
        onClick={copyToClipboard}
      >
        <i className={`text-lg leading-3 ${icon ?? 'cbi-export'}`} />
        {t(titileKey)}
      </Button>
      {showTooltip && (
        <Tooltip
          tooltipClassName="-left-full w-fit -translate-y-2/3 -translate-x-[85%]"
          tooltipLabelClassName="py-0.5"
          initialShow={true}
          iconClass={''}
          tooltipLabel={tooltipKey}
        />
      )}
    </div>
  );
}

export function ExportAssistantButton({
  assistant,
  callback,
  className,
  iconClassName,
}: {
  assistant: Assistant;
  callback?: () => any;
  className?: string;
  iconClassName?: string;
}) {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  const handleExport = async () => {
    try {
      setLoading(true);
      const assistantConfig = await getAssistantConfiguration(assistant.id);
      const fileUrl = generateAssistantFile(assistant, assistantConfig);
      const fileName = `${assistant.name.split(' ').join('_')}-instructions.md`;

      handleFileDownload(fileName, fileUrl, downloadLinkRef.current);
    } catch (error) {
      console.error('Error exporting assistant file:', error);
    } finally {
      setLoading(false);
      callback?.();
    }
  };

  return (
    <>
      <Button
        className={twMerge(
          'm-0 items-center text-nowrap rounded-none border-0 p-0 text-sm text-storm-gray hover:text-main',
          loading && 'pointer-events-none animate-pulse',
          className
        )}
        onClick={handleExport}
      >
        <i className={`cbi-document-download text-xl ${iconClassName}`} />
        {t('Assistants.downloadButton')}
      </Button>
      <a className="hidden" ref={downloadLinkRef} href="" />
    </>
  );
}

export function ExportChatButton({ chat, className }: { chat: Chat; className?: string; iconClassName?: string }) {
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const date = getFomatedDate(chat.created_at, locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleExport = async () => {
    try {
      setLoading(true);
      const fullChat = await getChat(chat.id);

      if (!fullChat?.Messages?.length) return;

      const fileUrl = generateChatFile(fullChat.Messages.reverse() || []);
      const fileName = `chat-transcription-${date.replace(',', '').replace(/\s+/g, '-')}.md`;

      handleFileDownload(fileName, fileUrl, downloadLinkRef.current);
    } catch (error) {
      console.error('Error exporting chat file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className={twMerge(
          'cbi-import m-0 items-center text-nowrap rounded-none border-0 p-0 text-xl text-storm-gray hover:text-main',
          loading && 'pointer-events-none animate-pulse',
          className
        )}
        onClick={handleExport}
      />
      <a className="hidden" ref={downloadLinkRef} href="" />
    </>
  );
}

export default function RedirectBack() {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, [router]);

  return null;
}

export function AccountToggleButton({ className }: { className?: string }) {
  const pathname = usePathname();
  const t = useTranslations();
  const isAccountPath = pathname === PrivateRoutes.account;

  return (
    <Button variant="outline" color="darkGray" href={isAccountPath ? '/' : PrivateRoutes.account} className={className}>
      <i className="cbi-close-circle text-lg"></i>
      {t(isAccountPath ? 'General.Header.accountButton' : 'General.Header.backToAccountButton')}
    </Button>
  );
}
