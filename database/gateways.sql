-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 23, 2022 at 04:07 PM
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
-- Table structure for table `gateways`
--

CREATE TABLE `gateways` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `symbol` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `method_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gateway_alias` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `min_amount` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `max_amount` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `percent_charge` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fixed_charge` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `processtime` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gateway_parameter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gateways`
--

INSERT INTO `gateways` (`id`, `name`, `currency`, `symbol`, `method_code`, `gateway_alias`, `min_amount`, `max_amount`, `percent_charge`, `fixed_charge`, `processtime`, `rate`, `image`, `gateway_parameter`, `number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Bkash', 'Bdt', '৳', '1000', NULL, '0000', '000', '15', '0', '24', '1', 'https://realearn69.com/assets/images/gateway/629a17595878f1654265689.jpg', NULL, NULL, 'deactive', NULL, '2022-09-16 23:20:33'),
(2, 'Nagad', 'Bdt', '৳', '1000', NULL, '000', '000', '15', '0', '24', '1', 'https://realearn69.com/assets/images/gateway/629a17595878f1654265689.jpg', NULL, NULL, 'deactive', NULL, '2022-09-16 23:20:47'),
(3, 'USDT', 'USD', '৳', '1000', NULL, '00', '000', '15', '0', '24', '100', 'https://realearn69.com/assets/images/gateway/629a17595878f1654265689.jpg', NULL, 'TCAuoBpLTH9Z7stoccxtWBqT1EfrHXxQ7Z', 'deactive', NULL, '2022-09-16 23:21:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gateways`
--
ALTER TABLE `gateways`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gateways`
--
ALTER TABLE `gateways`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
