import { FieldValues, UseFormReturn } from "react-hook-form";

export type ContextProps<T = any, F extends FieldValues = FieldValues> = {
  form?: UseFormReturn<F, any>;
  submitHandler?: (values: F) => void;
};

export type ContextHookProps<
  T = any,
  F extends FieldValues = FieldValues
> = Pick<ContextProps<T, F>, "form"> & {
  submit?: () => void;
};
