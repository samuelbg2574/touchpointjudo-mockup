/**
 * Simple in-memory rate limiter based on IP address
 * Limits requests to 5 per minute per IP
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

/**
 * Get client IP from request headers
 */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown";
}

/**
 * Check if request is rate limited
 * Returns true if limit exceeded, false if request allowed
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // No entry or window expired - allow request
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return false;
  }

  // Increment counter
  entry.count++;

  // Check if exceeded limit
  return entry.count > MAX_REQUESTS;
}

/**
 * Clean up old entries every 5 minutes to prevent memory leaks
 */
export function cleanupRateLimit(): void {
  const now = Date.now();
  const entriesToDelete: string[] = [];
  rateLimitMap.forEach((entry, ip) => {
    if (now > entry.resetTime) {
      entriesToDelete.push(ip);
    }
  });
  entriesToDelete.forEach((ip) => rateLimitMap.delete(ip));
}

// Run cleanup every 5 minutes
declare global {
  var _rateLimitCleanupStarted: boolean;
}

if (typeof globalThis !== "undefined") {
  if (!globalThis._rateLimitCleanupStarted) {
    globalThis._rateLimitCleanupStarted = true;
    setInterval(cleanupRateLimit, 5 * 60 * 1000);
  }
}
