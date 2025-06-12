import { useCallback } from 'react';

export function useSubmitOnEnter(onSubmit: () => void, isSubmitting: boolean) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (!isSubmitting) {
          onSubmit();
        }
      }
    },
    [onSubmit, isSubmitting]
  );

  return handleKeyDown;
}
