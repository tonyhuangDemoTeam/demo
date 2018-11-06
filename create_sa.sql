create table users(id varchar(32) not null, name varchar(32) not null, pwd varchar(64) not null,fail_counter int not null, status char(1) not null, remark varchar(256), create_time timestamp, create_by varchar(32), update_time timestamp, update_by varchar(32), constraint pk_users primary key (id));

create table roles(id varchar(32) not null, status char(1) not null, remark varchar(256), create_time timestamp, create_by varchar(32), update_time timestamp, update_by varchar(32), constraint pk_roles primary key (id));

create table entitlements(id varchar(32) not null, status char(1) not null, remark varchar(256), create_time timestamp, create_by varchar(32), update_time timestamp, update_by varchar(32), constraint pk_entitlements primary key (id));

create table user_role(id int not null, user_id varchar(32) not null, role_id varchar(32) not null, create_time timestamp, create_by varchar(32), constraint pk_user_role primary key (id));

create table user_entitlement(id int not null, user_id varchar(32) not null, entitlement_id varchar(32) not null, create_time timestamp, create_by varchar(32), constraint pk_user_entitlement primary key (id));

insert into users values('rm1', 'RM ONE', 'mePbuUxT+PUtahp2cg4KSE5AQNBzz1fe', 0, 'E', 'remark');
insert into users values('pm1', 'PM ONE', 'mePbuUxT+PUtahp2cg4KSE5AQNBzz1fe', 0, 'E', 'remark');
insert into user_role values(1, 'rm1', 'rm');
insert into user_role values(2, 'pm1', 'pm');
