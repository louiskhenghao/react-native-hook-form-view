import React from "react";
import { FallbackView } from "../FallbackView";
import { useNativeFormContext } from "../../context/NativeFormContext";
import { useNativeFormViewContext } from "../../context/NativeFormView";
import { StyleButtonSubmit } from "../../styles";
import { ActionButtonProps } from "../../@types";
import { Props } from "./props";

const SubmitButtonView: React.FC<Props> = (props) => {
  const { title, children, style, ...restProps } = props;

  // ================ HOOKS
  const views = useNativeFormViewContext();
  const { form, submitHandler } = useNativeFormContext();

  // ================ VARIABLES
  // Read the formState before render to subscribe the form state through the Proxy
  // https://react-hook-form.com/api/useform/formstate
  const {
    isDirty = false,
    dirtyFields = {},
    isSubmitted = false,
    isSubmitSuccessful = false,
    submitCount = 0,
    touchedFields = {},
    isSubmitting = false,
    isValidating = false,
    isValid = true,
    errors = {}
  } = form?.formState ?? {};
  const styles = views?.styles;
  const isChildrenString = typeof children === "string";
  const buttonTitle = isChildrenString ? children : title;

  // ================ VIEWS
  return (
    <FallbackView<ActionButtonProps>
      view={views?.submit}
      fallbackView={StyleButtonSubmit}
      props={{
        ...restProps,
        title: buttonTitle,
        style: styles?.submit,
        disabled: isSubmitting,
        onPress: () => {
          if (!form) {
            console.error("Form instance is not initialized!");
            return;
          }
          if (!submitHandler) {
            console.error("Submit handler is not provided!");
            return;
          }
          form?.handleSubmit(submitHandler);
        }
      }}
      customRenderView={
        views?.renderSubmit
          ? (context) =>
              views?.renderSubmit?.({
                props: context,
                formState: {
                  isDirty,
                  dirtyFields,
                  isSubmitted,
                  isSubmitSuccessful,
                  submitCount,
                  touchedFields,
                  isSubmitting,
                  isValidating,
                  isValid,
                  errors
                }
              })
          : undefined
      }
    />
  );
};

export type SubmitProps = Props;
export const Submit = SubmitButtonView;

export default Submit;
