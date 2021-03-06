# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table address (
  id                        bigint not null,
  user_id                   bigint,
  street                    varchar(255),
  city                      varchar(255),
  state                     varchar(255),
  zip                       varchar(255),
  constraint pk_address primary key (id))
;

create table recipient (
  id                        bigint not null,
  org_name                  varchar(255),
  email                     varchar(255),
  phone_number              varchar(255),
  address                   varchar(255),
  title                     varchar(255),
  description               varchar(255),
  user_id                   bigint,
  constraint pk_recipient primary key (id))
;

create table request (
  id                        bigint not null,
  name                      varchar(255),
  description               varchar(255),
  quantity                  integer,
  user_id                   bigint,
  constraint pk_request primary key (id))
;

create table resource (
  id                        bigint not null,
  user_id                   bigint,
  org_name                  varchar(255),
  type                      varchar(255),
  title                     varchar(255),
  items_needed              varchar(255),
  description               varchar(255),
  address                   varchar(255),
  phone_number              varchar(255),
  email                     varchar(255),
  constraint pk_resource primary key (id))
;

create table users (
  id                        bigint not null,
  name                      varchar(255),
  guid                      varchar(255),
  email                     varchar(255) not null,
  password                  varchar(255),
  reset_code                varchar(255),
  type                      varchar(10),
  tax_id                    varchar(255),
  constraint ck_users_type check (type in ('PANTRY','SHELTER','COMMERCIAL','INDIVIDUAL')),
  constraint uq_users_guid unique (guid),
  constraint uq_users_email unique (email),
  constraint pk_users primary key (id))
;

create table user_accounts (
  id                        bigint not null,
  password                  varchar(255),
  user_id                   bigint,
  created_date              timestamp,
  constraint pk_user_accounts primary key (id))
;

create sequence address_seq;

create sequence recipient_seq;

create sequence request_seq;

create sequence resource_seq;

create sequence users_seq;

create sequence user_accounts_seq;

alter table address add constraint fk_address_user_1 foreign key (user_id) references users (id) on delete restrict on update restrict;
create index ix_address_user_1 on address (user_id);
alter table resource add constraint fk_resource_user_2 foreign key (user_id) references users (id) on delete restrict on update restrict;
create index ix_resource_user_2 on resource (user_id);
alter table user_accounts add constraint fk_user_accounts_user_3 foreign key (user_id) references users (id) on delete restrict on update restrict;
create index ix_user_accounts_user_3 on user_accounts (user_id);



# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists address;

drop table if exists recipient;

drop table if exists request;

drop table if exists resource;

drop table if exists users;

drop table if exists user_accounts;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists address_seq;

drop sequence if exists recipient_seq;

drop sequence if exists request_seq;

drop sequence if exists resource_seq;

drop sequence if exists users_seq;

drop sequence if exists user_accounts_seq;

