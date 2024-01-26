import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type ActionButtonProps = PressableProps & {
  /**
   * the title for button, eg: Submit
   */
  title?: string;
  /**
   * to show loading
   */
  loading?: boolean;
  /**
   * the color of the loading
   */
  loadingColor?: string;
  /**
   * background color of button
   */
  backgroundColor?: string;
  /**
   * the custom style for button
   */
  style?: StyleProp<ViewStyle>;
  /**
   * the custom title text style for button
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * the custom style for loading
   */
  loadingStyle?: StyleProp<ViewStyle>;
  /**
   * the string of the button
   */
  children?: string;
};
