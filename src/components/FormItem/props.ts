import {
  Control,
  FieldPath,
  ValidationRule,
  FieldValues,
  ControllerProps,
  ControllerFieldState
} from "react-hook-form";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type Props<T = any, F extends FieldValues = FieldValues> = {
  name: FieldPath<Record<string, T>>;
  label?: string;
  caption?: string;
  control?: Control<F, any>;
  rules?: ValidationRule<any>;
  disabled?: boolean;
  initialValue?: any;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  captionStyle?: StyleProp<TextStyle>;
  render?: ControllerProps["render"];
  constructErrorMessage?: (state: ControllerFieldState) => string;
};
