import { useState } from 'react';

export const UseCountHook = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const increse = () => setCount(count + 1);
  const decrese = () => setCount(count - 1);
  const reset = () => setCount(0);
  const random = () => setCount(Math.round(Math.random() * (70 - 0) + 0));

  return { count, increse, decrese, reset, random };
};
