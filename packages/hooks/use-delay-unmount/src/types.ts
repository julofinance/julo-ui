export interface UseDelayUnmountOptions {
  isMounted: boolean;
  /**
   * Time of the component unmount after x millisecond
   *
   * @default 500
   */
  delay?: number;
}
