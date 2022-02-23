import {
  Control,
  FieldPath,
  ValidationRule,
  ControllerProps,
  ControllerFieldState
} from "react-hook-form";

export type Props<T = any> = {
  name: FieldPath<Record<string, T>>;
  label?: string;
  caption?: string;
  control?: Control<T, any>;
  rules?: ValidationRule<any>;
  disabled?: boolean;
  initialValue?: any;
  render?: ControllerProps["render"];
  constructErrorMessage?: (state: ControllerFieldState) => string;
};
