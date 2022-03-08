import React from 'react';

import classNames from 'classnames';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Text({ children, className, ...props }: TextProps) {
  return (
    <p className={classNames('text', className)} {...props}>
      {children}
    </p>
  );
}
