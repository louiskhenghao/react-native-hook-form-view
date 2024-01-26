import { ViewProps } from "react-native";
import { UseFormReturn, UseFormProps, FieldValues } from "react-hook-form";

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export type FormProps<
  T = any,
  F extends FieldValues = FieldValues
> = ViewProps & {
  /**
   * options for react-hook-form
   */
  options?: UseFormProps<F, any>;
  /**
   * the submit function callback with form values
   */
  onSubmit?: (values: F) => void;
};

export type FormRefProps<T = any, F extends FieldValues = FieldValues> = {
  /**
   * the form context
   */
  form: UseFormReturn<F, any>;
  /**
   * the function to submit form
   */
  submit: () => void;
};
