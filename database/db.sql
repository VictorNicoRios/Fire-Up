--create database--
CREATE DATABASE Fire-Up-DB;

--use db--
USE Fire-Up-DB;

--create tables--
CREATE TABLE customers(
  customer_ID INT(5) NOT NULL AUTO_INCREMENT,
  customer_FIRST_NAME VARCHAR(10) NOT NULL,
  customer_LAST_NAME VARCHAR(10) NULL,
  customer_ADRESS VARCHAR(20) NULL,
  customer_PASSWORD VARCHAR(20) NULL,
  customer_SIZE FLOAT(3) NULL,
  customer_WEIGHT FLOAT(3) NULL,
  PRIMARY KEY (customer_ID)
);

--search in tables--
SELECT * FROM --table-- (customers)
;
--insert into table--
INSERT INTO customers SET {CUSTOMER_FIRST_NAME: 'MANU', CUSTOMER_ADRESS: 'BLA', CUSTOMER_PASSWORD:'ASDFASDFASF'};
