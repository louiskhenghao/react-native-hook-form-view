import { PropsWithChildren } from "react";
import {
  Control,
  FieldPath,
  ValidationRule,
  FieldValues,
  ControllerProps,
  ControllerFieldState
} from "react-hook-form";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type FormItemViewProps<
  T = any,
  F extends FieldValues = FieldValues
> = PropsWithChildren<{
  /**
   * name of the input field
   */
  name: FieldPath<Record<string, T>>;
  /**
   * label to display above input
   */
  label?: string;
  /**
   * caption below input
   */
  caption?: string;
  /**
   * control from react-hook-form
   */
  control?: Control<F, any>;
  /**
   * validation rules for react-hook-form
   */
  rules?: ValidationRule<any>;
  /**
   * disabling input field
   */
  disabled?: boolean;
  /**
   * initial value for input field
   */
  initialValue?: any;
  /**
   * custom style for wrapper
   */
  style?: StyleProp<ViewStyle>;
  /**
   * custom style for label
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * custom style for error
   */
  errorStyle?: StyleProp<TextStyle>;
  /**
   * custom style for caption
   */
  captionStyle?: StyleProp<TextStyle>;
  /**
   * custom rendering view
   */
  render?: ControllerProps["render"];
  /**
   * construct error message
   */
  constructErrorMessage?: (state: ControllerFieldState) => string;
}>;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default FormItemViewProps;
