import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_EMAIL = "hello@touchpointjudo.com";
export const CONTACT_PHONE = "+447911123456";
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`;
export const MAILTO_URL = `mailto:${CONTACT_EMAIL}`;
