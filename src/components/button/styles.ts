import styled from "styled-components";

export const StyledButton = styled.button<{ size?: string; variant?: string }>`
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-wrap: nowrap;
  font-weight: 400;

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 6px 12px;
          font-size: 14px;
        `;
      case "large":
        return `
          padding: 12px 24px;
          font-size: 18px;
        `;
      case "single":
        return `
          padding: 10px 14px;
          font-size: 12px;
        `;
      default:
        return `
          padding: 10px 16px;
          font-size: 12px;
        `;
    }
  }}
  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return `
          background-color: #F5F5F5;
          color: black;
          
          &:hover:not(:disabled) {
            background-color: #E5E5E5;
          }
        `;
      default:
        return `
          background-color: #cc6237;
          color: white;
          
          &:hover:not(:disabled) {
            background-color: #a0522d;
          }
        `;
    }
  }}
    &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
