-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-04-2024 a las 03:27:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `redsena`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publications`
--

CREATE TABLE `publications` (
  `idPublication` varchar(225) NOT NULL,
  `id` varchar(225) NOT NULL,
  `title` varchar(225) NOT NULL,
  `message` varchar(225) NOT NULL,
  `file` varchar(225) NOT NULL,
  `color` varchar(225) NOT NULL,
  `date` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publications`
--

INSERT INTO `publications` (`idPublication`, `id`, `title`, `message`, `file`, `color`, `date`) VALUES
('0', 'CC.1007550230', 'dsfsadf', 'sdfsdfsdf', 'https://robohash.org/img0', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('1', 'CC.1007550230', 'fdsf', 'sdfsdfsd', 'https://robohash.org/img1', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('2', 'CC.1007550230', 'juan camilo', 'hola como estan', 'https://robohash.org/img2', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('3', 'CC.1007550230', 'dasdf', 'asdfasdfsad', 'https://robohash.org/img3', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('4', 'CC.1007550230', 'wertwert', 'wertwertwert', 'https://robohash.org/img4', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('5', 'CC.1007550230', 'dasdfdfs', 'asdfasdfsadsdafasdfsdf', 'https://robohash.org/img5', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('6', 'CC.1007550230', 'sdfgsdf', 'sdfgsdfg', 'https://robohash.org/img6', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('7', 'CC.1007550230', 'dfg', 'dfgdfgdfg', 'https://robohash.org/img7', '#563d7c', 'Miércoles 3 de Abril del 2024'),
('8', 'CC.1007550230', 'dsfgdfgs', 'dfgsdfgsdfg', 'https://robohash.org/img8', '#563d7c', 'Miércoles 3 de Abril del 2024');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(13) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(20) NOT NULL,
  `date` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `date`) VALUES
('CC.1007550230', 'jaja@gmail.com', '12121212$1', 'Miércoles.3/Abril/2024'),
('CC.123456', 'asdfasd@gmail.com', 'juan12345$', 'Miércoles 3 de Abril del 2024'),
('CC.2323232323', 'juankamilohuertas2021@gmail.com', 'juanKamiloHuertas$', 'Miércoles.3/Abril/2024'),
('CC.43563456', 'juankamilohuertas2021@gmail.com', '12121212$1q', 'Martes.2/Abril/2024');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`idPublication`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
