import { HTMLJuloProps } from '@julo-ui/system';

export interface FormControlOptions {
  /**
   * If `true`, the field will be required. This has 2 side effects:
   * - The `FormLabel` will show a required indicator
   * - The form element will have `aria-required` set to `true`
   *
   * @default false
   */
  isRequired?: boolean;
  /**
   * If `true`, the field will be disabled. This has 2 side effects:
   * - The `FormLabel` will have `data-disabled` attribute
   * - The form element will be disabled
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, the field will be invalid. This has 2 side effects:
   * - The `FormLabel` will have `data-invalid` set to `true`
   * - The form element will have `aria-invalid` set to `true`
   *
   * @default false
   */
  isInvalid?: boolean;
  /**
   * If `true`, the field will be readonly
   *
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * If `true`, the field will have loading indicator. This has side effect:
   * - The `FormLabel` will have `data-busy` set to `true`
   * - The form element will have `aria-busy` set to `true`
   *
   * @default false
   */
  isLoading?: boolean;
  id?: string;
}

export interface FormControlProps
  extends HTMLJuloProps<'div'>,
    FormControlOptions {}
