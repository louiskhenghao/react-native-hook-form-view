import {
  Control,
  FieldPath,
  ValidationRule,
  FieldValues,
  ControllerProps,
  ControllerFieldState
} from "react-hook-form";

export type Props<T = any, F extends FieldValues = FieldValues> = {
  name: FieldPath<Record<string, T>>;
  label?: string;
  caption?: string;
  control?: Control<F, any>;
  rules?: ValidationRule<any>;
  disabled?: boolean;
  initialValue?: any;
  render?: ControllerProps["render"];
  constructErrorMessage?: (state: ControllerFieldState) => string;
};
