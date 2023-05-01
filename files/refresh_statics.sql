USE `medical-management` ;
-- ----------------------------------------------------
-- -------TABLE: `medical-management`.`appointment`--------
-- -----------------------------------------------------

-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medical-management`.`stat` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  
  `nb` VARCHAR(255) DEFAULT NULL,
  `amount` bigint(20) DEFAULT NULL,
 
  `color` VARCHAR(255) DEFAULT NULL,
 

  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

INSERT INTO stat (`id`, `nb` ,`amount` , `color` )
VALUES (1,'nombre de patient' , 50 , 'rgba(202, 246, 253, 0.8)' );

INSERT INTO stat (`id`, `nb` ,`amount` , `color` )
VALUES (2,'nombre de rendez-vous' , 60 , 'rgba(202, 253, 205, 0.8)' );
INSERT INTO stat (`id`, `nb` ,`amount` , `color` )
VALUES (3,'nombre de rendez-vous faites' , 40 , 'rgba(255, 222, 130, 0.61)' );

INSERT INTO stat (`id`, `nb` ,`amount` , `color` )
VALUES (4,'nombre de rendez-vous en attente' , 10 , 'rgba(252, 201, 205, 0.82)' );

INSERT INTO stat (`id`, `nb` ,`amount` , `color` )
VALUES (5,'nombre de rendez-vous pas arrivé' , 10 , 'rgba(250, 201, 252, 0.82)' );