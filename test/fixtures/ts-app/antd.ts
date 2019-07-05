
export function foo(fn: (...args: any[]) => void): any {
  const foo = 'hello';
  const bar = 0;
  return fn(foo, bar);
}
