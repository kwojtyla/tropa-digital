import { StyledButton } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
