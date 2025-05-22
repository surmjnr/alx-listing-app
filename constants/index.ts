// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 5000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

// UI Text
export const UI_TEXT = {
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    SAVE: 'Save',
    CANCEL: 'Cancel',
    SUBMIT: 'Submit',
    LOADING: 'Loading...',
  },
  PROPERTY: {
    BEDROOMS: 'bedrooms',
    BATHROOMS: 'bathrooms',
    AREA: 'sqft',
    PRICE_PREFIX: '$',
  },
  MESSAGES: {
    LOADING: 'Loading...',
    ERROR: 'Something went wrong. Please try again.',
    NO_RESULTS: 'No properties found.',
  },
};

// Property Types
export const PROPERTY_TYPES = {
  APARTMENT: 'apartment',
  HOUSE: 'house',
  CONDO: 'condo',
  TOWNHOUSE: 'townhouse',
} as const;

// Property Status
export const PROPERTY_STATUS = {
  AVAILABLE: 'available',
  RENTED: 'rented',
  SOLD: 'sold',
  PENDING: 'pending',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
} as const;

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  API: 'yyyy-MM-dd',
} as const;

// Validation
export const VALIDATION = {
  MIN_PRICE: 0,
  MAX_PRICE: 1000000000,
  MIN_BEDROOMS: 0,
  MAX_BEDROOMS: 10,
  MIN_BATHROOMS: 0,
  MAX_BATHROOMS: 10,
} as const; 