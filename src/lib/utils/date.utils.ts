export const getFomatedDate = (
  rawDate: string | Date,
  locale: string = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(rawDate);

  return date.toLocaleDateString(locale, options);
};

export const getDateWeekDay = (rawDate: string | Date, locale: string = 'en-US'): string => {
  return getFomatedDate(rawDate, locale, { weekday: 'long' });
};

export const getDateDay = (rawDate: string | Date, locale: string = 'en-US'): string => {
  return getFomatedDate(rawDate, locale, { month: 'long', day: 'numeric' });
};

export const getTime = (rawDate: string | Date, locale: string = 'en-US'): string => {
  const date = new Date(rawDate);

  return date.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', hour12: true });
};

export function getPassedTime(startTime?: number, range: number = 1000): number {
  return startTime ? Math.floor(Date.now() - startTime) / range : 0;
}
