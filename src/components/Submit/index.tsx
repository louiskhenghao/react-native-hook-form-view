import React from "react";
import { FallbackView } from "../FallbackView";
import { StyleButtonSubmit } from "../../styled";
import { ActionButtonProps } from "../../@types";
import { useNativeFormContext } from "../../context/NativeFormContext";
import { useNativeFormViewContext } from "../../context/NativeFormView";
import { SubmitProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const Submit: React.FC<SubmitProps> = (props) => {
  const { title, loading, children, style, ...restProps } = props;

  // ================ HOOKS
  const views = useNativeFormViewContext();
  const { form, submit } = useNativeFormContext();

  // ================ VARIABLES
  // Read the formState before render to subscribe the form state through the Proxy
  // https://react-hook-form.com/api/useform/formstate
  const {
    isDirty = false,
    isValid = true,
    isLoading = false,
    isSubmitting = false,
    isValidating = false,
    isSubmitted = false,
    isSubmitSuccessful = false,
    disabled = false,
    submitCount = 0,
    defaultValues,
    dirtyFields = {},
    touchedFields = {},
    errors = {}
  } = form?.formState ?? {};
  const styles = views?.styles;
  const isChildrenString = typeof children === "string";
  const buttonTitle = isChildrenString ? children : title;

  // ================ VIEWS
  return (
    <FallbackView<ActionButtonProps>
      view={views?.submit}
      fallback={StyleButtonSubmit}
      props={{
        ...restProps,
        loading,
        style: [styles?.submit, style],
        title: buttonTitle ?? "Submit",
        disabled: loading || isSubmitting,
        onPress: submit
      }}
      customRenderView={
        views?.renderSubmit
          ? (context) =>
              views?.renderSubmit?.({
                props: context,
                formState: {
                  isDirty,
                  isValid,
                  isLoading,
                  isSubmitting,
                  isValidating,
                  isSubmitted,
                  isSubmitSuccessful,
                  disabled,
                  submitCount,
                  defaultValues,
                  dirtyFields,
                  touchedFields,
                  errors
                }
              })
          : undefined
      }
    />
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export default Submit;
