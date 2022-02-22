CREATE SCHEMA `pruebasdb` DEFAULT CHARACTER SET utf8mb4 ;
use pruebasdb;

SELECT * FROM pruebasdb.tasks;

show tables;

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NULL,
  `description` varchar(128) NOT NULL,
  `state` tinyint DEFAULT NULL,
  `createdAt` timestamp DEFAULT NULL,
  `updatedAt` timestamp DEFAULT NULL,
  PRIMARY KEY (`id`)
 ); 