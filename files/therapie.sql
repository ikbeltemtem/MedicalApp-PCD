-- ----SCHEMA------
DROP SCHEMA IF EXISTS `medical-management`;

CREATE SCHEMA `medical-management`;
USE `medical-management` ;
-- ----------------------------------------------------
-- -------TABLE: `medical-management`.`appointment`--------
-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `medical-management`.`therapie` (
  `id_t` BIGINT(20) NOT NULL AUTO_INCREMENT,
  
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
 
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
 
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,

  PRIMARY KEY (`id_t`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

INSERT INTO therapie (`id_t`, `name` ,`description` , `image_url` , `active` , `date_created`)
VALUES (1, 'meso' , 'xxxxxxxx' , 'assets/image/t1.jpg' , 1 , NOW());

