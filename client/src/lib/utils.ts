import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  // Convert to billions (億) or trillions (兆) for readability
  if (amount >= 1000000000000) {
    return `NT$ ${(amount / 1000000000000).toFixed(2)} 兆`;
  } else if (amount >= 100000000) {
    return `NT$ ${(amount / 100000000).toFixed(0)} 億`;
  } else {
    return `NT$ ${amount.toLocaleString()}`;
  }
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}
