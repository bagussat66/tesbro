-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 07, 2019 at 03:38 PM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `alias` text,
  `password` text,
  `email` text,
  `created_date` date DEFAULT NULL,
  `name` text,
  `birth_date` date DEFAULT NULL,
  `address` text,
  `city` text,
  `gender` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `alias`, `password`, `email`, `created_date`, `name`, `birth_date`, `address`, `city`, `gender`) VALUES
(1, NULL, '$2b$12$q8JG2IukZVC.p.LnEcyGUOvBYRvBL07ilFG5cRIu4QeofhYRMTh.O', 'bagussup66@gmail.com', '2019-05-01', 'Bagus', NULL, NULL, NULL, ''),
(2, NULL, '$2b$12$YorVzF/zNT2cWdBxaQ4auu9xW7VOAq70nshRmjhZgyqpmqcWmWP5i', 'root', '2019-05-03', 'bagus', NULL, NULL, NULL, ''),
(3, NULL, '$2b$12$1Ti.QNlu0ODHt4ymbOZZleJk4AxDdtfHNxbQBJAvxSIQNWhPcsfLe', 'adoh', '2019-05-04', 'adoh', NULL, NULL, NULL, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
