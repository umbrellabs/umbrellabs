import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<string | boolean | undefined | null>) {
  return twMerge(clsx(inputs));
}
