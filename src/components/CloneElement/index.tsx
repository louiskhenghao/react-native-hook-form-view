import React from "react";

interface Props {
  [key: string]: any;
}

const CloneElementComponent = (props: Props): any => {
  const { children, ...restProps } = props;

  // ======================= VIEW
  const childrenWithProps = React.Children.map(children, (child: any) => {
    if (!child || typeof child === "boolean") {
      return null;
    }
    return React.cloneElement(child, restProps);
  });

  return childrenWithProps;
};

export const CloneElement = CloneElementComponent;
export default CloneElement;
