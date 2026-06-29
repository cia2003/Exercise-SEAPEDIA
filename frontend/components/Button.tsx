"use client";
import { ReactNode } from 'react';
import { Text } from '@/components/Text';
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
  variant?: 'solid' | 'outline' | 'text';
}

export default function Button({ children, variant = 'solid', ...props }: ButtonProps) {
  return (
    <AriaButton { ...props } className={`button-base button button--${variant}`} data-variant={variant}>
      <Text variant="button">{children}</Text>
    </AriaButton>
  );
}