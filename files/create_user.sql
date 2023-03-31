CREATE USER 'medicalapp'@'localhost' IDENTIFIED BY 'medicalapp';

GRANT ALL PRIVILEGES ON * . * TO 'medicalapp'@'localhost';


ALTER USER 'medicalapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'medicalapp';