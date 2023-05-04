CREATE DATABASE run_log;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE runs (
    run_id SERIAL PRIMARY KEY,
    activity_date DATE DEFAULT CURRENT_DATE,
    distance DECIMAL,
    sec_per_mile INTEGER,
    avg_hr INTEGER,
    user_id INTEGER,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);