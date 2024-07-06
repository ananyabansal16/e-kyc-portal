-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (arm64)
--
-- Host: localhost    Database: ekyc
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `addl1` varchar(255) DEFAULT NULL,
  `caddl1` varchar(255) DEFAULT NULL,
  `ccity` varchar(255) DEFAULT NULL,
  `ccountry` varchar(255) DEFAULT NULL,
  `cdistrict` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `cpincode` int DEFAULT NULL,
  `cstate` varchar(255) DEFAULT NULL,
  `ctype` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `mname` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `prefix` varchar(255) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `rfname` varchar(255) DEFAULT NULL,
  `rlname` varchar(255) DEFAULT NULL,
  `rmname` varchar(255) DEFAULT NULL,
  `rprefix` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `ekyc_code` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'BC-81, Third Floor, Shalimar Bagh West','Hostel-Q, Thapar Institute of Engineering and Technology, Bhadson Road, Prem Nagar','Patiala','India','Adarsh Nagar','New Delhi','India',147004,'Punjab','IND','Shalimar Bagh','16/09/2003','ananya.bansal2003@gmail.com','Ananya','','Bansal','-','7703977909','ananya1609',110088,'Ms.','Father','Puneet Bansal','Bansal','-','Mr.','Delhi','Ananya_1609','e9928c63-642b-4f1e-b627-98b948c5308a'),(2,'BC-81, Third Floor, Shalimar Bagh West','Hostel-Q, Thapar Institute of Engineering and Technology, Bhadson Road, Prem Nagar','Patiala','India','Adarsh Nagar','New Delhi','India',147004,'Punjab','IND','Shalimar Bagh','16/09/2003','ananya.bansal2003@gmail.com','Ananya','','Bansal','-','7703977909','',110088,'Ms.','Father','Puneet Bansal','Bansal','-','Mr.','Delhi','','a226e957-831a-4290-8ee8-62a94a8eeabb'),(3,'House-123','House-34','Hyderabad','India','Hyderabad','Bengaluru','India',124435,'Karnataka','IND','Bengaluru City','09-12-1992','test@test.com','Test','','Test','Test','8989898976','',10299,'Mr','Father','James','Gage','Hale','Mr.','Karnataka','','606a8116-2eec-4324-80d6-08ec969a999b');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-03  0:13:34
