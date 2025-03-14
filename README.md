# Workout journal API 

A backend API for a Workout Journal application that allows users to create workouts. 
Built with Node.js and Express.js.

## Features

- User authentication (registration and login)
- User profile management
- Workout tracking with CRUD operations
- Optional exercise tracking for each workout

## API Endpoints

### Authentication

- `POST /api/v1/register` - Register a new user
- `POST /api/v1/login` - Login a user

### Users

- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `GET /api/v1/users/:username` - Get user by username
- `GET /api/v1/users/profile` - Get current user profile (requires JWT)

### Workouts

- `GET /api/v1/users/:id/workouts` - Get a user's workouts
- `POST /api/v1/users/:id/workouts` - Add a workout to a user
- `GET /api/v1/workouts` - Get all workouts
- `GET /api/v1/workouts/:id` - Get workout by ID
- `PUT /api/v1/workouts/:id` - Edit a workout
- `DELETE /api/v1/workouts/:id` - Delete a workout

### Exercises 

- `POST /api/v1/workouts/:id/exercises` - Add exercise to a workout

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure environment variables
4. Start the server with `npm start`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=workout-journal
DB_UNAME=postgres
DB_PW=postgres

JWT_SECRET_KEY=secret
JWT_TOKEN_EXPIRES=7d
JWT_COOKIE_EXPIRES=7
```

## Technologies

- Node.js
- Express.js
- PostgreSQL
- Argon2 for password hashing
- JWT for authentication
- Express Validator for input validation
- Cookie Parser for handling cookies

## Scripts

- `npm start` - Start the development server with nodemon

## To do 
- `PUT /api/v1/workouts/:workout_id/exercises/:id` - Edit a workout's exercise (TODO)
- `DELETE /api/v1/workouts/exercises/:id` - Delete a workout's exercise (TODO)
- Validators for ep's that are missing them
- GUI
- Tracking workout functionality (Each workout update exercise rep, set, weight values for workout)
- Progress visualization

## License

ISC
