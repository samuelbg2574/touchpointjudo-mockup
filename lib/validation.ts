/**
 * Input validation utilities for booking and data sanitization
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = {
  name: 100,
  email: 255,
  phone: 20,
  day: 50,
  time: 50,
  program: 100,
  ageGroup: 50,
  category: 50,
};

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  if (email.length > MAX_LENGTH.email) return false;
  return EMAIL_REGEX.test(email);
}

export function validateString(
  value: unknown,
  maxLength: number,
  fieldName: string
): { valid: boolean; error?: string } {
  if (typeof value !== "string") {
    return { valid: false, error: `${fieldName} must be a string` };
  }
  if (value.trim().length === 0) {
    return { valid: false, error: `${fieldName} cannot be empty` };
  }
  if (value.length > maxLength) {
    return {
      valid: false,
      error: `${fieldName} exceeds maximum length of ${maxLength}`,
    };
  }
  return { valid: true };
}

export function validatePhone(phone: string | undefined): boolean {
  if (!phone) return true; // Phone is optional
  if (typeof phone !== "string") return false;
  if (phone.length > MAX_LENGTH.phone) return false;
  // Allow only digits, +, -, (), and spaces
  return /^[+\d\-() ]+$/.test(phone);
}

export interface BookingValidation {
  valid: boolean;
  errors: string[];
}

export function validateBooking(data: any): BookingValidation {
  const errors: string[] = [];

  // Validate name
  const nameValidation = validateString(data.name, MAX_LENGTH.name, "Name");
  if (!nameValidation.valid) errors.push(nameValidation.error!);

  // Validate email
  if (!data.email) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Email format is invalid");
  }

  // Validate phone (optional)
  if (!validatePhone(data.phone)) {
    errors.push("Phone format is invalid");
  }

  // Validate classProgram
  const programValidation = validateString(
    data.classProgram,
    MAX_LENGTH.program,
    "Class program"
  );
  if (!programValidation.valid) errors.push(programValidation.error!);

  // Validate optional fields
  if (data.classDay) {
    const dayValidation = validateString(
      data.classDay,
      MAX_LENGTH.day,
      "Class day"
    );
    if (!dayValidation.valid) errors.push(dayValidation.error!);
  }

  if (data.classTime) {
    const timeValidation = validateString(
      data.classTime,
      MAX_LENGTH.time,
      "Class time"
    );
    if (!timeValidation.valid) errors.push(timeValidation.error!);
  }

  if (data.classAgeGroup) {
    const ageValidation = validateString(
      data.classAgeGroup,
      MAX_LENGTH.ageGroup,
      "Age group"
    );
    if (!ageValidation.valid) errors.push(ageValidation.error!);
  }

  if (data.classCategory) {
    const categoryValidation = validateString(
      data.classCategory,
      MAX_LENGTH.category,
      "Category"
    );
    if (!categoryValidation.valid) errors.push(categoryValidation.error!);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitize HTML by escaping dangerous characters
 * Prevents XSS attacks from user-generated content in Airtable
 */
export function sanitizeHtml(text: string): string {
  if (typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
