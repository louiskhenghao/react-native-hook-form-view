import { ActivityIndicator, Text, ViewStyle } from "react-native";
import React, { useCallback } from "react";
import styled from "styled-components/native";
import { ActionButtonProps } from "./@types";

/**
 * Form container component with default style
 */
export const StyledFormContainer = styled.View`
  padding: 8px;
`;

/**
 * FormItem container component with default style
 */
export const StyledFormItemWrapper = styled.View`
  margin-bottom: 8px;
`;

/**
 * Label component with default style
 */
export const StyledFormItemLabel = styled.Text`
  color: #111827;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;
`;

/**
 * Caption component with default style
 */
export const StyledFormItemCaption = styled.Text`
  color: #3f3f46;
  font-weight: 200;
  font-size: 12px;
  margin-top: 4px;
`;

/**
 * FormItem component with default style
 */
export const StyledFormItemError = styled.Text`
  color: #f87171;
  font-weight: 200;
  font-size: 12px;
  margin-top: 4px;
`;

/**
 * Pressable component with default style
 */
export const StyledPressable = styled.Pressable`
  margin-top: 4px;
  padding-vertical: 12px;
  padding-horizontal: 32px;
`;

/**
 * Submit Button component
 */
export const StyleButtonSubmit: React.FC<ActionButtonProps> = (props) => {
  const {
    title = "Submit",
    style,
    children,
    loading = false,
    titleStyle,
    loadingColor = "white",
    loadingStyle,
    backgroundColor,
    ...restProps
  } = props;
  const color = backgroundColor ?? "#0ea5e9";

  // ================ HOOKS
  const composeStyle = useCallback(
    (stateProps) => {
      const { pressed } = stateProps;
      const applyStyle =
        typeof style === "function" ? style(stateProps) : style;
      return [
        {
          opacity: loading || pressed ? 0.6 : 1,
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center"
        } as ViewStyle,
        applyStyle
      ];
    },
    [loading, style]
  );

  // ================ VIEWS
  return (
    <StyledPressable style={composeStyle} {...restProps}>
      {loading && (
        <ActivityIndicator
          size="small"
          color={loadingColor}
          style={[{ position: "absolute", left: 0, right: 0 }, loadingStyle]}
        />
      )}
      {children ?? (
        <Text style={titleStyle ?? { color: "#fff", fontSize: 20 }}>
          {title}
        </Text>
      )}
    </StyledPressable>
  );
};
