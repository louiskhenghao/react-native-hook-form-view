import { FieldValues, UseFormReturn } from "react-hook-form";

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export type NativeFormContextProps<
  T = any,
  F extends FieldValues = FieldValues
> = {
  /**
   * form context from react-hook-form
   */
  form?: UseFormReturn<F, any>;
  /**
   * form submission handler for react-hook-form `form.handleSubmit`
   */
  submitHandler?: (values: F) => void;
};

export type NativeFormContextHookProps<
  T = any,
  F extends FieldValues = FieldValues
> = Pick<NativeFormContextProps<T, F>, "form"> & {
  /**
   * form submission function
   */
  submit?: () => void;
};
