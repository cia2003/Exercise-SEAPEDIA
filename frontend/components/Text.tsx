import NextLink from "next/link";
import { ComponentPropsWithoutRef, createElement } from 'react';
import {
  type TextProps as AriaTextProps,
} from 'react-aria-components/Text';
import './Text.css';

interface TextProps extends AriaTextProps {
  /**
   * @default 'base'
   */
  variant?: 'hero' | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'base' | 'strong' | 'button' | 'small' | 'small-button';
}

export function Text({ variant = 'base', ...props }: TextProps) {
  const element: string = {
    "hero": 'h1',
    "heading-1": 'h1',
    "heading-2": 'h2',
    "heading-3": 'h3',
    "heading-4": 'h4',
    "heading-5": 'h5',
    "base": 'p',
    "strong": 'p',
    "button": 'span',
    "small": 'span',
    "small-button": 'span'
  }[variant] || 'p';
  return createElement(
    element,
    { ... props, className: `text text-${variant}`},
    props.children,
  );
}

interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string,
};

export function Link(props: LinkProps) {
  return (
    <NextLink
      { ...props } className={'text text-base'}
    ></NextLink>
  );
}