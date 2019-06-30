drop table if exists users;

create table user(
    username varchar(255) not null,
    password varchar(255) not null,
    active int,
    PRIMARY KEY(username)
);