import { FieldValues } from "react-hook-form";
import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext
} from "react";
import { NativeFormContextProps, NativeFormContextHookProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const NativeFormContext = createContext<
  NativeFormContextProps<any, any>
>({});

export const useNativeFormContext = <
  T,
  F extends FieldValues = FieldValues
>(): NativeFormContextHookProps<T, F> => {
  // ================ HOOKS
  const context = useContext<NativeFormContextProps<T, F>>(NativeFormContext);
  if (!context) {
    throw new Error(
      `useNativeFormContext must be used inside a NativeFormContextProvider.`
    );
  }

  // ================ EVENTS
  const submit = useCallback(() => {
    const { form, submitHandler } = context;
    if (!form) {
      console.error("Form instance is not initialized!");
      return;
    }
    if (!submitHandler) {
      console.error("Submit handler is not provided!");
      return;
    }
    form.handleSubmit(submitHandler)();
  }, [context]);

  return { form: context.form, submit };
};

export const NativeFormContextProvider = <
  T,
  F extends FieldValues = FieldValues
>(
  props: React.PropsWithChildren<NativeFormContextProps<T, F>>
): ReactElement => {
  const { children, ...restProps } = props;
  return (
    <NativeFormContext.Provider value={restProps}>
      {children}
    </NativeFormContext.Provider>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export default NativeFormContext;
