import { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  imageUrl?: string;
  price?: string | number;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string | number;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
} 