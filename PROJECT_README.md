## The Challenge

Build a sample project based on the screens provided 

## Technology Stack and Setup

This project is built using the following technologies:

- **React:** A JavaScript library for building user interfaces.
- **Webpack:** A module bundler for JavaScript applications.
- **Babel:** A JavaScript compiler for writing next-generation JavaScript.
- **React Router:** A library for handling navigation and routing in a React application.
- **Prettier:** An opinionated code formatter.
- **ESLint:** A tool for identifying and fixing problems in JavaScript code.
- **React Testing Library:** A testing utility for React applications.

This project was built using React without the use of create-react-app. The configuration settings were done manually using webpack.

- **Webpack Configuration**: 
**Entry Point**: The main entry point of the application is set to `src/index.jsx`, which is the starting point for bundling the application.
**Output**: The bundled JavaScript code is output to the `dist` folder, and the generated `bundle.js` file is referenced in the `index.html` file.
**Loaders**:
   - **JavaScript/JSX**: Babel-loader is used to transpile modern JavaScript (ES6+) to a version compatible with most browsers.
   - **CSS**: Style-loader and CSS-loader are used to handle styles in the project.
   - **Images**: File-loader is configured to handle image files.
**Static Assets**: The `static` configuration in the development server points to both the `dist` and `assets` folders to serve static assets during development.
**Development Server**: The development server is set up to run on port 8000, with hot module replacement and live reloading for an efficient development workflow.
**Webpack Dev Server**: Configured to open the application in the default browser and enable hot module replacement.
 **Resolve Extensions**: Webpack is configured to resolve file extensions like `.js`, `.jsx`, and `.json`.

### Code Formatting and Linting

This project follows a consistent code style and adheres to best practices using Prettier and ESLint.

### Prettier

[Prettier](https://prettier.io/) is a code formatter that ensures a consistent and clean code style across the project. The configuration for Prettier is defined in the `.prettierrc` file.

To format the code, run the following command:

```
npm run format
yarn format
```

### ESLint

[ESLint](https://eslint.org/) is a powerful JavaScript linter that helps identify and fix issues in the code. The ESLint configuration is specified in the .eslintrc file.

To lint the code, run the following command:

```
npm run lint
yarn lint
```

## Project Structure

The project follows a standard React project structure with additional configuration for webpack. Here's an overview of the main directories and files:

- **src**: Contains the source code of the React application.
  - **components**: Reusable UI components.
  - **hooks**: Custom hooks used in the application.
  - **pages**: React components representing different pages of the app.
  - **utils**: Utility functions or helper modules.
  - **App.js**: The main component where the routes are defined.
  - **index.js**: The entry point of the  application.
  - **index.css**: Global styles for the application.
- **public**: Static assets and the main HTML file.
- **assets**: Images and other static assets.
- **feed**: Sample JSON file.
- **dist**: Output folder for webpack (generated when we build the project).
- **node_modules**: Node.js modules installed by npm.
- **.babelrc**: Babel configuration file.
- **.eslintrc**: ESLint configuration file.
- **package.json**: Node.js package file.
- **webpack.config.js**: Webpack configuration file.

This structure helps maintain a clear separation between pages and reusable components, promoting modularity and maintainability.


## Getting Started
Follow these steps to set up and run the project locally.

-Clone the repository
-Install dependencies: 
```yarn install```
-Start the development server: 
```npm start```

Open your browser and go to http://localhost:8000


## Note on Dummy Content
Please be aware that certain sections of the application, including the "login", "Start Your Free Trial," and some footer links, currently serve as placeholders. These areas are intentionally left blank without logic

## 
