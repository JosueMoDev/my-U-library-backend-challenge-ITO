# 📚 My University Library - ITO Backend Test

A small university library system where students can check out physical books. The system includes roles for both Students and Librarians, allowing them to manage books and users effectively.

## ✨ Features

- **Student Role:**
  - View the list of all books in the library
  - Filter or search books by title, author, or genre
  - View details of a selected book and check availability
  - Request a book for checkout if available
  - View a list of all books checked out

- **Librarian Role:**
  - Add new users with first name, last name, email, and role
  - Add new books with title, author, published year, and genre
  - View and manage book checkouts
  - Mark books as returned to update stock

## 🛠️ Technologies

- **Backend:**
  - Node.js
  - Express.js
  - TypeScript
  - MongoDB
  - Prisma ORM
  - Swagger for API documentation
  - Class-validator and class-transformer for data validation and transformation

## ⚙️ Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/JosueMoDev/my-university-library.git
    cd my-university-library
    ```

2. **Install dependencies:**

    ```bash
    yarn install
    ```

3. **Generate Prisma Client:**

    ```bash
    npx prisma generate
    ```

# 
4. Rename the .env.template file to .env and configure the following variables:

```bash
DATABASE_URL=
PORT=
SECRET_KEY_JWT=
```

Note: If you don't have a MongoDB connection string, you can use this test one:
```bash
  DATABASE_URL=mongodb+srv://test:Su9cJtPRzvwgBOsS@cluster0.wwp35ls.mongodb.net/test
```
5. **Run the seed script:**

    ```bash
    yarn seed
    ```
**Important**: Running the seed script is crucial as it populates the database with initial data required for the application to function correctly. This includes default users, books, and other necessary records to get started.
 ```bash
    {
      "email": "adminuser@gmail.com",
      "password": "my$otrongPass0rd"
    }
 ```
You can log in with this user to start managing the library system right away
6. **Run the development server:**

```bash
    yarn dev
```

## 🚀 Usage

- Access the API at [http://localhost:3000](http://localhost:3000)
- Use the provided Postman collection to test the endpoints.

## 📜 API Documentation

The API is documented using Swagger. You can access the documentation at [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 📄 License

This project is licensed under the MIT License.
### DevDependencies

1. **@eslint/js**: No type definition file needed.
   - Provides a JavaScript code analysis tool to identify problematic patterns in JavaScript code.
   - [Yarn Page](https://yarnpkg.com/package/@eslint/js)

2. **@types/bcryptjs**: Type definition file needed.
   - Type definitions for bcryptjs, a library to hash passwords.
   - [Yarn Page](https://yarnpkg.com/package/@types/bcryptjs)

3. **@types/jsonwebtoken**: Type definition file needed.
   - Type definitions for jsonwebtoken, a library to sign, verify, and decode JSON Web Tokens.
   - [Yarn Page](https://yarnpkg.com/package/@types/jsonwebtoken)

4. **@types/node**: Type definition file needed.
   - Type definitions for Node.js, the runtime environment for executing JavaScript code server-side.
   - [Yarn Page](https://yarnpkg.com/package/@types/node)

5. **@typescript-eslint/eslint-plugin**: No type definition file needed.
   - ESLint plugin that provides linting rules for TypeScript code.
   - [Yarn Page](https://yarnpkg.com/package/@typescript-eslint/eslint-plugin)

6. **@typescript-eslint/parser**: No type definition file needed.
   - ESLint parser that allows ESLint to lint TypeScript code.
   - [Yarn Page](https://yarnpkg.com/package/@typescript-eslint/parser)

7. **eslint**: No type definition file needed.
   - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
   - [Yarn Page](https://yarnpkg.com/package/eslint)

8. **globals**: No type definition file needed.
   - Library for defining a list of global variables that are predefined.
   - [Yarn Page](https://yarnpkg.com/package/globals)

9. **rimraf**: No type definition file needed.
   - Utility for removing files and directories, similar to Unix command `rm -rf`.
   - [Yarn Page](https://yarnpkg.com/package/rimraf)

10. **ts-node-dev**: No type definition file needed.
    - Provides a fast TypeScript execution environment with automatic restarting.
    - [Yarn Page](https://yarnpkg.com/package/ts-node-dev)

11. **typescript**: No type definition file needed.
    - A strongly typed programming language that builds on JavaScript.
    - [Yarn Page](https://yarnpkg.com/package/typescript)

12. **typescript-eslint**: No type definition file needed.
    - Monorepo for all the tooling which enables ESLint to support TypeScript.
    - [Yarn Page](https://yarnpkg.com/package/typescript-eslint)

### Dependencies

1. **@prisma/client**: No type definition file needed.
   - Prisma Client is an auto-generated query builder for TypeScript and Node.js.
   - [Yarn Page](https://yarnpkg.com/package/@prisma/client)

2. **@types/compression**: Type definition file needed.
   - Type definitions for compression, a middleware to compress HTTP responses.
   - [Yarn Page](https://yarnpkg.com/package/@types/compression)

3. **@types/cors**: Type definition file needed.
   - Type definitions for cors, a middleware to enable Cross-Origin Resource Sharing.
   - [Yarn Page](https://yarnpkg.com/package/@types/cors)

4. **@types/express**: Type definition file needed.
   - Type definitions for Express, a web application framework for Node.js.
   - [Yarn Page](https://yarnpkg.com/package/@types/express)

5. **@types/swagger-ui-express**: Type definition file needed.
   - Type definitions for swagger-ui-express, a middleware to serve auto-generated Swagger API documentation.
   - [Yarn Page](https://yarnpkg.com/package/@types/swagger-ui-express)

6. **bcryptjs**: Has a type definition file in @types/bcryptjs.
   - Library to hash passwords.
   - [Yarn Page](https://yarnpkg.com/package/bcryptjs)

7. **class-transformer**: No type definition file needed.
   - Library to transform objects between classes and plain objects.
   - [Yarn Page](https://yarnpkg.com/package/class-transformer)

8. **class-validator**: No type definition file needed.
   - Library to validate class objects using decorators.
   - [Yarn Page](https://yarnpkg.com/package/class-validator)

9. **class-validator-jsonschema**: No type definition file needed.
   - Library to generate JSON Schema from class-validator decorated classes.
   - [Yarn Page](https://yarnpkg.com/package/class-validator-jsonschema)

10. **compression**: Has a type definition file in @types/compression.
    - Middleware to compress HTTP responses.
    - [Yarn Page](https://yarnpkg.com/package/compression)

11. **cors**: Has a type definition file in @types/cors.
    - Middleware to enable Cross-Origin Resource Sharing.
    - [Yarn Page](https://yarnpkg.com/package/cors)

12. **env-var**: No type definition file needed.
    - Library to parse environment variables.
    - [Yarn Page](https://yarnpkg.com/package/env-var)

13. **express**: Has a type definition file in @types/express.
    - Web application framework for Node.js.
    - [Yarn Page](https://yarnpkg.com/package/express)

14. **jsonwebtoken**: Has a type definition file in @types/jsonwebtoken.
    - Library to sign, verify, and decode JSON Web Tokens.
    - [Yarn Page](https://yarnpkg.com/package/jsonwebtoken)

15. **openapi-types**: No type definition file needed.
    - Type definitions for OpenAPI Specification.
    - [Yarn Page](https://yarnpkg.com/package/openapi-types)

16. **prisma**: No type definition file needed.
    - Prisma is an open-source ORM for Node.js and TypeScript.
    - [Yarn Page](https://yarnpkg.com/package/prisma)

17. **swagger-ui-express**: Has a type definition file in @types/swagger-ui-express.
    - Middleware to serve auto-generated Swagger API documentation.
    - [Yarn Page](https://yarnpkg.com/package/swagger-ui-express)

18. **module-alias**: No type definition file needed.
    - Library to load modules whose location is specified in the paths section of tsconfig.json.
    - [Yarn Page](https://yarnpkg.com/search?q=module-alias)
