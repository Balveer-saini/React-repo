# React Portfolio Projects

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)

A collection of React projects demonstrating my proficiency with modern frontend development concepts including component architecture, state management, API integration, and responsive design.

## Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [Background Color Changer](#background-color-changer)
  - [Currency Converter](#currency-converter)
  - [Password Generator](#password-generator) 
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Learning Outcomes](#learning-outcomes)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This repository contains a collection of React applications that demonstrate my proficiency with React fundamentals and modern frontend development practices. Each project addresses different aspects of React development, from basic state management to API integration.

## Projects

### Background Color Changer

A clean, intuitive application that allows users to dynamically change the background color through various interaction methods:

- **Color Picker Tool**: Direct color selection through a color wheel
- **Predefined Palette**: Quick selection from curated color options
- **Random Color Generator**: Single-click random color generation
- **Hex Input Field**: Manual entry of hex color codes

**Key Features:**
- State management with React hooks
- CSS transitions for smooth color changes
- Responsive design for all devices
- Copy-to-clipboard functionality for color codes

**[Live Demo](https://your-demo-link-here.com)** | **[Source Code](./background-color-changer)**

### Currency Converter

A practical currency conversion application that provides real-time exchange rates:

- **Multi-Currency Support**: Converts between 30+ global currencies
- **Real-Time Rates**: Integration with currency exchange API
- **Conversion History**: Tracks recent conversions
- **Offline Support**: Caches recent exchange rates

**Key Features:**
- API integration with error handling
- Loading states and user feedback
- Response caching for performance optimization
- Mobile-friendly design

**[Live Demo](https://your-demo-link-here.com)** | **[Source Code](./currency-converter)**

### Password Generator

A security-focused application that creates customizable strong passwords:

- **Custom Parameters**: Length, character types, special symbols
- **Strength Indicator**: Visual password strength feedback
- **Password History**: Option to save and view previous passwords
- **Auto-Copy**: One-click copy to clipboard functionality

**Key Features:**
- Complex state management with useReducer
- Security best practices implementation
- Accessibility considerations for all users
- Visual feedback on user interactions

**[Live Demo](https://your-demo-link-here.com)** | **[Source Code](./password-generator)**

## Technologies

- **React 18**: Functional components with hooks
- **CSS Modules**: For component-scoped styling
- **JavaScript ES6+**: Modern JS features and patterns
- **Fetch API**: For external data integration
- **LocalStorage API**: For persistent state management
- **React Router**: For navigation between project pages
- **Jest & React Testing Library**: For unit and integration tests

## Installation

```bash
# Clone the repository
git clone https://github.com/Balveer-saini/react-portfolio-projects.git

# Navigate to project directory
cd react-portfolio-projects

# Install dependencies
npm install

# Start development server
npm start
```

## Usage

After installation, the development server will be running at `http://localhost:3000`. 

The home page provides navigation to each individual project, or you can navigate directly to:
- `/background-changer` - For the background color changing application
- `/currency-converter` - For the currency conversion tool
- `/password-generator` - For the secure password generator

## Screenshots

<div align="center">
  <img src="./screenshots/background-changer.png" alt="Background Color Changer" width="400"/>
  <p><em>Background Color Changer with color palette selection</em></p>
  
  <img src="./screenshots/currency-converter.png" alt="Currency Converter" width="400"/>
  <p><em>Currency Converter showing exchange rate between USD and EUR</em></p>
  
  <img src="./screenshots/password-generator.png" alt="Password Generator" width="400"/>
  <p><em>Password Generator with strength indicator</em></p>
</div>

## Project Structure

```
react-portfolio-projects/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── BackgroundChanger/
│   │   ├── CurrencyConverter/
│   │   └── PasswordGenerator/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Learning Outcomes

Through building these projects, I've gained expertise in:

1. **Component Architecture**: Creating reusable and maintainable UI components
2. **State Management**: Implementing useState, useReducer, and context API for state management
3. **API Integration**: Handling asynchronous operations, error states, and data transformation
4. **Responsive Design**: Ensuring a seamless experience across all device sizes
5. **Performance Optimization**: Implementing memoization and proper component lifecycle management

## Future Improvements

- [ ] Add dark mode support across all projects
- [ ] Implement user accounts for saving preferences
- [ ] Add PWA support for offline functionality
- [ ] Expand test coverage with additional unit and integration tests
- [ ] Create shared UI component library

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Balveer Saini - [balveer.tech0@gmail.com](mailto:balveer.tech0@gmail.com) - [LinkedIn](https://www.linkedin.com/in/balveer-saini)

Project Link: [https://github.com/Balveer-saini/react-portfolio-projects](https://github.com/Balveer-saini/react-portfolio-projects)
