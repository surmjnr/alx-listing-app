import React from 'react';
import { ButtonProps } from '../../interfaces';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../../constants';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return 'bg-blue-700 text-white hover:bg-blue-800';
      case BUTTON_VARIANTS.SECONDARY:
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      case BUTTON_VARIANTS.OUTLINE:
        return 'bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-50';
      default:
        return 'bg-blue-700 text-white hover:bg-blue-800';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case BUTTON_SIZES.SMALL:
        return 'px-4 py-2 text-sm';
      case BUTTON_SIZES.LARGE:
        return 'px-6 py-3 text-lg';
      default:
        return 'px-5 py-2.5 text-base';
    }
  };

  const baseClasses = 'rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2';
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 