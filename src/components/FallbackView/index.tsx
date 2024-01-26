import React, { createElement } from "react";
import { FallbackViewProps } from "./props";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const FallbackView = <T extends any = any>(
  props: FallbackViewProps<T>
): any => {
  const {
    view,
    children,
    fallback,
    props: viewProps,
    customRenderView
  } = props;

  // =============== VIEW
  if (!view && !fallback && !customRenderView) return null;
  if (customRenderView) {
    return <>{customRenderView({ ...viewProps, children })}</>;
  }
  if (view) return <>{createElement(view as any, viewProps, children)}</>;
  if (!fallback && children) return children;
  if (!fallback) return null;
  return <>{createElement(fallback as any, viewProps, children)}</>;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from "./props";
export default FallbackView;
