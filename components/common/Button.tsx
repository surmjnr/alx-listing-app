import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from '../../interfaces';

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: #2c5282;
        color: white;
        &:hover {
          background-color: #2b6cb0;
        }
      `;
    case 'secondary':
      return css`
        background-color: #e2e8f0;
        color: #2d3748;
        &:hover {
          background-color: #cbd5e0;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        border: 2px solid #2c5282;
        color: #2c5282;
        &:hover {
          background-color: #ebf8ff;
        }
      `;
    default:
      return css`
        background-color: #2c5282;
        color: white;
        &:hover {
          background-color: #2b6cb0;
        }
      `;
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      `;
    case 'large':
      return css`
        padding: 1rem 2rem;
        font-size: 1.125rem;
      `;
    default:
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      background-color: inherit;
    }
  `}
  ${({ loading }) => loading && css`
    position: relative;
    color: transparent;
    &:after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      border: 2px solid currentColor;
      border-radius: 50%;
      border-right-color: transparent;
      animation: spin 0.75s linear infinite;
    }
  `}

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className,
  fullWidth = false,
  loading = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      className={className}
      fullWidth={fullWidth}
      loading={loading}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 