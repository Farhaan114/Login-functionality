# Project Name

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Screenshots](#screenshots)
4. [Setup Instructions](#setup-instructions)
5. [API Documentation](#api-documentation)

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
## Screenshots
-**Login Page:**
![image](https://github.com/user-attachments/assets/52899a17-5d82-4227-9339-65c0ee1e90f0)

-**Register Page:**
![image](https://github.com/user-attachments/assets/d3545619-ed61-421e-957e-773923e8900a)

-**Redirection after secure login to content:**
![image](https://github.com/user-attachments/assets/b2acc962-6ead-4100-b76c-49fa0ea45751)

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
---

## API Documentation

You can test and view all API endpoints using the Postman documentation linked below:

- [API Documentation (Postman Collection)]([https://link-to-your-postman-collection](https://api.postman.com/collections/36006187-f67c7217-0aef-40ce-9cb7-9e6e6e2bb707?access_key=PMAT-01JBQ2B3Y8THPCXM3EXH1WZDJW))










