-- Active: 1656871397100@@127.0.0.1@3306
DROP DATABASE IF EXISTS OrganizadorDeTarefas;

CREATE DATABASE OrganizadorDeTarefas;

USE OrganizadorDeTarefas;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
) ENGINE=INNODB;

CREATE TABLE tasks (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    status_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
    FOREIGN KEY (status_id)
        REFERENCES statusTask (id)
        ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE statusTask (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    status_name VARCHAR(80) NOT NULL
) ENGINE=INNODB;

INSERT INTO statusTask (status_name)
    VALUES ('pendente'), ('em andamento'), ('pronto');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'docker';
flush privileges;
