import { ReactNode, FunctionComponent, PropsWithChildren } from "react";

/**
 * ===========================
 * MAIN
 * ===========================
 */
export type FallbackViewProps<T = any> = PropsWithChildren<{
  props?: T | any;
  /**
   * target view that going to display
   */
  view?: FunctionComponent<T>;
  /**
   * the fallback view going to replace if `view` / `customRenderView` doesn't present
   * NOTE: if this props doesn't present will use `children` as fallback
   */
  fallback?: FunctionComponent<T>;
  /**
   * custom display view
   * this has higher weightage than `view`
   */
  customRenderView?: (context: T) => ReactNode;
}>;

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export default FallbackViewProps;
