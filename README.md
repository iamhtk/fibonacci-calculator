# Fibonacci Generator

A React-based Fibonacci Generator application that allows users to generate Fibonacci sequences with customizable starting values.

## Features

- **Customizable Starting Values**: Set f(0) and f(1) (defaults: 0, 1)
- **Maximum Number Input**: Generate Fibonacci sequence up to any specified number
- **Real-time Sequence Generation**: Generate Fibonacci sequences instantly
- **Visual Results Display**: Color-coded results in a grid layout
- **Responsive Design**: Works across different screen sizes
- **Clean UI**: Modern design matching Figma specifications

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## How It Works

The Fibonacci sequence is generated using the formula:
**f(n) = f(n-1) + f(n-2)**

### Default Behavior
- Starting values: f(0) = 0, f(1) = 1
- Each subsequent number is the sum of the two preceding numbers
- Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

### Custom Starting Values
- Users can customize f(0) and f(1) to any integer values
- The sequence will generate based on these custom starting values
- Example with f(0)=2, f(1)=3: 2, 3, 5, 8, 13, 21, 34...

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # App-level styles
├── main.jsx               # Application entry point
├── index.css              # Global styles and design tokens
├── components/
│   ├── Header/            # Header component
│   ├── ConfigurationPanel/ # Configuration panel with inputs
│   ├── ResultsPanel/      # Results display panel
│   └── InfoSection/       # Information section
└── utils/
    └── fibonacci.js       # Fibonacci algorithm logic
```

## Design System

The application uses a consistent design system with:
- **Colors**: Defined in CSS variables for easy customization
- **Typography**: Inter font family with consistent sizing
- **Spacing**: 8px base unit spacing system
- **Components**: Reusable styled components

## Technologies Used

- React 18
- Vite (build tool)
- CSS Modules (styling)
- Inter font family

## License

This project is created for assessment purposes.

