
-- ----SCHEMA------
DROP SCHEMA IF EXISTS `medical-management`;

CREATE SCHEMA `medical-management`;
USE `medical-management` ;
--


-- Structure de la table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `id_doctor` int NOT NULL AUTO_INCREMENT,
  `speciality` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_doctor`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `doctor`
--

INSERT INTO `doctor` (`id_doctor`, `speciality`) VALUES
(2, 'généraliste');

-- --------------------------------------------------------
