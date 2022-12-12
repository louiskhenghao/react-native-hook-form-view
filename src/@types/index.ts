import { ReactNode } from "react";
import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export type ActionButtonProps = PressableProps & {
  title?: string;
  loading?: boolean;
  loadingColor?: string;
  backgroundColor?: string; // background color
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  loadingStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
};
