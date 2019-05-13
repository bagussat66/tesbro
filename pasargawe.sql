-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 13, 2019 at 04:53 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pasargawe`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Desain'),
(2, 'Marketing'),
(3, 'Tulisan'),
(4, 'Video'),
(5, 'Audio'),
(6, 'IT'),
(7, 'Bisnis'),
(8, 'Edukasi'),
(9, 'Gaming'),
(10, 'Lainnya');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(11) NOT NULL,
  `title` text,
  `tag` text,
  `price` int(11) DEFAULT NULL,
  `delivery` int(11) DEFAULT NULL,
  `description` text,
  `instruction` text,
  `category_id` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `cover_picture` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `title`, `tag`, `price`, `delivery`, `description`, `instruction`, `category_id`, `created_date`, `user_id`, `cover_picture`) VALUES
(1, 'te', 'te', 10, 1, 'te', 't', 2, NULL, NULL, NULL),
(2, 'Saya bersedia sedepoll', 'sedep', 100000, 10, 'henaees', 'hena', 4, '2019-05-12 00:00:00', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `alias` text,
  `password` text,
  `email` text,
  `created_date` datetime DEFAULT NULL,
  `name` text,
  `birth_date` datetime DEFAULT NULL,
  `address` text,
  `city` text,
  `gender` text,
  `phone` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `alias`, `password`, `email`, `created_date`, `name`, `birth_date`, `address`, `city`, `gender`, `phone`) VALUES
(1, NULL, '$2b$12$q8JG2IukZVC.p.LnEcyGUOvBYRvBL07ilFG5cRIu4QeofhYRMTh.O', 'bagussup66@gmail.com', '2019-05-01 00:00:00', 'Bagus', NULL, NULL, NULL, '', NULL),
(2, 'Setan', '$2b$12$YorVzF/zNT2cWdBxaQ4auu9xW7VOAq70nshRmjhZgyqpmqcWmWP5i', 'root', '2019-05-03 00:00:00', 'Bagus Satrio Utomo', '2019-05-29 00:00:00', 'anu', 'dacok', 'Laki-laki', '01283012'),
(3, NULL, '$2b$12$1Ti.QNlu0ODHt4ymbOZZleJk4AxDdtfHNxbQBJAvxSIQNWhPcsfLe', 'adoh', '2019-05-04 00:00:00', 'adoh', NULL, NULL, NULL, '', NULL),
(4, 'ndut', '$2b$12$X2QpqVzDplsDA5Cc6vAa9ubZaHAZmrZhA4ddR/esukXVXaWg/gmvy', 'ndut', '2019-05-09 00:00:00', 'ndut', '0000-00-00 00:00:00', '', '', '', ''),
(5, 'entot', '$2b$12$jsvWtMqVK1t2dX3hlgbbd./mNvqdKBrt..Ytd6rQj9vhMdUy3r6qi', 'entot', '2019-05-11 00:00:00', 'entot', NULL, NULL, NULL, NULL, NULL),
(6, 'kopet', '$2b$12$JkEZe4rd/r/NrVjY4vM6t.JZOW42BJ1CjuJlzsPiyCJnmjSdvzkfC', 'kopet', '2019-05-12 00:00:00', 'kopet', NULL, NULL, NULL, NULL, NULL),
(7, 'ndes', '$2b$12$L08dzGL9ydOJ.KVT6qyT4Ol5ncRKuc8UbpEtIBjMsyjig7U4uJxhK', 'ndes', '2019-05-12 00:00:00', 'ndes', NULL, NULL, NULL, NULL, NULL),
(8, 'apah', '$2b$12$XYmzag/B1xyoLPw00IbbKeZ6Ocp52Fk3tI.Kpu/HSUvxrTG96caFe', 'ndes', '2019-05-12 00:00:00', 'apah', NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
