import { ReactNode, FunctionComponent } from "react";

export type Props<T = any> = {
  props?: T;
  view?: FunctionComponent<T>;
  fallbackView?: FunctionComponent<T>;
  customRenderView?: (context: any) => ReactNode;
};
