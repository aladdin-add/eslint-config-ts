import raf from 'raf';

export default function throttleByAnimationFrame(fn: (...args: any[]) => void): any {
  let requestId: number | null;

  const later = (args: any[]): Function => () => {
    requestId = null;
    fn(...args);
  };

  const throttled = (...args: any[]): void => {
    if (requestId == null) {
      requestId = raf(later(args));
    }
  };

  return throttled;
}

export function throttleByAnimationFrameDecorator(): any {
  return function(target: any, key: string, descriptor: any) {
    const fn = descriptor.value;
    let definingProperty = false;
    return {
      configurable: true,
      get() {
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          return fn;
        }

        const boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true,
        });
        definingProperty = false;
        return boundFn;
      },
    };
  };
}
