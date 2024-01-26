import React, { PropsWithChildren, createContext, useContext } from "react";
import { NativeFormViewContextProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const NativeFormViewContext = createContext<NativeFormViewContextProps>(
  {}
);

export const useNativeFormViewContext = (): NativeFormViewContextProps | null => {
  const context = useContext<NativeFormViewContextProps>(NativeFormViewContext);
  if (!context) {
    return null;
  }
  return context;
};

export const NativeFormViewProvider: React.FC<PropsWithChildren<
  NativeFormViewContextProps
>> = (props) => {
  const { children, ...restProps } = props;

  // ================ VIEWS
  return (
    <NativeFormViewContext.Provider value={restProps}>
      {children}
    </NativeFormViewContext.Provider>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export default NativeFormViewContext;
