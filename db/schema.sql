DROP DATABASE IF EXISTS burgerDB;
CREATE Database burgerDB;
USE burgerDB;
CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean,
    PRIMARY KEY (id) 
);
  