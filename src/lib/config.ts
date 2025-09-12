const getEnv = (key: string): string | undefined => {
  return process.env[key];
};

const getRequiredEnvWithFallback = (
  primaryKey: string,
  fallbackKey?: string
): string => {
  const primary = getEnv(primaryKey);
  const fallback = fallbackKey ? getEnv(fallbackKey) : undefined;
  const value = primary ?? fallback;
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${primaryKey}$${fallbackKey ? ` (or fallback ${fallbackKey})` : ''}`
    );
  }
  return value;
};

export const config = {
  emailjs: {
    serviceId: getRequiredEnvWithFallback(
      'EMAILJS_SERVICE_ID',
      'NEXT_PUBLIC_EMAILJS_SERVICE_ID'
    ),
    templateId: getRequiredEnvWithFallback(
      'EMAILJS_TEMPLATE_ID',
      'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'
    ),
    publicKey: getRequiredEnvWithFallback(
      'EMAILJS_PUBLIC_KEY',
      'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
    ),
    privateKey: getRequiredEnvWithFallback(
      'EMAILJS_PRIVATE_KEY',
      'NEXT_PUBLIC_EMAILJS_PRIVATE_KEY'
    ),
  },
} as const;

export type Config = typeof config;
