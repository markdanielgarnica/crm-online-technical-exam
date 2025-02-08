# crm-online-technical-exam

# Project Setup Guide

This repository contains both the **Angular frontend** and **Laravel backend** for the application. Follow the steps below to set up the project on your local machine.

## Prerequisites
Ensure you have the following installed:
- **PHP 8.x** and **Composer**
- **Node.js 18+** and **npm**
- **MySQL** (or another database supported by Laravel)
- **Angular CLI** (`npm install -g @angular/cli`)
- **Git**

## Clone the Repository
```sh
git clone <repo-url>
```


---

## Backend (Laravel API) Setup
1. **Navigate to the backend folder**
   ```sh
   cd backend
   ```
2. **Install dependencies**
   ```sh
   composer install
   ```
3. **Copy environment file and generate key**
   ```sh
   cp .env.example .env
   php artisan key:generate
   ```
4. **Set up the database** (Update `.env` accordingly)
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=root
   DB_PASSWORD=
   ```
5. **Run database migrations**
   ```sh
   php artisan migrate
   ```
6. **Start the Laravel API**
   ```sh
   php artisan serve
   ```

---

## Frontend (Angular) Setup
1. **Navigate to the frontend folder**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the Angular application**
   ```sh
   ng serve 
   ```

---

## Testing the Setup
- **Backend API** should be accessible at `http://127.0.0.1:8000/api`
- **Frontend** should be running at `http://localhost:4200`
- Test API calls from the Angular frontend to ensure proper connectivity with Laravel.

---

