# ALX Listing App

A modern property listing application inspired by Airbnb, built with Next.js, TypeScript, and TailwindCSS. This project aims to create a beautiful and functional property listing platform where users can browse, search, and view detailed information about various properties.

## Features

- TypeScript for type safety and better development experience
- TailwindCSS for responsive and modern UI design
- ESLint for code quality and consistency
- Styled-components for component-specific styling
- Responsive design for all device sizes
- Modern UI/UX with smooth animations
- Property listing and search functionality
- Detailed property views
- Image galleries
- Location-based search

## Project Structure

```
alx-listing-app/
├── components/     # Reusable UI components
│   ├── common/     # Shared components (Button, Card, etc.)
│   └── layout/     # Layout components (Header, Footer, etc.)
├── constants/      # Application constants and configuration
├── interfaces/     # TypeScript interfaces and types
├── pages/         # Next.js pages and routing
├── public/        # Static assets
│   └── assets/    # Images, icons, and other media
│       ├── images/# Property images and backgrounds
│       └── icons/ # SVG icons and small graphics
└── styles/        # Global styles and Tailwind configuration
```

## Directory Purposes

- `components/`: Contains all reusable React components
  - `common/`: Shared components like buttons, cards, and form elements
  - `layout/`: Page layout components like headers and footers
- `constants/`: Stores application-wide constants, configuration, and text content
- `interfaces/`: TypeScript interfaces and types for type safety
- `pages/`: Next.js pages and routing configuration
- `public/assets/`: Static assets like images and icons
- `styles/`: Global styles and Tailwind CSS configuration

## Getting Started

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd alx-listing-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Technologies Used

- Next.js - React framework for production
- TypeScript - Type-safe JavaScript
- TailwindCSS - Utility-first CSS framework
- Styled-components - CSS-in-JS styling
- ESLint - Code linting
- React - UI library
- Node.js - JavaScript runtime

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 