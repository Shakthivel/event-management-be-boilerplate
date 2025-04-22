# Event Management System

This is an Event Management System built with **NodeJs** and **ExpressJs** The system allows users to view upcoming matches, book tickets, cancel bookings, and manage match details (for admins).

## Features

- View upcoming Events.
- User Registration & Login (JWT Auth)
- Create, Read, Update, Delete Events
- Admin can manage all events
- View ticket availability and prices (optional)
- Basic role-based access control

## Technologies Used

- **Backend**: Node.js, Sequelize, MySQL in docker

## Prerequisites

### 1. **Docker MySQL Container**

Ensure that you have **Docker** installed on your machine.

To set up MySQL with Docker, run the following command:

```bash
docker run --name mysql-cont -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql
```

### 2. Create Database

Once the MySQL container is running, create a database for your application.

1. Enter the container:

```bash
docker exec -it mysql-cont bash
```

2. Access MySQL as the root user:

```bash
mysql -u root -p
```

    when prompted for password, enter**root**

3. Create the `event_management_db` database:

```sql
CREATE DATABASE event_management_db;
```

### 3. Setting Up Environment Variables

Create `.env` file in the root directory of your project and paste the following content.

```bash
touch .env # to create .env fileDB_HOST=localhost

DB_USER=root
DB_PASSWORD=root
DB_NAME=event_management_db
DB_PORT=3306
DB_DIALECT=mysql

JWT_SECRET=<YOUR_SECRET> # Your secret to sign and verify JWT token
```

### 3. Clone the Repository

Clone your backend repository into a local folder:

```bash
git clone <url>
cd Event-Management
```

### 4. Install Dependencies

Once inside your project directory, install the necessary packages:

```bash
npm install
```

### 5. Setup Sequelize Migrations

You will need to set up the database tables using Sequelize migrations.

Run the following command to create the tables:

```bash
npx sequelize-cli db:migrate --config './src/configs/config.json' --migrations-path './src/migrations'
```

### 6. Seed the Database with Event Data

To seed the `Event` table with some initial data, run the following command:

```bash
npx sequelize-cli db:seed:all --config './src/configs/config.json' --seeders-path './src/seeders'
```

### 7. Start the Development Server

```bash
npm run start
```

This will start the backend server and it will be available on `http://localhost:PORT` (check the terminal for the port number by default it will start in `5555`).
