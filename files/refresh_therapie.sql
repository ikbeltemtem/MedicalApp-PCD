USE `medical-management` ;
-- ----------------------------------------------------
-- -------TABLE: `medical-management`.`appointment`--------
-- -----------------------------------------------------

-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medical-management`.`therapie` (
  `id_t` BIGINT(20) NOT NULL AUTO_INCREMENT,
  
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
 
  `image_url` VARCHAR(255) DEFAULT NULL,
 

  PRIMARY KEY (`id_t`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

INSERT INTO therapie (`id_t`, `name` ,`description` , `image_url` )
VALUES (1,'meso' , 'xxxxxxxx' , 'assets/image/t1.jpg' );

INSERT INTO therapie (`id_t`, `name` ,`description` , `image_url` )
VALUES (2,'gen' , 'yyyyyyy' , 'assets/image/t1.jpg' );