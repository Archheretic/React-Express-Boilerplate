DROP SCHEMA IF EXISTS boilerplatedev;
CREATE SCHEMA IF NOT EXISTS boilerplatedev;
USE boilerplatedev;

CREATE TABLE item (
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(12) NOT NULL,
    PRIMARY KEY ( id )
);

INSERT INTO item(name) VALUES ('fishing rod');
INSERT INTO item(name) VALUES ('keyboard');
INSERT INTO item(name) VALUES ('barbell');
INSERT INTO item(name) VALUES ('laptop');
