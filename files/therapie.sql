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
 `ratefive` bigint(20) ,
 `ratefour` bigint(20) ,
 `ratethree` bigint(20) ,
 `ratetwo` bigint(20) ,
 `rateone` bigint(20) ,
 `star` bigint(20) ,
 `rateall` bigint(20) ,

  PRIMARY KEY (`id_t`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

INSERT INTO therapie (`id_t`, `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES (1, 'meso' , 'xxxxxxxx' , 'assets/image/t1.jpg' ,0,0,0,0,0,0,0);

