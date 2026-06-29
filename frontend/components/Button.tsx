"use client";
import { Text } from '@/components/Text';
import { ReactNode } from 'react';
import { 
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components/Button';
import './Button.css';

interface ButtonProps extends AriaButtonProps {
  /**
   * @default 'solid'
   */
  children?: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'text' | 'icon';
}

export function Button({ children, className, variant = 'solid', ...props }: ButtonProps) {
  return (
    <AriaButton { ...props } className={`button-base button button--${variant} ${className}`} data-variant={variant}>
      <Text variant="button">{children}</Text>
    </AriaButton>
  );
}
