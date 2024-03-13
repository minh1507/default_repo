/* eslint-disable @typescript-eslint/no-explicit-any */
import consola from 'consola';

function tryCatch(
  target: any,
  propertyKey: string | symbol,
  descriptor?: PropertyDescriptor,
): void {
  if (descriptor) {
    // Decorator is used on a method
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        consola.fail(error);
        return null;
      }
    };
  } else {
    console.warn(
      `@tryCatch decorator cannot be applied to properties. Property '${String(propertyKey)}' will not be wrapped.`,
    );
    return null;
  }
}

export default tryCatch;
