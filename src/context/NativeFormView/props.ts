import { FunctionComponent, ReactNode } from "react";
import { ControllerFieldState, FormState } from "react-hook-form";
import {
  StyleProp,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
  PressableProps
} from "react-native";

export type ContextProps = {
  // view props
  container?: FunctionComponent<any> | any;
  item?: FunctionComponent<any> | any;
  label?: FunctionComponent<any> | any;
  caption?: FunctionComponent<any> | any;
  error?: FunctionComponent<any> | any;
  submit?: FunctionComponent<any> | any;

  // style props
  styles?: {
    container?: StyleProp<ViewStyle>;
    item?: StyleProp<ViewStyle>;
    label?: StyleProp<TextStyle>;
    caption?: StyleProp<TextStyle>;
    error?: StyleProp<TextStyle>;
    submit?: StyleProp<ViewStyle>;
  };

  // view rendering function
  renderContainer?: (context: {
    props: ViewProps;
    formState: FormState<any>;
  }) => ReactNode;
  renderItem?: (context: {
    props: ViewProps;
    fieldState: ControllerFieldState;
  }) => ReactNode;
  renderLabel?: (context: {
    props: TextProps;
    fieldState: ControllerFieldState;
  }) => ReactNode;
  renderCaption?: (context: {
    props: TextProps;
    fieldState: ControllerFieldState;
  }) => ReactNode;
  renderError?: (context: {
    props: TextProps;
    fieldState: ControllerFieldState;
  }) => ReactNode;
  renderSubmit?: (context: {
    props: PressableProps;
    formState: FormState<any>;
  }) => ReactNode;
};
