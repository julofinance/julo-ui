import isFunction from './is-fn';

/**
 *
 * @remarks
 * [Reference](https://chakra-ui.com/docs/components/menu/usage#accessing-the-internal-state)
 *
 * @param valueOrFn - any datatype value
 *
 * @param args - parameter that will be passed if the value is a function
 *
 * @returns execute a fn or return the value
 *
 * @example
 * ```tsx
 * const Component = (props) => {
 *
 * const {children} = props;
 *
 * const isOpen = false;
 *
 * return <>{runIfFn(children, {isOpen})}</>;
 * }
 * ```
 *
 * ============================================================
 *
 * ```tsx
 * <Component>
 *   {({ isOpen }) =>
 *      <div>This shop is {isOpen ? 'open' : 'closed'}</div>
 *   }
 * </Component>
 * ```
 */
function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

export default runIfFn;
