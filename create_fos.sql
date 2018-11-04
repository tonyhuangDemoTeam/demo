create table account (
	id int not null,
	customer_number int not null,
	account_number int not null,
	account_name varchar(60),
	create_date date,
	constraint pk_account primary key (id)
);

create table bond_deal (
	deal_number int not null,
	customer_number int,
	account_number int,
	bond_issue_code varchar(20),
	transaction_type char(1),
	bond_currency varchar(3),
	bond_price numeric(10,2),
	bond_quantity numeric(15,2),
	consideration_amount numeric(15,2),
	trade_date date,
	value_date date,
	constraint pk_bond_deal primary key (deal_number)
);

create table bond_issue (
	bond_issue_code varchar(20) not null,
	bond_issue_name varchar(200),
	bond_country varchar(3),
	issuer_code varchar(30),
	issue_date date,
	bond_price numeric(10,2),
	bond_currency varchar(3),
	bond_maturity_date date,
	bond_yield numeric(13,9),
	coupon_rate numeric(9,5),
	risk_level int,
	constraint pk_bond_issue primary key (bond_issue_code)
);

create table bond_position (
    id int not null,
	customer_number int not null,
	account_number int not null,
	bond_issue_code varchar(20) not null,
	bond_currency varchar(3),
	accrued_interest numeric(15,4),
	average_price numeric(10,2),
	holding_quantity numeric(15,2),
	consideration_amount numeric(15,2),
	constraint pk_bond_position primary key (id)
);

create table customer (
	customer_number int not null,
	customer_name varchar(60),
	type char(1),
	age int,
	home_country varchar(3),
	constraint pk_customer primary key (customer_number)
);

create table issuer (
	issuer_code varchar(20) not null,
	issuer_name varchar(200),
	domicile_country varchar(3),
	industry_sector varchar(20),
	constraint pk_issuer primary key (issuer_code)
);

create table relationship_manager (
	rm_code varchar(6) not null,
	rm_name varchar(60),
	phone_number varchar(60),
	email_address varchar(60),
	home_country varchar(3),
	constraint pk_relationship_manager primary key (rm_code)
);

create table rm_customer_map (
    id int not null,
	rm_code varchar(6) not null,
	customer_number int not null,
	constraint pk_rm_customer_map primary key (id)
);

create table rm_team (
	team_code varchar(6) not null,
	team_name varchar(60),
	booking_entity varchar(3),
	constraint pk_rm_team primary key (team_code)
);

create table share_deal (
	deal_number int not null,
	customer_number int not null,
	account_number int not null,
	share_issue_code varchar(20),
	transaction_type char(1),
	share_currency varchar(3),
	share_price numeric(10,2),
	share_quantity numeric(15,2),
	consideration_amount numeric(15,2),
	trade_date date,
	value_date date,
	constraint pk_share_deal primary key (deal_number)
);

create table share_issue (
	share_issue_code varchar(20) NOT NULL,
	share_issue_name varchar(200),
	share_country varchar(3),
	issuer_code varchar(30),
	share_price numeric(10,2),
	share_currency varchar(3),
	risk_level int,
	constraint pk_share_issue primary key (share_issue_code)
);

create table share_position (
    id int not null,
	customer_number int not null,
	account_number int not null,
	share_issue_code varchar(20) not null,
	share_currency varchar(3),
	average_price numeric(10,2),
	holding_quantity numeric(15,2),
	consideration_amount numeric(15,2),
	constraint pk_share_position primary key (id)
);

create table team_rm_map (
    id int not null,
	team_code varchar(6) not null,
	rm_code varchar(6) not null,
	constraint pk_team_rm_map primary key (id)
);

create table action (
	id int not null,
	type varchar(1),
	rm_code varchar(6),
	remarks varchar(256),
	constraint pk_actions primary key (id)
);

create table rate (
	ccy char(3) not null,
	rate numeric(10,4),
	constraint pk_rate primary key (ccy)
);

create table fund_deal (
    id int not null,
	deal_number int not null,
	customer_number int not null,
	account_number int not null,
	fund_issue_code varchar(20),
	transaction_type char(1),
	fund_currency varchar(3),
	fund_price numeric(10,2),
	fund_quantity numeric(15,2),
	consideration_amount numeric(15,2),
	trade_date date,
	value_date date,
	constraint pk_fund_deal primary key (id)
);

create table fund_issue (
	fund_issue_code varchar(20) NOT NULL,
	fund_issue_name varchar(200),
	fund_country varchar(3),
	fund_code varchar(30),
	fund_price numeric(10,2),
	fund_currency varchar(3),
	risk_level int,
	constraint pk_fund_issue primary key (fund_issue_code)
);

create table fund_position (
    id int not null,
	customer_number int not null,
	account_number int not null,
	fund_issue_code varchar(20) not null,
	fund_currency varchar(3),
	average_price numeric(10,2),
	holding_quantity numeric(15,2),
	consideration_amount numeric(15,2),
	constraint pk_fund_position primary key (id)
);

create table deposit_position (
    id int not null,
	customer_number int not null,
	account_number int not null,
	currency varchar(3),
	holding_quantity numeric(15,2),
	constraint pk_deposit_position primary key (id)
);

create sequence seq_share_deal increment 1 start 1 minvalue 1 maxvalue 99999999 cache 1;
create sequence seq_share_position increment 1 start 1 minvalue 1 maxvalue 99999999 cache 1;