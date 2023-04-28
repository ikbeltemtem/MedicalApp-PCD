-- ----SCHEMA------

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

INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Acupuncture' , 'L''acupuncture peut être utilisée pour traiter une grande variété de troubles, notamment les douleurs chroniques, les troubles digestifs, les problèmes respiratoires, les troubles du sommeil, les troubles anxieux et dépressifs, et bien d''autres encore.' , 'actu.png' ,0,0,0,0,0,0,0);
INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Chiropractie' , 'Les techniques chiropratiques consistent généralement en des manipulations douces et précises des articulations, des muscles et des tissus mous, ainsi que des exercices et des conseils pour améliorer la posture et la santé globale du corps.' , 'chi.jpg' ,0,0,0,0,0,0,0);
INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Podologie' , 'Les podologues sont formés pour réaliser des examens cliniques et des bilans podologiques complets, afin d''évaluer la santé du pied et d''identifier les troubles éventuels.' , 'pod.jpg' ,0,0,0,0,0,0,0);
INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Phytothérapie' , 'La phytothérapie est une médecine alternative qui utilise les extraits de plantes pour prévenir et traiter les maladies. Elle repose sur l''utilisation de substances naturelles contenues dans les plantes.' , 'phytothérapie.jpg' ,0,0,0,0,0,0,0);
INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Diététique' , 'Les diététiciens sont des professionnels de la santé qui conseillent les individus sur leur régime alimentaire en fonction de leurs besoins et de leurs objectifs de santé.' , 'nut.jpg' ,0,0,0,0,0,0,0);
/* INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Sophrologie' , 'La sophrologie est une méthode de développement personnel qui vise à aider les individus à trouver un équilibre entre leur corps et leur esprit en utilisant des techniques de relaxation, de respiration et de visualisation.' , 'sophrologie.jpg' ,0,0,0,0,0,0,0);
INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Hypnose' , 'L''hypnose peut être utilisée pour traiter une variété de problèmes de santé mentale et physique, tels que l''anxiété, la dépression, les phobies, les troubles du sommeil, les douleurs chroniques et les addictions.' , 'hypnose.jpg' ,0,0,0,0,0,0,0);
INSERT INTO therapie ( `name` ,`description` , `image_url` , `ratefive` , `ratefour`,`ratethree`,`ratetwo`,`rateone`,`star`,`rateall`)
VALUES ('Kinésiologie' , ' La pratique de la kinésiologie repose sur le principe que le corps est capable de s''autoréguler et de guérir lui-même, et que l''énergie et l''information circulent dans le corps à travers un système complexe de méridiens et de points d''acupuncture.' , 'kinésiologie.jpg' ,0,0,0,0,0,0,0);*/

