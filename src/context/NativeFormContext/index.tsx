import React, { createContext, ReactElement, useContext } from "react";
import { ContextProps } from "./props";

export const NativeFormContext = createContext<ContextProps<any>>({});

export const useNativeFormContext = <T,>(): ContextProps<T> => {
  const context = useContext<ContextProps<T>>(NativeFormContext);
  if (!context) {
    throw new Error(
      `useNativeFormContext must be used inside a NativeFormContextProvider.`
    );
  }
  return context;
};

export const NativeFormContextProvider = <T,>(
  props: React.PropsWithChildren<ContextProps<T>>
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
