import { ReactNode } from "react";
import { PressableProps, StyleProp, TextStyle } from "react-native";

export type ActionButtonProps = PressableProps & {
  title?: string;
  backgroundColor?: string; // background color
  titleStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
};
