'use client';
// import { Description, FieldError, Label, SharedFieldProps } from "@/components";
import { Button } from '@/components/Button';
import { ForwardedRef } from 'react';
import {
  Input as AriaInput,
  SearchField as AriaSearchField,
  TextField as AriaTextField,
  type InputProps as AriaInputProps,
  type SearchFieldProps as AriaSearchFieldProps,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult,
} from 'react-aria-components';
import { Search, X } from 'lucide-react';
import './Input.css';

export interface InputFieldProps extends AriaTextFieldProps {
  className?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
};
export function InputField({ className, ...props }: InputFieldProps) {
  const classNames: string = `${className} field`;
  return (
    <AriaTextField className={classNames} {...props}>
      {/* {props.label && <Label>{props.label}</Label>} */}
      <Input placeholder={props.placeholder} />
      {/* {description && <Description>{description}</Description>} */}
      {/* <FieldError>{errorMessage}</FieldError> */}
    </AriaTextField>
  );
}

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
};
export function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField {...props} className="search-field">
      {/* {label && <Label>{label}</Label>} */}
      <Input placeholder={placeholder} />
      <div className="search-field__icons">
        <Search size={18} />
        <Button variant="icon" className="clear-button"><X size={14} /></Button>
      </div>
      {/* {description && <Description>{description}</Description>} */}
      {/* <FieldError>{errorMessage}</FieldError> */}
    </AriaSearchField>
  );
}

interface InputProps extends AriaInputProps {
  className?: string,
  ref?: ForwardedRef<HTMLInputElement>,
};
export function Input({ className, ref, ...props }: InputProps) {
  const classNames: string = `${className} input`;
  return <AriaInput className={classNames} ref={ref} {...props} />;
};