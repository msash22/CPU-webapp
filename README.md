# CPU Management App

This is a full-stack web application for managing CPUs and sockets.  
It uses a **Spring Boot** backend, a **React** frontend, and a **MariaDB** database.

---

## ✅ Prerequisites

Make sure you have installed:

- Java
- Maven
- Node.js and npm
- MariaDB

---

## ⚙️ Backend Setup

1. Go to the backend directory:

    ```bash
    cd backend
    ```
   
2. Configure the database in src/main/resources/application.properties:

    ```properties
    spring.datasource.url=jdbc:mariadb://localhost:3306/cpu_app
    spring.datasource.username=root
    spring.datasource.password=password
    ```
   Use update instead of create-drop if you don't want to reset the DB every time.
3. Create the database:

    ```sql
    CREATE DATABASE cpu_app;
    ```
4. Build the backend:

    ```bash
    mvn spring-boot:run
    ```
## 🌍 Frontend Setup
1. Go to the frontend directory:

    ```bash
    cd frontend
    ```
2. Install the dependencies:

    ```bash
    npm install
    ```
3. Start the frontend:

    ```bash
    npm start
    ```
4. Open your browser and go to [http://localhost:3000](http://localhost:3000).