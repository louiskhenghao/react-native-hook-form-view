import React, { createElement } from "react";
import CloneElement from "../CloneElement";
import { Props } from "./props";

export const FallbackView = <T,>(props: React.PropsWithChildren<Props<T>>) => {
  const {
    view,
    children,
    fallbackView,
    props: viewProps,
    customRenderView,
    constructProps
  } = props;

  // ======================= VIEW
  if (!view && !fallbackView && !customRenderView) return null;
  if (customRenderView) {
    return <>{customRenderView({ ...viewProps, children })}</>;
  }
  if (view) return <>{createElement(view, viewProps, children)}</>;
  if (!fallbackView && children) return <CloneElement>{children}</CloneElement>;
  if (!fallbackView) return null;
  return <>{createElement(fallbackView, viewProps, children)}</>;
};

export type FallbackViewProps<T> = Props<T>;
export default FallbackView;
