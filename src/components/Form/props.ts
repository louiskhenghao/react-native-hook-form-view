import { ViewProps } from "react-native";
import { UseFormReturn, UseFormProps, FieldValues } from "react-hook-form";

export type Props<T = any, F extends FieldValues = FieldValues> = ViewProps & {
  options?: UseFormProps<F, any>;
  onSubmit?: (values: F) => void;
};

export type RefProps<T = any, F extends FieldValues = FieldValues> = {
  form: UseFormReturn<F, any>;
  submit: () => void;
};
