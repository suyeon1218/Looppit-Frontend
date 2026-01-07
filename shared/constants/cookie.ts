export const COOKIE_KEYS = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
} as const;

export const COOKIE_OPTIONS = {
  MAX_AGE: 60 * 5,
  MAX_AGE_REFRESH: 60 * 60 * 24 * 7,
} as const;
