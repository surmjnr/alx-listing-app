import React from 'react';
import { CardProps } from '../../interfaces';

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  onClick,
  className,
}) => {
  return (
    <div 
      onClick={onClick} 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${className || ''}`}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        {title && (
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600 text-sm mb-2">{description}</p>
        )}
        {price && (
          <div className="text-2xl font-bold text-blue-700 mb-2">
            ${price.toLocaleString()}
          </div>
        )}
        {location && (
          <div className="text-gray-600 text-sm mb-3">{location}</div>
        )}
        <div className="flex gap-4 text-gray-600 text-sm">
          {bedrooms && (
            <div className="flex items-center gap-1">
              <span>🛏️</span> {bedrooms} beds
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center gap-1">
              <span>🚿</span> {bathrooms} baths
            </div>
          )}
          {area && (
            <div className="flex items-center gap-1">
              <span>📏</span> {area} sqft
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card; 