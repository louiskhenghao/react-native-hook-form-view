import React from "react";
import { useController } from "react-hook-form";
import { CloneElement } from "../CloneElement";
import { FallbackView } from "../FallbackView";
import { useNativeFormViewContext } from "../../context/NativeFormView";
import {
  StyledFormItemWrapper,
  StyledFormItemLabel,
  StyledFormItemCaption,
  StyledFormItemError
} from "../../styled";
import { FormItemViewProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const FormItem: React.FC<FormItemViewProps> = (props) => {
  const {
    label,
    name,
    control,
    disabled,
    caption,
    rules,
    initialValue,
    children,
    style,
    labelStyle,
    errorStyle,
    captionStyle,
    render,
    constructErrorMessage
  } = props;

  // ================ HOOKS
  const views = useNativeFormViewContext();
  const { field, fieldState, formState } = useController({
    name,
    control,
    rules,
    defaultValue: initialValue
  });

  // ================ VARIABLES
  const { error } = fieldState;
  const styles = views?.styles;

  // ================ VIEWS
  return (
    <FallbackView
      view={views?.item}
      fallback={StyledFormItemWrapper}
      props={{ style: [styles?.item, style] }}
      customRenderView={
        views?.renderItem
          ? (context) =>
              views?.renderItem?.({
                props: context,
                fieldState
              })
          : undefined
      }>
      {/* ====== LABEL */}
      {label && (
        <FallbackView
          view={views?.label}
          fallback={StyledFormItemLabel}
          props={{ style: [styles?.label, labelStyle] }}
          customRenderView={
            views?.renderLabel
              ? (context) =>
                  views?.renderLabel?.({
                    props: context,
                    fieldState
                  })
              : undefined
          }>
          {label}
        </FallbackView>
      )}

      {/* ====== INPUT VIEW */}
      {render ? (
        render({ field, fieldState, formState })
      ) : (
        <CloneElement disabled={disabled} editable={!disabled} {...field}>
          {children}
        </CloneElement>
      )}

      {/* ====== CAPTION */}
      {caption && (
        <FallbackView
          view={views?.caption}
          fallback={StyledFormItemCaption}
          props={{ style: [styles?.caption, captionStyle] }}
          customRenderView={
            views?.renderCaption
              ? (context) =>
                  views?.renderCaption?.({
                    props: context,
                    fieldState
                  })
              : undefined
          }>
          {caption}
        </FallbackView>
      )}

      {/* ====== ERROR */}
      {!!error && (
        <FallbackView
          view={views?.error}
          fallback={StyledFormItemError}
          props={{ style: [styles?.error, errorStyle] }}
          customRenderView={
            views?.renderError
              ? (context) =>
                  views?.renderError?.({
                    props: context,
                    fieldState
                  })
              : undefined
          }>
          {constructErrorMessage?.(fieldState) ?? error?.message ?? error?.type}
        </FallbackView>
      )}
    </FallbackView>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export default FormItem;
