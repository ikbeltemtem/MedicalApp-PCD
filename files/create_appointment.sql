-- ----SCHEMA------
DROP SCHEMA IF EXISTS `medical-management`;

CREATE SCHEMA `medical-management`;
USE `medical-management` ;
-- ----------------------------------------------------
-- -------TABLE: `medical-management`.`appointment`--------
DROP TABLE IF EXISTS `appointment`;
CREATE TABLE IF NOT EXISTS `appointment` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `daterdv` datetime DEFAULT NULL,
  `heure` time DEFAULT NULL,
  `number` BIGINT DEFAULT NULL,
  `Symptoms` varchar(200) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) default Null,
   `age` BIGINT DEFAULT NULL,
   `email` varchar(200) DEFAULT NULL,
   `therapie` varchar(100) DEFAULT NULL,
   `dispo1` varchar(200) DEFAULT NULL,
   `dispo2` varchar(200) DEFAULT NULL,
   `dispo3` varchar(200) DEFAULT NULL,
  -- `notification` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`))
  -- KEY `Appointment_FK` (`id_patient`)
 ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- -----------------------------------------------------------
-- -------------------INSERT Appointment-------------------

INSERT INTO `appointment` (`id`, `daterdv`, `heure`, `number`, `Symptoms`, `name`,`prenom`,`age`,`email`,`therapie`,`dispo1`,`dispo2`,`dispo3`) VALUES
(2, '2021-02-06 00:00:00', '00:00:00', 312589, 'Allergie', 'hmed','tem',18,'@@@@@@@','ddddd','lundi','lundi','lundi'),
(3, '2021-02-16 00:00:00', '00:00:00', 3, 'aaaaaaa', 'aaaaaaaa','tem',18,'@@@@@@@','ddddd','lundi','lundi','lundi'),
(4, '2021-02-16 00:00:00', '00:00:00', 3, 'aaaaaaa', 'aaaaaaaa','tem',18,'@@@@@@@','ddddd','lundi','lundi','lundi');

-- ----------------------------------------------------------