import { FieldValues, UseFormReturn } from "react-hook-form";

export type ContextProps<T = any, F extends FieldValues = FieldValues> = {
  form?: UseFormReturn<F, any>;
  submitHandler?: (values: F) => void;
};
