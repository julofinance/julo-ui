/**
 * Helper to help execute multiple function in HOF way
 *
 * @remarks
 * [HOF](https://www.freecodecamp.org/news/higher-order-functions-in-javascript/)
 *
 * @param fns - Array of function that need to be executed
 *
 * @returns method - function to execute all fn that is passed
 *
 * @example
 * ```tsx
 *
 * const ExtendComponent = (props: ExtendComponentProps) => {
 *   const {onClick, ...resProps} = props;
 *
 *   function defaultOnClick() {
 *     // some code
 *   }
 *
 *   return <Component onClick={callAllFn(defaultOnClick, onClick)} {...resProps}/>
 * }
 *
 * ```
 */
// This arguments received function with diverse type that can't be define in type
// eslint-disable-next-line @typescript-eslint/ban-types
function callAllFn<T = unknown>(...fns: Array<undefined | Function>) {
  return (...args: T[]) => fns.forEach((fn) => fn?.(...args));
}

export default callAllFn;
