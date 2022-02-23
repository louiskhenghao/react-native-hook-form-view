import React, { createContext, useContext } from "react";
import { ContextProps } from "./props";

export const NativeFormViewContext = createContext<ContextProps>({});

export const useNativeFormViewContext = (): ContextProps | null => {
  const context = useContext<ContextProps>(NativeFormViewContext);
  if (!context) {
    return null;
  }
  return context;
};

export const NativeFormViewProvider = (
  props: React.PropsWithChildren<ContextProps>
) => {
  const { children, ...restProps } = props;
  return (
    <NativeFormViewContext.Provider value={restProps}>
      {children}
    </NativeFormViewContext.Provider>
  );
};

export type NativeFormViewContextProps = ContextProps;
export default NativeFormViewContext;
