# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table resource (
  id                        bigint not null,
  org_name                  varchar(255),
  address                   varchar(255),
  phone_number              varchar(255),
  email                     varchar(255),
  user_id                   bigint,
  type                      varchar(255),
  items_needed              varchar(255),
  constraint pk_resource primary key (id))
;

create table user (
  id                        bigint not null,
  name                      varchar(255),
  guid                      varchar(255),
  email                     varchar(255),
  password                  varchar(255),
  type                      varchar(10),
  tax_id                    varchar(255),
  constraint ck_user_type check (type in ('PANTRY','SHELTER','COMMERCIAL','INDIVIDUAL')),
  constraint uq_user_guid unique (guid),
  constraint uq_user_email unique (email),
  constraint pk_user primary key (id))
;

create sequence resource_seq;

create sequence user_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists resource;

drop table if exists user;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists resource_seq;

drop sequence if exists user_seq;

