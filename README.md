docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123 mysql:latest

create schema `stream`;
use `stream`;
create table person( id int not null primary key auto_increment, name varchar(100) not null, birthdate date);