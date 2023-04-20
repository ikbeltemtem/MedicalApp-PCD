USE `medical-management` ;
--


-- Structure de la table `doctor`
--

DROP TABLE IF EXISTS `secretaire`;
CREATE TABLE IF NOT EXISTS `secretaire` (
  `ids` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `age` varchar(100) DEFAULT NULL,
  `adresse` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  
  `password` varchar(100) DEFAULT NULL,
  
  PRIMARY KEY (`ids`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `doctor`
--

INSERT INTO `secretaire` (`firstname`,`lastname`,`email`) VALUES
('Ahmed','Temtem','ahmed@gmail.com');

INSERT INTO `secretaire` (`firstname`,`lastname`,`email`) VALUES
('Ikbel','Temtem','ikbel@gmail.com');

-- --------------------------------------------------------