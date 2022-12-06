import { FieldValues } from "react-hook-form";
import React, { createContext, ReactElement, useContext } from "react";
import { ContextProps } from "./props";

export const NativeFormContext = createContext<ContextProps<any, any>>({});

export const useNativeFormContext = <
  T,
  F extends FieldValues = FieldValues
>(): ContextProps<T, F> => {
  const context = useContext<ContextProps<T, F>>(NativeFormContext);
  if (!context) {
    throw new Error(
      `useNativeFormContext must be used inside a NativeFormContextProvider.`
    );
  }
  return context;
};

export const NativeFormContextProvider = <
  T,
  F extends FieldValues = FieldValues
>(
  props: React.PropsWithChildren<ContextProps<T, F>>
): ReactElement => {
  const { children, ...restProps } = props;
  return (
    <NativeFormContext.Provider value={restProps}>
      {children}
    </NativeFormContext.Provider>
  );
};

export type NativeFormContextProps<T> = ContextProps<T>;
export default NativeFormContext;
