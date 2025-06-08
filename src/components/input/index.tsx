"use client";

import { forwardRef, useState } from "react";
import {
  ErrorMessage,
  InputContainer,
  Label,
  StyledInput,
  InputWrapper,
  IconContainer,
} from "./styles";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      type = "text",
      value,
      onChange,
      error,
      required = false,
      disabled = false,
      name,
      id,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const inputId =
      id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const isPasswordType = type === "password";
    const inputType = isPasswordType
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <InputContainer>
        {label && (
          <Label
            htmlFor={inputId}
            style={{
              color: error ? "#EF4444" : isFocused ? "#B85C38" : "#B85C38",
            }}
          >
            {label}
            {required && <span style={{ color: "#EF4444" }}> *</span>}
          </Label>
        )}

        <InputWrapper>
          <StyledInput
            ref={ref}
            id={inputId}
            name={name}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            className={error ? "error" : ""}
            style={{
              paddingRight: isPasswordType ? "60px" : undefined,
            }}
          />

          {isPasswordType && (
            <IconContainer
              type="button"
              onClick={togglePasswordVisibility}
              disabled={disabled}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              tabIndex={0}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </IconContainer>
          )}
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;
