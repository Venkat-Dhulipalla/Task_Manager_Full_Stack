# Task Management System

Welcome to the Task Management System project! This is a full-stack application built using React.js and Spring Boot, leveraging a microservices architecture. The application includes an admin and user role, where admins can create and assign tasks, and users can submit tasks upon completion.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Microservices Architecture](#microservices-architecture)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

The project allows admins to create tasks and assign them to users. Users can submit tasks and check their statuses. Below is a quick overview of the application's capabilities:

1. **User Authentication**: Register and log in with validation checks.
2. **Admin Dashboard**:
   - Create tasks with title, description, tags, and deadlines.
   - Assign tasks to users.
   - Review and manage task submissions.
3. **User Dashboard**:
   - View assigned tasks.
   - Submit completed tasks with relevant URLs.
   - Check submission statuses (pending, accepted, or declined).

## Technologies

### Backend
- **Spring Boot**: Framework for building Java applications.
- **MySQL**: Relational database management system.
- **Eureka Server**: Service registry for microservices.
- **API Gateway**: Handles routing of client requests to appropriate microservices.

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for React.
- **Tailwind CSS**: Utility-first CSS framework.
- **Material-UI (MUI)**: React component library for fast and easy web development.

## Features

- **Admin Role**:
  - Create, edit, and delete tasks.
  - Assign tasks to users.
  - Review and accept/decline task submissions.
- **User Role**:
  - View and manage assigned tasks.
  - Submit tasks with completion details.
  - Track task submission status.

## Microservices Architecture

The application is designed with a microservices architecture, separating different functionalities into distinct services. Each service operates independently, improving scalability and maintainability.

- **User Service**: Manages user information and authentication.
- **Task Service**: Handles task creation, editing, and assignment.
- **Submission Service**: Manages task submissions and status tracking.
- **API Gateway**: Routes requests to the appropriate microservice.
- **Eureka Server**: Service registry for managing microservices.

## Setup and Installation

### Prerequisites

- **Java 19 or higher**
- **Node.js and npm**
- **MySQL**

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone [https://github.com/your-repo/task-management-system.git](https://github.com/Venkat-Dhulipalla/Task_Manager_Full_Stack)
    cd task-management-system
    ```

2. **Configure MySQL**:
   - Create databases for each microservice (user_service, task_service, submission_service).
   - Update application properties in each microservice with your MySQL configurations.

3. **Start Eureka Server**:
    ```bash
    cd eureka-server
    ./mvnw spring-boot:run
    ```

4. **Start API Gateway**:
    ```bash
    cd api-gateway
    ./mvnw spring-boot:run
    ```

5. **Start User, Task, and Submission Services**:
    ```bash
    cd user-service
    ./mvnw spring-boot:run

    cd ../task-service
    ./mvnw spring-boot:run

    cd ../submission-service
    ./mvnw spring-boot:run
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the React application**:
    ```bash
    npm start
    ```

## Usage

1. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

2. **Register and Log In**:
   - Create a new account or log in with an existing account.

3. **Admin Actions**:
   - Create, edit, and assign tasks.
   - Review task submissions and update statuses.

4. **User Actions**:
   - View and manage assigned tasks.
   - Submit tasks with completion details.
   - Track task submission status.

## Project Structure

### Backend

- `eureka-server`: Service registry.
- `api-gateway`: API Gateway for routing requests.
- `user-service`: Manages users and authentication.
- `task-service`: Handles tasks creation and management.
- `submission-service`: Manages task submissions.

### Frontend

- `src/components`: React components.
- `src/redux`: Redux store and slices.
- `src/App.js`: Main application file.
- `src/index.js`: Entry point for React.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the Task Management System! If you have any questions or feedback, feel free to open an issue or reach out to the project maintainers.
