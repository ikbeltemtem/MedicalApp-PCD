USE `medical-management` ;
--


-- Structure de la table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `id_doctor` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `age` varchar(100) DEFAULT NULL,
  `adresse` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `speciality` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  
  PRIMARY KEY (`id_doctor`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `doctor`
--

INSERT INTO `doctor` (`firstname`,`lastname`,`email`, `speciality`) VALUES
('Ahmed','Temtem','ahmed@gmail.com', 'généraliste');

INSERT INTO `doctor` (`firstname`,`lastname`,`email`, `speciality`) VALUES
('Ikbel','Temtem','ikbel@gmail.com', 'généraliste');