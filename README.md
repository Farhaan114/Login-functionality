# Project Name

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Folder Structure](#folder-structure)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [API Documentation](#api-documentation)
8. [Workflow](#workflow)
9. [Media Queries and Responsiveness](#media-queries-and-responsiveness)

---

## Project Overview

This project includes both frontend (`client`) and backend (`server`) components for a web application with login and registration functionalities. The frontend is built with React, and the backend uses Node.js with Express for handling API calls and user authentication.

---

## Features

- **User Registration and Login**
  - Secure user registration and login functionality using API calls.
  - Passwords are hashed before storing in the database.
  - Validation and error handling for incorrect credentials.
- **API Authentication**
  - JWT tokens for secure authentication between frontend and backend.
- **Media Queries and Responsive Design**
  - Fully responsive design to ensure usability on mobile devices.
  - Custom media queries to adapt the layout for smaller screens.

---
## Setup Instructions

### Prerequisites

- **Node.js** and **npm**: Ensure you have Node.js and npm installed.
- **Database**: This project requires MySQL to store user credentials.

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Farhaan114/Login-functionality.git
   cd Login-functionality
   ```

2. **Install dependencies**:
   - For backend:
     ```bash
     cd SERVER
     npm install
     ```
   - For frontend:
     ```bash
     cd CLIENT
     npm install
     ```

3. **Set up MySQL database**:
   - Create a database and import the provided schema in the `/SERVER/Server.sql` file.
  
4. **Create a `.env` file**:
   ```bash
    DB_HOST=localhost
    DB_USER=db_user
    DB_PASSWORD=password
    DB_NAME=db_name
    JWT_SECRET=your_jwt_key

   ```

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Run the frontend**:
   ```bash
   npm run dev
   ```








