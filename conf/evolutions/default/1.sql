# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table address (
  address_id                bigint not null,
  street                    varchar(255),
  city                      varchar(255),
  state                     varchar(255),
  zip                       varchar(255),
  user_id                   bigint,
  constraint pk_address primary key (address_id))
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
  address                   varchar(255),
  phone_number              varchar(255),
  email                     varchar(255),
  type                      varchar(255),
  title                     varchar(255),
  items_needed              varchar(255),
  description               varchar(255),
  constraint pk_resource primary key (id))
;

create table DonorsChoiceUser (
  id                        bigint not null,
  name                      varchar(255),
  guid                      varchar(255),
  email                     varchar(255),
  password                  varchar(255),
  type                      varchar(10),
  address_address_id        bigint,
  tax_id                    varchar(255),
  constraint ck_DonorsChoiceUser_type check (type in ('PANTRY','SHELTER','COMMERCIAL','INDIVIDUAL')),
  constraint uq_DonorsChoiceUser_guid unique (guid),
  constraint uq_DonorsChoiceUser_email unique (email),
  constraint pk_DonorsChoiceUser primary key (id))
;

create sequence address_seq;

create sequence request_seq;

create sequence resource_seq;

create sequence DonorsChoiceUser_seq;

alter table address add constraint fk_address_user_1 foreign key (user_id) references DonorsChoiceUser (id) on delete restrict on update restrict;
create index ix_address_user_1 on address (user_id);
alter table resource add constraint fk_resource_user_2 foreign key (user_id) references DonorsChoiceUser (id) on delete restrict on update restrict;
create index ix_resource_user_2 on resource (user_id);
alter table DonorsChoiceUser add constraint fk_DonorsChoiceUser_address_3 foreign key (address_address_id) references address (address_id) on delete restrict on update restrict;
create index ix_DonorsChoiceUser_address_3 on DonorsChoiceUser (address_address_id);



# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists address;

drop table if exists request;

drop table if exists resource;

drop table if exists DonorsChoiceUser;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists address_seq;

drop sequence if exists request_seq;

drop sequence if exists resource_seq;

drop sequence if exists DonorsChoiceUser_seq;

