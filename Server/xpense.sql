CREATE TABLE goal (
	id INTEGER NOT NULL, 
	name VARCHAR(80) NOT NULL, 
	target INTEGER NOT NULL, 
	saved INTEGER, 
	PRIMARY KEY (id)
);
INSERT INTO goal VALUES(1,'Daughter''s College Funds',230000,9008);
INSERT INTO goal VALUES(2,'New Home Budget',3000000,108000);
INSERT INTO goal VALUES(5,'2025 Funds 4 Fun',3000,1100);
CREATE TABLE IF NOT EXISTS "transaction" (
	id INTEGER NOT NULL, 
	category VARCHAR(80) NOT NULL, 
	date DATE NOT NULL, 
	description VARCHAR(255) NOT NULL, 
	amount FLOAT NOT NULL, 
	PRIMARY KEY (id)
);
INSERT INTO "transaction" VALUES(1,'Debt','2025-01-28','School Loan',14092.45000000000072);
INSERT INTO "transaction" VALUES(2,'Personal Care','2025-01-31','Shampoo',12.0);
CREATE TABLE balance (
	id INTEGER NOT NULL, 
	cash_on_hand FLOAT NOT NULL, 
	bank_account_balance FLOAT NOT NULL, 
	savings FLOAT NOT NULL, 
	PRIMARY KEY (id)
);
INSERT INTO balance VALUES(1,900.0,1900.0,11900.0);
CREATE TABLE alembic_version (
	version_num VARCHAR(32) NOT NULL, 
	CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num)
);
INSERT INTO alembic_version VALUES('e2b2e4513c5b');
