import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Text({ children, ...props }: TextProps) {
  return <p {...props}>{children}</p>;
}
