import { ViewProps } from "react-native";
import React, { forwardRef, useImperativeHandle } from "react";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { FallbackView } from "../FallbackView";
import { NativeFormContextProvider } from "../../context/NativeFormContext";
import { useNativeFormViewContext } from "../../context/NativeFormView";
import { StyledFormContainer } from "../../styled";
import { FormProps, FormRefProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
const FormComponentView = <T, F extends FieldValues>(
  props: React.PropsWithChildren<FormProps<T, F>>,
  ref: React.ForwardedRef<FormRefProps<T, F>>
) => {
  const { options = {}, children, onSubmit, ...restProps } = props;

  // ================ HOOKS
  const form = useForm<F, any>(options);
  const views = useNativeFormViewContext();

  // ================ VARIABLES
  // Read the formState before render to subscribe the form state through the Proxy
  // https://react-hook-form.com/api/useform/formstate
  const { formState } = form;

  // ================ EVENTS
  const onHandleSubmit = (values: F) => {
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
      <NativeFormContextProvider<T, F>
        form={form}
        submitHandler={onHandleSubmit}>
        <FallbackView<ViewProps>
          view={views?.container}
          fallback={StyledFormContainer}
          props={{ style: views?.styles?.container, ...restProps }}
          customRenderView={
            views?.renderContainer
              ? (context) =>
                  views?.renderContainer?.({
                    props: context,
                    formState
                  })
              : undefined
          }>
          {children}
        </FallbackView>
      </NativeFormContextProvider>
    </FormProvider>
  );
};

const FormView = forwardRef(FormComponentView) as <
  T,
  F extends FieldValues = FieldValues
>(
  props: React.PropsWithChildren<FormProps<T, F>> & {
    ref?: React.ForwardedRef<FormRefProps<T, F>>;
  }
) => ReturnType<typeof FormComponentView>;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export const Form = FormView;
export default Form;
