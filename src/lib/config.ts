

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const config = {
  emailjs: {
    serviceId: getRequiredEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID'),
    templateId: getRequiredEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID'),
    publicKey: getRequiredEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'),
  },
} as const;

export type Config = typeof config;
