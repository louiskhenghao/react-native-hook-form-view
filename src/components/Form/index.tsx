import React, { forwardRef, useImperativeHandle } from "react";
import { ViewProps } from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import { FallbackView } from "../FallbackView";
import { NativeFormContextProvider } from "../../context/NativeFormContext";
import { useNativeFormViewContext } from "../../context/NativeFormView";
import { StyledFormContainer } from "../../styles";
import { Props, RefProps } from "./props";

const FormComponentView = <T,>(
  props: React.PropsWithChildren<Props<T>>,
  ref: React.ForwardedRef<RefProps<T>>
) => {
  const { options = {}, children, onSubmit, ...restProps } = props;

  const form = useForm<T>(options);
  const views = useNativeFormViewContext();

  // Read the formState before render to subscribe the form state through the Proxy
  // https://react-hook-form.com/api/useform/formstate
  const {
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
  } = form;

  // ================ EVENTS
  const onHandleSubmit = (values: any) => {
    onSubmit?.(values);
  };

  // ================ HOOKS
  useImperativeHandle(ref, () => {
    return {
      form,
      submit: form.handleSubmit(onHandleSubmit)
    };
  });

  // ================ VIEWS
  return (
    <FormProvider {...form}>
      <NativeFormContextProvider<T> form={form}>
        <FallbackView<ViewProps>
          view={views?.container}
          fallbackView={StyledFormContainer}
          props={{ style: views?.styles?.container, ...restProps }}
          customRenderView={
            views?.renderContainer
              ? (context) =>
                  views?.renderContainer?.({
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
          }>
          {children}
        </FallbackView>
      </NativeFormContextProvider>
    </FormProvider>
  );
};

const FormView = forwardRef(FormComponentView) as <T>(
  props: React.PropsWithChildren<Props<T>> & {
    ref?: React.ForwardedRef<RefProps<T>>;
  }
) => ReturnType<typeof FormComponentView>;

// ================ EXPORTS
export type FormProps<T> = Props<T>;
export type FormRefProps<T = any> = RefProps<T>;
export const Form = FormView;

export default FormView;
