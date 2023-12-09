import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateArray(n: number) {
  if (n <= 0) {
    return []; // Return an empty array for non-positive input
  }

  // Use Array.from to generate an array with values from 1 to n
  return Array.from({ length: n }, (_, index) => index + 1);
}
