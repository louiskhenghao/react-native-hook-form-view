import { ViewProps } from "react-native";
import { UseFormReturn, UseFormProps } from "react-hook-form";

export type Props<T = any> = ViewProps & {
  options?: UseFormProps<T>;
  onSubmit?: (values: T) => void;
};

export type RefProps<T = any> = {
  form: UseFormReturn<T>;
  submit: () => void;
};
