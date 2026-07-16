<div align="center">
  <h1>🛍️ MyStore - Premium E-Commerce Platform</h1>
  <p>A modern, fully responsive e-commerce web application built with React.</p>
</div>

<br />

## 📋 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)

## 📖 About the Project
**MyStore** is a state-of-the-art frontend e-commerce application designed to provide users with a seamless, premium shopping experience. It features a fully responsive UI, an advanced light/dark mode system, global state management for the shopping cart and wishlist, and a sleek, modern design aesthetic perfect for modern web standards.

## ✨ Key Features
- **Modern UI/UX**: High-end styling with CSS variables, smooth animations, and interactive hover states.
- **Light & Dark Mode**: Seamlessly switch between themes that adapt to user preferences across all pages.
- **State Management**: Built-in React Context API for managing User Authentication, Cart, and Wishlist states persistently.
- **Product Discovery**: Fetch and display trending products, detailed product pages, and categories.
- **User Workflows**: Dedicated pages for Login, Registration, Profile, Wishlist, Cart, and a 2-column Checkout experience.
- **Responsive Design**: Flawless experience across Desktop, Tablet, and Mobile devices using CSS Grid and Flexbox.

## 🛠️ Technologies Used
- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Icons**: Custom Inline SVGs
- **Data Source**: [DummyJSON API](https://dummyjson.com/)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine for testing and review.

### Prerequisites
Make sure you have Node.js installed on your computer.
- [Node.js](https://nodejs.org/) (v16 or higher recommended)

### Installation & Running
1. Open your terminal or command prompt.
2. Navigate to the project directory:
   ```bash
   cd "my task"
   ```
3. Install the required Node dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit the local URL provided in your terminal (usually `http://localhost:5173`).

## 📁 Folder Structure
```text
src/
├── components/      # Reusable UI components (Layout, Card, ProductDetails)
├── context/         # React Context providers (Auth, Cart, Theme, Wishlist)
├── pages/           # Main route pages (Home, About, Checkout, Contact, FAQ, etc.)
├── styles/          # Modular CSS files for all pages and components
├── App.jsx          # Main application routing logic
└── main.jsx         # Application entry point & Global wrappers
```
