-- Active: 1656871397100@@127.0.0.1@3306
DROP DATABASE IF EXISTS OrganizadorDeTarefas;

CREATE DATABASE OrganizadorDeTarefas;

USE OrganizadorDeTarefas;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
) ENGINE=INNODB;

CREATE TABLE tasks (
    id INT PRIMARY KEY NOT NULL auto_increment,
    user_id INT NOT NULL,
    title VARCHAR(80) NOT NULL,
    status BIT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
) ENGINE=INNODB;

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'docker';
flush privileges;
