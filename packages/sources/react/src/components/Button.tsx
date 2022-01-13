import * as React from 'react';
import { ButtonVariant, ButtonSize } from './types';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * The variant of the button.
   * @defaultValue 'primary'
   */
  variant?: ButtonVariant;
  /**
   * The size of the button.
   * @defaultValue 'medium'
   */
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'medium', children, className, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`bfn-btn bfn-btn_variant--${variant} bfn-btn_size--${size} ${
          className ? className : ''
        }`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

const MemoButton = React.memo(Button);

MemoButton.displayName = 'Button';

export default MemoButton;
