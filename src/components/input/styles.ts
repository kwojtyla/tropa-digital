import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1.25rem;
  font-size: 0.75rem;
  color: black;
  background-color: #f6f6f6;
  border: none;
  border-radius: 100px;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.75rem;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: #ffffff;
  }

  &.error {
    background-color: rgb(255, 226, 226);
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 0.25rem;
  min-height: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconContainer = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease-in-out;
  border-radius: 50%;

  &:hover {
    color: "#6B7280";
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
