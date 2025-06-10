import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  max-width: 200px;
  width: 100%;
  padding: 10px 15px 10px 40px;
  background: #f6f6f6;
  border-radius: 100px;
  color: #c5c5c5;
`;

export const Icon = styled.div`
  position: absolute;
  top: 25%;
  left: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  background: #f6f6f6;
  font-size: 13px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }

  &::placeholder {
    color: #c5c5c5;
  }
`;
