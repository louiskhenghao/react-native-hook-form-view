import React from "react";

import { CloneElementProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CloneElement: React.FC<CloneElementProps> = (props) => {
  const { children, ...restProps } = props;

  // =============== VIEW
  const childrenWithProps = React.Children.map(children, (child: any) => {
    if (!child || typeof child === "boolean") {
      return null;
    }
    return React.cloneElement(child, restProps);
  });

  return childrenWithProps;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export default CloneElement;
