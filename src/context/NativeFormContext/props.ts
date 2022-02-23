import { UseFormReturn } from "react-hook-form";

export type ContextProps<T = any> = {
  form?: UseFormReturn<T>;
};
