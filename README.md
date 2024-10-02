# Library Project Backend Documentation

## Overview

This project is a backend service for a personal library management system. It is built using **Node.js**, **Express**, and **Sequelize** (an ORM for interacting with a relational database). The project follows a structured MVC (Model-View-Controller) pattern, ensuring separation of concerns and scalability.

---

## Prerequisites

Before running the project, ensure that you have the following installed on your system:

- **Node.js** (v14+)
- **NPM** (Node Package Manager)
- **PostgreSQL**

---

## Project Structure

- **Root Directory**:

  - **`server.js`**: The main entry point of the application where the Express server is initialized.
  - **`.env`**: Contains environment-specific variables like database connection settings, API keys, and other configuration data.
  - **`package.json`**: Defines the project's dependencies and scripts for easy management.

- **`src` Directory**:
  - **`config/`**: Houses configuration files, including the database configuration.
  - **`controllers/`**: Defines the logic for handling requests, connecting models with the routes.
  - **`middlewares/`**: Contains middleware functions used in processing requests (e.g., authentication or request logging).
  - **`models/`**: Defines the database models using Sequelize.
  - **`migrations/`**: Holds migration files to manage database schema changes.
  - **`routes/`**: Contains the API routes for managing the different resources (e.g., books, authors, genres).
  - **`helpers/`**: Utility functions that assist in various operations across the application.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/library-project-backend.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env` file based on the `.env.example` file:

   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your database credentials and any other necessary configurations (e.g., API keys).

---

## Running the Application

1. To start the server:

   ```bash
   npm run start
   ```

2. The application will be running at `http://localhost:3000` by default.

---

## Database Configuration

The project uses Sequelize as the ORM and is configured to use **MySQL** by default. If you want to change the database dialect (e.g., PostgreSQL), update the `config/database.js` file.

To run migrations and synchronize the database, use the following commands:

- Running migrations:

  ```bash
  npx sequelize-cli db:migrate
  ```

- Rolling back migrations:
  ```bash
  npx sequelize-cli db:migrate:undo
  ```

---

## API Endpoints

The backend exposes several endpoints for managing library-related resources:

### Books

- **GET /books**: Get a list of all books.
- **POST /books**: Add a new book (requires title, author, genre, year, imageUrl, and description).
- **PUT /books/status/:id**: Update the status of an existing book.

### Auth

- **POST /auth/register**: Create a new user.
- **POST /auth/login**: Login with an existing account.

---

## Sequelize Models

The models are defined using Sequelize and correspond to the entities managed by the library system:

- **Book**: Represents a book in the library, with fields like `title`, `author`, `genre`, `year`, `imageUrl`, `status` and `description`.
- **User**: Represents an user, with fields like `name`, `email` and `password`.

---

## Middleware

This project uses middleware for tasks like request logging, authentication, and error handling. Middleware functions are applied globally in the `server.js` file or to specific routes as needed.

---
