// util function that computes the fibonacci numbers
export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const prev1 = fibonacci(n - 1);
  const prev2 = fibonacci(n - 2);
  return prev1 + prev2;
}