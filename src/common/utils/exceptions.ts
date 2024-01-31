/**
 * A method to prevent type safe unreachable code blocks
 */

export function unreachableError(e: never): void {
  // eslint-disable-next-line no-console
  console.warn(
    "\n------------ Unreachable was reached -------------\n\n",
    e,
    "\n\n--------------------------------------------------",
  );
}

/**
 * Same as `unreachableError`, but without console notification
 */

export function silentUnreachableError<T extends never>(e: T): T {
  return e;
}
