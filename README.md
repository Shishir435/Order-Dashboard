
# Vite React + Typescript + Redux

## Table of Contents

- [Vite React + Typescript + Redux](#vite-react--typescript--redux)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Project Structure](#project-structure)


## Introduction

The "Business Owner Dashboard" is a React-based web application that enables business owners to manage their orders seamlessly. With Google authentication, account details display, and order management features, this application offers a user-friendly experience.

## Technologies

- **UI**: React
- **Language**: JavaScript or TypeScript
- **State Management**: Redux


## Features

- **Google Authentication**:login using Google accounts.
- **User Account Details**: Quick access to account information.
- **Order List**: Display of 2,000 random orders with unique order IDs, customer details, product info, and quantities.
- **Order Management**:
   - **Edit Orders**: Edit and save order details for the session.
   - **Create New Orders**: Add new orders with required attributes.
   - **Delete Orders**: Remove orders as needed.
- **Highly Functional UI**: Intuitive and efficient user interface.

## Getting Started
To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have the following software/tools installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) to manage project dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git

2. cd your-repo
3. npm install


## Project Structure

The project is structured in a way to maintain a clean and organized codebase. Here's an overview of the project structure:

- **`src/`**: This directory contains the main source code of the application.
  - **`components/`**: React components used to build the user interface.
  - **`lib/`**: Utility functions and libraries used throughout the project.
  - **`types/`**: TypeScript type definitions used to enforce strong typing and enhance code readability.
  - **`app/store.ts`**: Reducx toolkit store setup
  - **`features/`**: Redux-related files and modules for state management.
    - **`order/`**: Redux Toolkit slices for managing different parts of the application state.
  - **`assets/`**: Images, fonts, or other static assets used in the application.
  - **`App.tsx`**: The entry point of the React application.
  - **`index.css`**: Global CSS styles.
  - **`main.tsx`**: The main entry point for Vite.

- **`public/`**: Public assets and files. These are served as-is to the client.

- **`ui.shadcn.json`**: Configuration file for the Shadcn UI library, specifying styles, aliases, and more.

- **`tsconfig.json`**: TypeScript configuration file for type checking.

- **`vite.config.js`**: Configuration file for the Vite development server and bundler.

- **`package.json`**: Node.js package file with project dependencies and scripts.

- **`README.md`**: The documentation file you are currently reading.

