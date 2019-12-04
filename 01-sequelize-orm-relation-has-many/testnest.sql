-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Хост: database
-- Время создания: Дек 04 2019 г., 12:45
-- Версия сервера: 5.7.28
-- Версия PHP: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testnest`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Cats`
--

CREATE TABLE `Cats` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` char(15) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `Cats`
--

INSERT INTO `Cats` (`id`, `userId`, `name`, `age`, `breed`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Frank', 2, 'one', '2019-12-04 12:32:20', '2019-12-04 12:32:20'),
(2, 2, 'Lisa', 2, '11', '2019-12-04 12:32:38', '2019-12-04 12:32:38'),
(3, 1, 'Tom', 5, 'two', '2019-12-04 12:32:45', '2019-12-04 12:32:45');

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` char(15) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id`, `name`, `age`, `createdAt`, `updatedAt`) VALUES
(1, 'Dmitry', 25, '2019-12-04 12:33:40', '2019-12-04 12:33:40'),
(2, 'Valera', 20, '2019-12-04 12:33:51', '2019-12-04 12:33:51');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Cats`
--
ALTER TABLE `Cats`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Cats`
--
ALTER TABLE `Cats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
