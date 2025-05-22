import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title?: string;
  imageUrl?: string;
  price?: string | number;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string | number;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #333;
`;

const CardPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c5282;
  margin-bottom: 0.5rem;
`;

const CardLocation = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CardDetails = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const CardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  onClick,
  className,
  children,
}) => {
  return (
    <CardContainer onClick={onClick} className={className}>
      {imageUrl && <CardImage src={imageUrl} alt={title || 'Property image'} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {price && <CardPrice>${typeof price === 'number' ? price.toLocaleString() : price}</CardPrice>}
        {location && <CardLocation>{location}</CardLocation>}
        <CardDetails>
          {bedrooms && (
            <CardDetail>
              <span>🛏️</span> {bedrooms} beds
            </CardDetail>
          )}
          {bathrooms && (
            <CardDetail>
              <span>🚿</span> {bathrooms} baths
            </CardDetail>
          )}
          {area && (
            <CardDetail>
              <span>📏</span> {area} sqft
            </CardDetail>
          )}
        </CardDetails>
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default Card; 