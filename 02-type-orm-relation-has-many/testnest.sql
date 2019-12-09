-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Хост: database
-- Время создания: Дек 09 2019 г., 14:19
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
-- Структура таблицы `cats`
--

CREATE TABLE `cats` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `breed` varchar(255) NOT NULL,
  `name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `cats`
--

INSERT INTO `cats` (`id`, `userId`, `age`, `breed`, `name`) VALUES
(1, 1, 2, 'one', 'Lisa'),
(2, 2, 2, '11', 'Felix'),
(3, 1, 5, 'two', 'Tom'),
(6, 6, 1, 'One', 'Barsik'),
(22, 17, 1, 'One', 'Anka'),
(23, 17, 2, 'One', 'Pune'),
(24, 17, 4, 'One', 'Teddy'),
(25, 20, 1, 'One', 'Anka 3'),
(26, 20, 2, 'One', 'Pune 3'),
(27, 20, 4, 'One', 'Teddy 3'),
(28, 23, 1, 'One', 'Anka 3'),
(29, 23, 2, 'One', 'Pune 3'),
(30, 23, 4, 'One', 'Teddy 3');

-- --------------------------------------------------------

--
-- Структура таблицы `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `filename` varchar(255) NOT NULL,
  `views` int(11) NOT NULL,
  `isPublished` tinyint(4) NOT NULL,
  `catId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `photos`
--

INSERT INTO `photos` (`id`, `name`, `description`, `filename`, `views`, `isPublished`, `catId`) VALUES
(1, 'Tree', 'My favorite tree', 'tree.png', 10, 1, 2),
(2, 'Flower', 'My favorite flower', 'flower.jpeg', 500, 1, 2),
(3, 'Lisa', 'My favorite cat', 'Lisa.png', 100500, 1, 1),
(4, 'Lisa', '125uitjyuji6uy7ji867ijuy8', 'Lisa.png', 1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `age`, `name`, `active`) VALUES
(1, 25, 'Dmitry', 1),
(2, 20, 'Frank', 1),
(6, 25, 'Yra', 1),
(16, 23, 'Sergey', 1),
(17, 23, 'Sergey', 1),
(18, 23, 'Sergey', 1),
(19, 22, 'Sergey', 1),
(20, 23, 'Sergey 3', 1),
(21, 23, 'Sergey 1', 1),
(22, 23, 'Sergey 3', 1),
(23, 23, 'Sergey 3', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cats`
--
ALTER TABLE `cats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_efcda1f87e69d92bf9a32eadf0a` (`userId`);

--
-- Индексы таблицы `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_b17a3ff23b206eceec5a18349ca` (`catId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cats`
--
ALTER TABLE `cats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `cats`
--
ALTER TABLE `cats`
  ADD CONSTRAINT `FK_efcda1f87e69d92bf9a32eadf0a` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `FK_b17a3ff23b206eceec5a18349ca` FOREIGN KEY (`catId`) REFERENCES `cats` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
