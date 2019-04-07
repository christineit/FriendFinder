DROP DATABASE IF EXISTS friendfinder_db;
CREATE DATABASE friendfinder_db;
USE friendfinder_db;

CREATE TABLE IF NOT EXISTS profiles (
   name VARCHAR(25),
   photo VARCHAR(255),
   scores VARCHAR(25)
);
