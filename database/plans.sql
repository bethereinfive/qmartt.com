-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 23, 2022 at 04:11 PM
-- Server version: 10.3.36-MariaDB-log-cll-lve
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `msroxywz_dmshope`
--

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `totalorder` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comission_rate` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_balance` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end_balance` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name`, `totalorder`, `comission_rate`, `start_balance`, `end_balance`, `status`, `created_at`, `updated_at`) VALUES
(1, 'VIP0', '10', '0.28', '300', '999', 'active', NULL, '2022-09-01 07:56:09'),
(2, 'VIP1', '15', '0.2', '1000', '4999', 'active', NULL, '2022-09-01 07:56:41'),
(3, 'VIP2', '20', '0.175', '5000', '19999', 'active', NULL, '2022-09-01 07:58:07'),
(5, 'VIP3', '25', '0.152', '20000', '49999', 'active', '2022-08-30 19:49:30', '2022-09-01 07:58:38'),
(6, 'VIP4', '30', '0.1333', '50000', '200000', 'active', '2022-08-30 19:50:20', '2022-09-01 08:05:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
