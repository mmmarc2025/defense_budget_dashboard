CREATE TABLE `comments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL DEFAULT '匿名網友',
	`content` text NOT NULL,
	`ipAddress` varchar(45),
	`honeypot` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comments_id` PRIMARY KEY(`id`)
);
