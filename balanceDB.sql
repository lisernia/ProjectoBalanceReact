 


# Volcado de tabla Operaciones
# ------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS `balance`;
USE `balance`;

DROP TABLE IF EXISTS `operacions`;

CREATE TABLE `operacions` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `concepto` varchar(45) DEFAULT NULL,
  `monto` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

 