CREATE DATABASE "workout-journal"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE IF NOT EXISTS users(
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(80) UNIQUE NOT NULL,
    email       VARCHAR(80) UNIQUE NOT NULL,
    password    VARCHAR(255) NOT NULL,
    created_at  TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
    modified_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
)

CREATE TABLE IF NOT EXISTS workouts(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(100) NOT NULL,
    created_at  TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
    user_id  INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) 
                          ON DELETE CASCADE, 
                          ON UPDATE CASCADE
)

CREATE TABLE IF NOT EXISTS exercises(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    region VARCHAR(80) NOT NULL,
    sets INT NOT NULL,
    reps INT NOT NULL,
    workout_id INT NOT NULL,
    FOREIGN KEY (workout_id) REFERENCES workouts (id)
                             ON DELETE CASCADE, 
                             ON UPDATE CASCADE
)
