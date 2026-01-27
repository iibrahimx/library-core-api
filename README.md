# Library Management API

A RESTful API built with Node.js and Express for managing books and authors, featuring secure authentication and role-based authorization.

## Features

- **User Authentication:** Secure registration and login using JSON Web Tokens (JWT).
- **Role-Based Access Control (RBAC):** Tiered permissions for `admin` and `user` roles.
- **Resource Management:** Full CRUD operations for books and authors.
- **Database Integration:** Scalable data modeling with MongoDB and Mongoose.
- **Centralized Error Handling:** Consistent API responses for all error types (404, 401, 500, etc.).
- **Protected Routes:** Middleware-based request validation using JWT.

## Recommended Project Structure

Here is how your library API should be organized to match the code we've been working on:
library-core-api/
├── src/
│ ├── config/ # Database connection (db.js)
│ ├── controllers/ # Logic for routes (auth.controller.js, book.controller.js)
│ ├── middlewares/ # Security and logic filters (auth, roles, errors)
│ ├── models/ # Mongoose schemas (User.js, Book.js)
│ ├── routes/ # Route definitions (auth.routes.js, book.routes.js)
│ ├── utils/ # Helper functions (generateToken.js)
│ └── server.js # Application entry point
├── .env # Environment variables (Secrets)
├── .gitignore # Files to exclude from Git (node_modules, .env)
├── package.json # Dependencies and scripts
└── README.md # Project documentation

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose
- **Security:** JWT (jsonwebtoken) Authentication & bcryptjs
- **Environment:** dotenv

## Setup & Installation

1. **Clone the repository:**

```bash
git clone [https://github.com/iibrahimx/library-core-api.git](https://github.com/iibrahimx/library-core-api.git)
cd library-core-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure Environment Variables:**
   Create a .env file in the root directory and add:

```env
# > Do not commit the `.env` file. It is excluded via `.gitignore`.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

4. **Run the application:**

```bash
# Development mode (with nodemon)
npm run dev

# Production-like mode (without deployment)
npm start
```

## API Endpoints

**Authentication**
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive JWT |

**Books**
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| GET | `/api/books` | Public | Get all books |
| POST | `/api/books` | Admin | Add a new book |
| GET | `/api/books/:id` | Public | Get specific book details |
| PUT | `/api/books/:id` | Admin | Update book information |
| DELETE | `/api/books/:id` | Admin | Remove a book |

## 👨‍💻 Author

Built to demonstrate backend API design, JWT-based authentication, role-based authorization, and clean Express architecture.
