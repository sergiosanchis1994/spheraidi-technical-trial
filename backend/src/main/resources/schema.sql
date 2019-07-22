drop table if exists users;

create table user(
    username varchar(255) not null,
    password varchar(255) not null,
    session_id varchar(255),
    active int,
    PRIMARY KEY(username)
);