-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2020 at 09:29 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thien`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discript` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `discript`, `status`, `link`, `user_id`, `created_at`, `updated_at`) VALUES
(15, 'thiendfs', 'dsfsd', 'Public', '/storage/774586007.jpg', 2, '2020-07-27 12:35:53', '2020-07-27 12:35:53'),
(16, 'album11', '111', 'Public', '/storage/595890744.jpg', 2, '2020-07-27 13:06:33', '2020-07-27 13:06:34'),
(17, 'dasdsa', 'asdsad', 'Public', '/storage/1697083117.jpg', 2, '2020-07-27 13:23:22', '2020-07-27 13:23:22');

-- --------------------------------------------------------

--
-- Table structure for table `album_photo`
--

CREATE TABLE `album_photo` (
  `id` int(10) UNSIGNED NOT NULL,
  `album_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `album_photo`
--

INSERT INTO `album_photo` (`id`, `album_id`, `photo_id`, `created_at`, `updated_at`) VALUES
(45, 15, 58, NULL, NULL),
(46, 15, 59, NULL, NULL),
(47, 15, 60, NULL, NULL),
(48, 15, 61, NULL, NULL),
(49, 15, 62, NULL, NULL),
(53, 16, 66, NULL, NULL),
(54, 16, 67, NULL, NULL),
(55, 16, 68, NULL, NULL),
(56, 16, 69, NULL, NULL),
(57, 17, 70, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(32, '2014_10_12_000000_create_users_table', 1),
(33, '2014_10_12_100000_create_password_resets_table', 1),
(34, '2019_08_19_000000_create_failed_jobs_table', 1),
(35, '2020_07_12_084915_create_albums_table', 1),
(36, '2020_07_12_102535_create_photos_table', 1),
(37, '2020_07_18_035918_create_photo_user_table', 1),
(38, '2020_07_19_093916_create_album_photo_table', 1),
(39, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(40, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(41, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(42, '2016_06_01_000004_create_oauth_clients_table', 2),
(43, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('1309dd406a46547b78e00cdb470287c3ca1e0af2c1a8348720699e06e57b6479c577118594a06e6b', 4, 1, 'Personal Access Token', '[]', 1, '2020-08-02 07:05:00', '2020-08-02 07:05:00', '2021-08-02 14:05:00'),
('1e660ba03abd7134aa01bd92526fae95f384f5f8bd6cb1cfdc21d489592a8707673237b9e1431580', 4, 1, 'Personal Access Token', '[]', 0, '2020-08-02 07:07:11', '2020-08-02 07:07:11', '2021-08-02 14:07:11'),
('26d6929cc8e82b6da0c821e037a89a1d3f1ab6581db06f2247114913482e445e841249c656dfbe4a', 4, 1, 'Personal Access Token', '[]', 1, '2020-08-02 07:11:00', '2020-08-02 07:11:00', '2021-08-02 14:11:00'),
('48dc3e60690d0e773f8c2e717fe71ca2a4339487f6904a23c89fb04274173cf9e46d281783ccc75e', 4, 1, 'Personal Access Token', '[]', 0, '2020-08-02 08:24:31', '2020-08-02 08:24:31', '2021-08-02 15:24:31'),
('66c9eb9f636323e4275661fa58972f339c831706646944d00ff65a5758ca159902b8029c8ce148fc', 4, 1, 'Personal Access Token', '[]', 0, '2020-08-02 06:50:48', '2020-08-02 06:50:48', '2021-08-02 13:50:48'),
('890df9f0fb032e818d9a01f5f39f33b59211b67a8cf4408567a7473bdbc17b1bbe08a2e53764e042', 4, 1, 'Personal Access Token', '[]', 1, '2020-08-02 07:07:54', '2020-08-02 07:07:54', '2021-08-02 14:07:54'),
('99ab8b21c474afd6461e591403e0a7621b4ad795bc457eb00fa992f740e6121f43480094bb334505', 4, 1, 'Personal Access Token', '[]', 0, '2020-08-02 07:07:13', '2020-08-02 07:07:13', '2021-08-02 14:07:13'),
('d44aea7fdcf80a41cf07606f7872892661f25d92a4275fcf43207c3f76996defd9417cc3dfefb82e', 8, 1, 'Personal Access Token', '[]', 0, '2020-08-02 06:46:21', '2020-08-02 06:46:21', '2021-08-02 13:46:21'),
('fe2ad39a66c3a17a960e304e0c7a57dc780a14cee5446156d7e2df71a6fe72783f5e6a4279a01ab8', 4, 1, 'Personal Access Token', '[]', 0, '2020-08-02 07:07:00', '2020-08-02 07:07:00', '2021-08-02 14:07:00');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'YEOFxkzoc7BdCoXqBahSjrE7eQm5YaS8nscvYM5F', NULL, 'http://localhost', 1, 0, 0, '2020-08-02 06:23:03', '2020-08-02 06:23:03'),
(2, NULL, 'Laravel Password Grant Client', 'pctuWWwkCuYA5CXU2HfOEIfb52iwub31S2wAE7mC', 'users', 'http://localhost', 0, 1, 0, '2020-08-02 06:23:03', '2020-08-02 06:23:03');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-08-02 06:23:03', '2020-08-02 06:23:03');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(10) UNSIGNED NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discript` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `link`, `title`, `discript`, `status`, `created_at`, `updated_at`) VALUES
(3, 'vidu.jpg', 'this is picture 3', 'Những bài văn mẫu tả thầy cô giáo Tiếng Việt 5 bao gồm các bài văn mẫu hay và chọn lọc để bạn đọc cùng tham khảo và có thể lên ý tưởng cho bài viết riêng cá nhân mình', 'Public', NULL, NULL),
(4, 'vidu.jpg', 'this is picture 4', 'Những bài văn mẫu tả thầy cô giáo Tiếng Việt 5 bao gồm các bài văn mẫu hay và chọn lọc để bạn đọc cùng tham khảo và có thể lên ý tưởng cho bài viết riêng cá nhân mình', 'Public', NULL, NULL),
(5, 'vidu.jpg', 'this is picture 5', 'Những bài văn mẫu tả thầy cô giáo Tiếng Việt 5 bao gồm các bài văn mẫu hay và chọn lọc để bạn đọc cùng tham khảo và có thể lên ý tưởng cho bài viết riêng cá nhân mình', 'Public', NULL, NULL),
(6, '1595693967.jpg', 'ffff', '154165456', 'Private', '2020-07-25 09:19:27', '2020-07-25 09:19:27'),
(7, '1595693967.jpg', 'ffff', '154165456', 'Private', '2020-07-25 09:19:27', '2020-07-25 09:19:27'),
(8, '1595694085.jpg', 'thien', 'hhhhh', 'Public', '2020-07-25 09:21:25', '2020-07-25 09:21:25'),
(9, '1595694085.jpg', 'thien', 'hhhhh', 'Public', '2020-07-25 09:21:25', '2020-07-25 09:21:25'),
(10, '1595694483.jpg', 'test', 'thieneknrke', 'Public', '2020-07-25 09:28:03', '2020-07-25 09:28:03'),
(11, '1595694483.jpg', 'test', 'thieneknrke', 'Public', '2020-07-25 09:28:03', '2020-07-25 09:28:03'),
(12, '1595694578.jpg', 'ihihi', '123456', 'Public', '2020-07-25 09:29:38', '2020-07-25 09:29:38'),
(13, '1595694579.jpg', 'ihihi', '123456', 'Public', '2020-07-25 09:29:39', '2020-07-25 09:29:39'),
(19, '1595764146.jpg', 'album 111f', 'day là album 1111', 'Public', '2020-07-26 04:49:06', '2020-07-26 04:49:06'),
(20, '1595764146.jpg', 'album 111f', 'day là album 1111', 'Public', '2020-07-26 04:49:06', '2020-07-26 04:49:06'),
(21, '1595764146.jpg', 'album 111f', 'day là album 1111', 'Public', '2020-07-26 04:49:06', '2020-07-26 04:49:06'),
(22, '1595764638.jpg', 'teeee', 'ffffffffffffffffff', 'Public', '2020-07-26 04:57:18', '2020-07-26 04:57:18'),
(23, '1595764638.jpg', 'teeee', 'ffffffffffffffffff', 'Public', '2020-07-26 04:57:18', '2020-07-26 04:57:18'),
(24, '1595764639.jpg', 'teeee', 'ffffffffffffffffff', 'Public', '2020-07-26 04:57:19', '2020-07-26 04:57:19'),
(25, '1595764752.jpg', 'hohoh', 'fsdfds', 'Public', '2020-07-26 04:59:12', '2020-07-26 04:59:12'),
(26, '1595764752.jpg', 'hohoh', 'fsdfds', 'Public', '2020-07-26 04:59:12', '2020-07-26 04:59:12'),
(27, '1595764947.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:27', '2020-07-26 05:02:27'),
(28, '1595764947.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:27', '2020-07-26 05:02:27'),
(29, '1595764947.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:27', '2020-07-26 05:02:27'),
(30, '1595764947.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:27', '2020-07-26 05:02:27'),
(31, '1595764947.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:27', '2020-07-26 05:02:27'),
(32, '1595764947.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:27', '2020-07-26 05:02:27'),
(33, '1595764948.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:28', '2020-07-26 05:02:28'),
(34, '1595764948.jpg', 'sdjflkds', 'fdsfsdf', 'Public', '2020-07-26 05:02:28', '2020-07-26 05:02:28'),
(35, '1787068312.jpg', 'fsddđ', 'fsdfdsfd', 'Public', '2020-07-26 05:18:40', '2020-07-26 05:18:40'),
(36, '1220770123.jpg', 'fsddđ', 'fsdfdsfd', 'Public', '2020-07-26 05:18:41', '2020-07-26 05:18:41'),
(37, '1627066060.jpg', 'fsddđ', 'fsdfdsfd', 'Public', '2020-07-26 05:18:41', '2020-07-26 05:18:41'),
(38, '1921650690.jpg', 'fsddđ', 'fsdfdsfd', 'Public', '2020-07-26 05:18:41', '2020-07-26 05:18:41'),
(40, '938425373.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:01', '2020-07-26 05:25:01'),
(41, '1495257166.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:01', '2020-07-26 05:25:01'),
(42, '645099962.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:01', '2020-07-26 05:25:01'),
(43, '819623792.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:01', '2020-07-26 05:25:01'),
(44, '1261892819.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:02', '2020-07-26 05:25:02'),
(45, '863987769.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:02', '2020-07-26 05:25:02'),
(46, '1343062652.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:02', '2020-07-26 05:25:02'),
(47, '1026597196.jpg', 'fdsfds', 'fdsfsdf', 'Public', '2020-07-26 05:25:02', '2020-07-26 05:25:02'),
(52, '1595802246.jpg', 'sdffff', 'fdssssssssss', 'Public', '2020-07-26 15:24:06', '2020-07-26 15:24:06'),
(53, '1595802316.jpg', 'sdffff', 'fdssssssssss', 'Public', '2020-07-26 15:25:16', '2020-07-26 15:25:16'),
(54, 'storage/1476382994.png', 'thiennfksd', '13213', 'Public', '2020-07-26 23:44:42', '2020-07-27 01:13:17'),
(55, '/storage/566348332.jpg', 'thien', 'hihhii', 'Public', '2020-07-27 00:05:26', '2020-07-27 00:05:26'),
(56, '/storage/1095525292.jpg', 'ghyth', 'hyhy', 'Public', '2020-07-27 00:34:50', '2020-07-27 12:23:36'),
(57, '/storage/653385996.png', 'dsfsd', 'fsdfsd', 'Public', '2020-07-27 12:24:53', '2020-07-27 12:28:24'),
(58, '/storage/559519114.jpg', 'thiendfs', 'dsfsd', 'Public', '2020-07-27 12:35:53', '2020-07-27 12:35:53'),
(59, '/storage/520020442.jpg', 'thiendfs', 'dsfsd', 'Public', '2020-07-27 12:35:53', '2020-07-27 12:35:53'),
(60, '/storage/1930334354.jpg', 'thiendfs', 'dsfsd', 'Public', '2020-07-27 12:35:53', '2020-07-27 12:35:53'),
(61, '/storage/741315534.jpg', 'thiendfs', 'dsfsd', 'Public', '2020-07-27 12:35:53', '2020-07-27 12:35:53'),
(62, '/storage/774586007.jpg', 'thiendfs', 'dsfsd', 'Public', '2020-07-27 12:35:53', '2020-07-27 12:35:53'),
(63, '/storage/1890786768.jpg', 'fff', 'ffff', 'Public', '2020-07-27 13:03:39', '2020-07-27 13:03:39'),
(64, '/storage/556753587.jpg', 'fff', 'ffff', 'Public', '2020-07-27 13:03:39', '2020-07-27 13:03:39'),
(65, '/storage/2109328777.jpg', 'album sucess', 'ffff', 'Public', '2020-07-27 13:05:31', '2020-07-27 13:05:31'),
(66, '/storage/1235630912.jpg', 'album11', '111', 'Public', '2020-07-27 13:06:33', '2020-07-27 13:06:33'),
(67, '/storage/595890744.jpg', 'album11', '111', 'Public', '2020-07-27 13:06:33', '2020-07-27 13:06:33'),
(68, '/storage/869123840.jpg', 'album11', '111', 'Public', '2020-07-27 13:11:19', '2020-07-27 13:11:19'),
(69, '/storage/354242870.jpg', 'album11', '111', 'Public', '2020-07-27 13:14:31', '2020-07-27 13:14:31'),
(70, '/storage/1697083117.jpg', 'dasdsa', 'asdsad', 'Public', '2020-07-27 13:23:22', '2020-07-27 13:23:22'),
(71, '/storage/1050886437.jpg', 'this is posman', 'hefefwe', 'Public', '2020-08-02 07:57:27', '2020-08-02 07:57:27'),
(73, '/storage/1596095201.jpg', 'this is posman1111', 'hefefwe', 'Public', '2020-08-02 08:32:52', '2020-08-02 08:50:13');

-- --------------------------------------------------------

--
-- Table structure for table `photo_user`
--

CREATE TABLE `photo_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `photo_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photo_user`
--

INSERT INTO `photo_user` (`id`, `user_id`, `photo_id`, `created_at`, `updated_at`) VALUES
(7, 2, 54, NULL, NULL),
(8, 2, 55, NULL, NULL),
(9, 2, 56, NULL, NULL),
(10, 2, 57, NULL, NULL),
(11, 7, 71, NULL, NULL),
(13, 4, 73, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `email`, `firstName`, `lastName`, `avatar`, `password`, `created_at`, `updated_at`) VALUES
(2, 'user2', 'user2@gmail.com', 'thien2', 'nguyen', '/storage/default.jpg', '$2y$10$nClCuDbLNjnT8dnKTwMaGuJgH6UgHyHYX3MTl9.OOf9Zd4tFk9uO.', NULL, NULL),
(4, 'admin', 'user4@gmail.com', 'thien4', 'nguyen', '/storage/default.jpg', '$2y$10$DU3sqBjpB5NWaLElX3CET.tMdvKZMdvCIkkayo.2WKjc5LSjvxznq', NULL, NULL),
(6, 'user6', 'user6@gmail.com', 'thien6', 'nguyen', '/storage/default.jpg', '$2y$10$rL5/E3xz7jZgafYtsljtwOQlVjxyYXUzqu1BsYCRt9Y43gNbNO1ty', NULL, '2020-07-20 19:24:21'),
(7, 'teo11', 'user1@gmail.com', 'thiennguye', 'nguyen', '/storage/1992418779.jpg', '$2y$10$vId3yxlEV5Mu2cEcW9viK.ToRZDmMnv7RG3Q0nayz7SNpANR1LFUC', '2020-07-27 13:47:14', '2020-07-27 14:02:10'),
(8, 'thien111', 'thien222@gmail', 'thien', 'nguyen', '/storage/default.jpg', '$2y$10$hLDzoeFdQh.KxnOjxlCd8OyL7NuR/mgL2OhDjYy8JXroAv61kKlp6', '2020-08-02 06:38:04', '2020-08-02 06:38:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `albums_user_id_foreign` (`user_id`);

--
-- Indexes for table `album_photo`
--
ALTER TABLE `album_photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `album_photo_album_id_foreign` (`album_id`),
  ADD KEY `album_photo_photo_id_foreign` (`photo_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photo_user`
--
ALTER TABLE `photo_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photo_user_user_id_foreign` (`user_id`),
  ADD KEY `photo_user_photo_id_foreign` (`photo_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `album_photo`
--
ALTER TABLE `album_photo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `photo_user`
--
ALTER TABLE `photo_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `album_photo`
--
ALTER TABLE `album_photo`
  ADD CONSTRAINT `album_photo_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `album_photo_photo_id_foreign` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `photo_user`
--
ALTER TABLE `photo_user`
  ADD CONSTRAINT `photo_user_photo_id_foreign` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `photo_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
