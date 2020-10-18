import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  smallint: any;
  timestamptz: any;
};



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "clients" */
export type Clients = {
  __typename?: 'clients';
  address: Scalars['String'];
  city: Scalars['String'];
  created_at: Scalars['timestamptz'];
  detail: Scalars['String'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  phone: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "clients" */
export type Clients_Aggregate = {
  __typename?: 'clients_aggregate';
  aggregate?: Maybe<Clients_Aggregate_Fields>;
  nodes: Array<Clients>;
};

/** aggregate fields of "clients" */
export type Clients_Aggregate_Fields = {
  __typename?: 'clients_aggregate_fields';
  avg?: Maybe<Clients_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Clients_Max_Fields>;
  min?: Maybe<Clients_Min_Fields>;
  stddev?: Maybe<Clients_Stddev_Fields>;
  stddev_pop?: Maybe<Clients_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Clients_Stddev_Samp_Fields>;
  sum?: Maybe<Clients_Sum_Fields>;
  var_pop?: Maybe<Clients_Var_Pop_Fields>;
  var_samp?: Maybe<Clients_Var_Samp_Fields>;
  variance?: Maybe<Clients_Variance_Fields>;
};


/** aggregate fields of "clients" */
export type Clients_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Clients_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "clients" */
export type Clients_Aggregate_Order_By = {
  avg?: Maybe<Clients_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Clients_Max_Order_By>;
  min?: Maybe<Clients_Min_Order_By>;
  stddev?: Maybe<Clients_Stddev_Order_By>;
  stddev_pop?: Maybe<Clients_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Clients_Stddev_Samp_Order_By>;
  sum?: Maybe<Clients_Sum_Order_By>;
  var_pop?: Maybe<Clients_Var_Pop_Order_By>;
  var_samp?: Maybe<Clients_Var_Samp_Order_By>;
  variance?: Maybe<Clients_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "clients" */
export type Clients_Arr_Rel_Insert_Input = {
  data: Array<Clients_Insert_Input>;
  on_conflict?: Maybe<Clients_On_Conflict>;
};

/** aggregate avg on columns */
export type Clients_Avg_Fields = {
  __typename?: 'clients_avg_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "clients" */
export type Clients_Avg_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'. */
export type Clients_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Clients_Bool_Exp>>>;
  _not?: Maybe<Clients_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Clients_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  detail?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "clients" */
export enum Clients_Constraint {
  /** unique or primary key constraint */
  ClientsPkey = 'clients_pkey'
}

/** input type for incrementing integer column in table "clients" */
export type Clients_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "clients" */
export type Clients_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Clients_Max_Fields = {
  __typename?: 'clients_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "clients" */
export type Clients_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Clients_Min_Fields = {
  __typename?: 'clients_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "clients" */
export type Clients_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "clients" */
export type Clients_Mutation_Response = {
  __typename?: 'clients_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Clients>;
};

/** input type for inserting object relation for remote table "clients" */
export type Clients_Obj_Rel_Insert_Input = {
  data: Clients_Insert_Input;
  on_conflict?: Maybe<Clients_On_Conflict>;
};

/** on conflict condition type for table "clients" */
export type Clients_On_Conflict = {
  constraint: Clients_Constraint;
  update_columns: Array<Clients_Update_Column>;
  where?: Maybe<Clients_Bool_Exp>;
};

/** ordering options when selecting data from "clients" */
export type Clients_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "clients" */
export type Clients_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "clients" */
export enum Clients_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "clients" */
export type Clients_Set_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Clients_Stddev_Fields = {
  __typename?: 'clients_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "clients" */
export type Clients_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Clients_Stddev_Pop_Fields = {
  __typename?: 'clients_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "clients" */
export type Clients_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Clients_Stddev_Samp_Fields = {
  __typename?: 'clients_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "clients" */
export type Clients_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Clients_Sum_Fields = {
  __typename?: 'clients_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "clients" */
export type Clients_Sum_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** update columns of table "clients" */
export enum Clients_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Clients_Var_Pop_Fields = {
  __typename?: 'clients_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "clients" */
export type Clients_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Clients_Var_Samp_Fields = {
  __typename?: 'clients_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "clients" */
export type Clients_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Clients_Variance_Fields = {
  __typename?: 'clients_variance_fields';
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "clients" */
export type Clients_Variance_Order_By = {
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  address: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  size: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "companies" */
export type CompaniesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "companies" */
export type CompaniesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate';
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields';
  avg?: Maybe<Companies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Companies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "companies" */
export type Companies_Aggregate_Order_By = {
  avg?: Maybe<Companies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Companies_Max_Order_By>;
  min?: Maybe<Companies_Min_Order_By>;
  stddev?: Maybe<Companies_Stddev_Order_By>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Order_By>;
  sum?: Maybe<Companies_Sum_Order_By>;
  var_pop?: Maybe<Companies_Var_Pop_Order_By>;
  var_samp?: Maybe<Companies_Var_Samp_Order_By>;
  variance?: Maybe<Companies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "companies" */
export type Companies_Arr_Rel_Insert_Input = {
  data: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "companies" */
export type Companies_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Companies_Bool_Exp>>>;
  _not?: Maybe<Companies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Companies_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  size?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompanyPkey = 'company_pkey'
}

/** input type for incrementing integer column in table "companies" */
export type Companies_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "companies" */
export type Companies_Max_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields';
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "companies" */
export type Companies_Min_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** on conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns: Array<Companies_Update_Column>;
  where?: Maybe<Companies_Bool_Exp>;
};

/** ordering options when selecting data from "companies" */
export type Companies_Order_By = {
  address?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "companies" */
export type Companies_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  address?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "companies" */
export type Companies_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "companies" */
export type Companies_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "companies" */
export type Companies_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "companies" */
export type Companies_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "companies" */
export type Companies_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "companies" */
export type Companies_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "companies" */
export type Companies_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "inventories" */
export type Inventories = {
  __typename?: 'inventories';
  /** An object relationship */
  company: Companies;
  company_id: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  details: Scalars['String'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  volume: Scalars['Int'];
  weight: Scalars['Int'];
};

/** aggregated selection of "inventories" */
export type Inventories_Aggregate = {
  __typename?: 'inventories_aggregate';
  aggregate?: Maybe<Inventories_Aggregate_Fields>;
  nodes: Array<Inventories>;
};

/** aggregate fields of "inventories" */
export type Inventories_Aggregate_Fields = {
  __typename?: 'inventories_aggregate_fields';
  avg?: Maybe<Inventories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Inventories_Max_Fields>;
  min?: Maybe<Inventories_Min_Fields>;
  stddev?: Maybe<Inventories_Stddev_Fields>;
  stddev_pop?: Maybe<Inventories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventories_Stddev_Samp_Fields>;
  sum?: Maybe<Inventories_Sum_Fields>;
  var_pop?: Maybe<Inventories_Var_Pop_Fields>;
  var_samp?: Maybe<Inventories_Var_Samp_Fields>;
  variance?: Maybe<Inventories_Variance_Fields>;
};


/** aggregate fields of "inventories" */
export type Inventories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inventories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inventories" */
export type Inventories_Aggregate_Order_By = {
  avg?: Maybe<Inventories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Inventories_Max_Order_By>;
  min?: Maybe<Inventories_Min_Order_By>;
  stddev?: Maybe<Inventories_Stddev_Order_By>;
  stddev_pop?: Maybe<Inventories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Inventories_Stddev_Samp_Order_By>;
  sum?: Maybe<Inventories_Sum_Order_By>;
  var_pop?: Maybe<Inventories_Var_Pop_Order_By>;
  var_samp?: Maybe<Inventories_Var_Samp_Order_By>;
  variance?: Maybe<Inventories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "inventories" */
export type Inventories_Arr_Rel_Insert_Input = {
  data: Array<Inventories_Insert_Input>;
  on_conflict?: Maybe<Inventories_On_Conflict>;
};

/** aggregate avg on columns */
export type Inventories_Avg_Fields = {
  __typename?: 'inventories_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "inventories" */
export type Inventories_Avg_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "inventories". All fields are combined with a logical 'AND'. */
export type Inventories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Inventories_Bool_Exp>>>;
  _not?: Maybe<Inventories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Inventories_Bool_Exp>>>;
  company?: Maybe<Companies_Bool_Exp>;
  company_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  details?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  volume?: Maybe<Int_Comparison_Exp>;
  weight?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventories" */
export enum Inventories_Constraint {
  /** unique or primary key constraint */
  InventoriesPkey = 'inventories_pkey'
}

/** input type for incrementing integer column in table "inventories" */
export type Inventories_Inc_Input = {
  company_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "inventories" */
export type Inventories_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Inventories_Max_Fields = {
  __typename?: 'inventories_max_fields';
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "inventories" */
export type Inventories_Max_Order_By = {
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inventories_Min_Fields = {
  __typename?: 'inventories_min_fields';
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "inventories" */
export type Inventories_Min_Order_By = {
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** response of any mutation on the table "inventories" */
export type Inventories_Mutation_Response = {
  __typename?: 'inventories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Inventories>;
};

/** input type for inserting object relation for remote table "inventories" */
export type Inventories_Obj_Rel_Insert_Input = {
  data: Inventories_Insert_Input;
  on_conflict?: Maybe<Inventories_On_Conflict>;
};

/** on conflict condition type for table "inventories" */
export type Inventories_On_Conflict = {
  constraint: Inventories_Constraint;
  update_columns: Array<Inventories_Update_Column>;
  where?: Maybe<Inventories_Bool_Exp>;
};

/** ordering options when selecting data from "inventories" */
export type Inventories_Order_By = {
  company?: Maybe<Companies_Order_By>;
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** primary key columns input for table: "inventories" */
export type Inventories_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "inventories" */
export enum Inventories_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volume = 'volume',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "inventories" */
export type Inventories_Set_Input = {
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Inventories_Stddev_Fields = {
  __typename?: 'inventories_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "inventories" */
export type Inventories_Stddev_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inventories_Stddev_Pop_Fields = {
  __typename?: 'inventories_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "inventories" */
export type Inventories_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inventories_Stddev_Samp_Fields = {
  __typename?: 'inventories_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "inventories" */
export type Inventories_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Inventories_Sum_Fields = {
  __typename?: 'inventories_sum_fields';
  company_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "inventories" */
export type Inventories_Sum_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** update columns of table "inventories" */
export enum Inventories_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Volume = 'volume',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Inventories_Var_Pop_Fields = {
  __typename?: 'inventories_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "inventories" */
export type Inventories_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inventories_Var_Samp_Fields = {
  __typename?: 'inventories_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "inventories" */
export type Inventories_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Inventories_Variance_Fields = {
  __typename?: 'inventories_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "inventories" */
export type Inventories_Variance_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "clients" */
  delete_clients?: Maybe<Clients_Mutation_Response>;
  /** delete single row from the table: "clients" */
  delete_clients_by_pk?: Maybe<Clients>;
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "inventories" */
  delete_inventories?: Maybe<Inventories_Mutation_Response>;
  /** delete single row from the table: "inventories" */
  delete_inventories_by_pk?: Maybe<Inventories>;
  /** delete data from the table: "order_products" */
  delete_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** delete single row from the table: "order_products" */
  delete_order_products_by_pk?: Maybe<Order_Products>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "route_details" */
  delete_route_details?: Maybe<Route_Details_Mutation_Response>;
  /** delete single row from the table: "route_details" */
  delete_route_details_by_pk?: Maybe<Route_Details>;
  /** delete data from the table: "routes" */
  delete_routes?: Maybe<Routes_Mutation_Response>;
  /** delete single row from the table: "routes" */
  delete_routes_by_pk?: Maybe<Routes>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "clients" */
  insert_clients?: Maybe<Clients_Mutation_Response>;
  /** insert a single row into the table: "clients" */
  insert_clients_one?: Maybe<Clients>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "inventories" */
  insert_inventories?: Maybe<Inventories_Mutation_Response>;
  /** insert a single row into the table: "inventories" */
  insert_inventories_one?: Maybe<Inventories>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "route_details" */
  insert_route_details?: Maybe<Route_Details_Mutation_Response>;
  /** insert a single row into the table: "route_details" */
  insert_route_details_one?: Maybe<Route_Details>;
  /** insert data into the table: "routes" */
  insert_routes?: Maybe<Routes_Mutation_Response>;
  /** insert a single row into the table: "routes" */
  insert_routes_one?: Maybe<Routes>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "clients" */
  update_clients?: Maybe<Clients_Mutation_Response>;
  /** update single row of the table: "clients" */
  update_clients_by_pk?: Maybe<Clients>;
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update data of the table: "inventories" */
  update_inventories?: Maybe<Inventories_Mutation_Response>;
  /** update single row of the table: "inventories" */
  update_inventories_by_pk?: Maybe<Inventories>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "route_details" */
  update_route_details?: Maybe<Route_Details_Mutation_Response>;
  /** update single row of the table: "route_details" */
  update_route_details_by_pk?: Maybe<Route_Details>;
  /** update data of the table: "routes" */
  update_routes?: Maybe<Routes_Mutation_Response>;
  /** update single row of the table: "routes" */
  update_routes_by_pk?: Maybe<Routes>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ClientsArgs = {
  where: Clients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clients_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_InventoriesArgs = {
  where: Inventories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ProductsArgs = {
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Products_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Route_DetailsArgs = {
  where: Route_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Route_Details_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_RoutesArgs = {
  where: Routes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Routes_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_ClientsArgs = {
  objects: Array<Clients_Insert_Input>;
  on_conflict?: Maybe<Clients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clients_OneArgs = {
  object: Clients_Insert_Input;
  on_conflict?: Maybe<Clients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InventoriesArgs = {
  objects: Array<Inventories_Insert_Input>;
  on_conflict?: Maybe<Inventories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventories_OneArgs = {
  object: Inventories_Insert_Input;
  on_conflict?: Maybe<Inventories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ProductsArgs = {
  objects: Array<Order_Products_Insert_Input>;
  on_conflict?: Maybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Products_OneArgs = {
  object: Order_Products_Insert_Input;
  on_conflict?: Maybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Route_DetailsArgs = {
  objects: Array<Route_Details_Insert_Input>;
  on_conflict?: Maybe<Route_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Route_Details_OneArgs = {
  object: Route_Details_Insert_Input;
  on_conflict?: Maybe<Route_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoutesArgs = {
  objects: Array<Routes_Insert_Input>;
  on_conflict?: Maybe<Routes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Routes_OneArgs = {
  object: Routes_Insert_Input;
  on_conflict?: Maybe<Routes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ClientsArgs = {
  _inc?: Maybe<Clients_Inc_Input>;
  _set?: Maybe<Clients_Set_Input>;
  where: Clients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clients_By_PkArgs = {
  _inc?: Maybe<Clients_Inc_Input>;
  _set?: Maybe<Clients_Set_Input>;
  pk_columns: Clients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InventoriesArgs = {
  _inc?: Maybe<Inventories_Inc_Input>;
  _set?: Maybe<Inventories_Set_Input>;
  where: Inventories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventories_By_PkArgs = {
  _inc?: Maybe<Inventories_Inc_Input>;
  _set?: Maybe<Inventories_Set_Input>;
  pk_columns: Inventories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ProductsArgs = {
  _inc?: Maybe<Order_Products_Inc_Input>;
  _set?: Maybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_By_PkArgs = {
  _inc?: Maybe<Order_Products_Inc_Input>;
  _set?: Maybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: Maybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: Maybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Route_DetailsArgs = {
  _inc?: Maybe<Route_Details_Inc_Input>;
  _set?: Maybe<Route_Details_Set_Input>;
  where: Route_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Route_Details_By_PkArgs = {
  _inc?: Maybe<Route_Details_Inc_Input>;
  _set?: Maybe<Route_Details_Set_Input>;
  pk_columns: Route_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoutesArgs = {
  _inc?: Maybe<Routes_Inc_Input>;
  _set?: Maybe<Routes_Set_Input>;
  where: Routes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Routes_By_PkArgs = {
  _inc?: Maybe<Routes_Inc_Input>;
  _set?: Maybe<Routes_Set_Input>;
  pk_columns: Routes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _set?: Maybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_products" */
export type Order_Products = {
  __typename?: 'order_products';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  inventory_id: Scalars['bigint'];
  order_id: Scalars['bigint'];
  quantity: Scalars['smallint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order_products" */
export type Order_Products_Aggregate = {
  __typename?: 'order_products_aggregate';
  aggregate?: Maybe<Order_Products_Aggregate_Fields>;
  nodes: Array<Order_Products>;
};

/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_Fields = {
  __typename?: 'order_products_aggregate_fields';
  avg?: Maybe<Order_Products_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Order_Products_Max_Fields>;
  min?: Maybe<Order_Products_Min_Fields>;
  stddev?: Maybe<Order_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Products_Sum_Fields>;
  var_pop?: Maybe<Order_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Products_Var_Samp_Fields>;
  variance?: Maybe<Order_Products_Variance_Fields>;
};


/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_products" */
export type Order_Products_Aggregate_Order_By = {
  avg?: Maybe<Order_Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Products_Max_Order_By>;
  min?: Maybe<Order_Products_Min_Order_By>;
  stddev?: Maybe<Order_Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Products_Sum_Order_By>;
  var_pop?: Maybe<Order_Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Products_Var_Samp_Order_By>;
  variance?: Maybe<Order_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_products" */
export type Order_Products_Arr_Rel_Insert_Input = {
  data: Array<Order_Products_Insert_Input>;
  on_conflict?: Maybe<Order_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Products_Avg_Fields = {
  __typename?: 'order_products_avg_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_products" */
export type Order_Products_Avg_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_products". All fields are combined with a logical 'AND'. */
export type Order_Products_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Products_Bool_Exp>>>;
  _not?: Maybe<Order_Products_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Products_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  inventory_id?: Maybe<Bigint_Comparison_Exp>;
  order_id?: Maybe<Bigint_Comparison_Exp>;
  quantity?: Maybe<Smallint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export enum Order_Products_Constraint {
  /** unique or primary key constraint */
  OrderProductsPkey = 'order_products_pkey'
}

/** input type for incrementing integer column in table "order_products" */
export type Order_Products_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  inventory_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  quantity?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "order_products" */
export type Order_Products_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  inventory_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  quantity?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Products_Max_Fields = {
  __typename?: 'order_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  inventory_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  quantity?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_products" */
export type Order_Products_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Products_Min_Fields = {
  __typename?: 'order_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  inventory_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  quantity?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_products" */
export type Order_Products_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_products" */
export type Order_Products_Mutation_Response = {
  __typename?: 'order_products_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order_Products>;
};

/** input type for inserting object relation for remote table "order_products" */
export type Order_Products_Obj_Rel_Insert_Input = {
  data: Order_Products_Insert_Input;
  on_conflict?: Maybe<Order_Products_On_Conflict>;
};

/** on conflict condition type for table "order_products" */
export type Order_Products_On_Conflict = {
  constraint: Order_Products_Constraint;
  update_columns: Array<Order_Products_Update_Column>;
  where?: Maybe<Order_Products_Bool_Exp>;
};

/** ordering options when selecting data from "order_products" */
export type Order_Products_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "order_products" */
export type Order_Products_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "order_products" */
export enum Order_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryId = 'inventory_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_products" */
export type Order_Products_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  inventory_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  quantity?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Products_Stddev_Fields = {
  __typename?: 'order_products_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_products" */
export type Order_Products_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Products_Stddev_Pop_Fields = {
  __typename?: 'order_products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_products" */
export type Order_Products_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Products_Stddev_Samp_Fields = {
  __typename?: 'order_products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_products" */
export type Order_Products_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Products_Sum_Fields = {
  __typename?: 'order_products_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  inventory_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  quantity?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "order_products" */
export type Order_Products_Sum_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "order_products" */
export enum Order_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryId = 'inventory_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Order_Products_Var_Pop_Fields = {
  __typename?: 'order_products_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_products" */
export type Order_Products_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Products_Var_Samp_Fields = {
  __typename?: 'order_products_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_products" */
export type Order_Products_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Products_Variance_Fields = {
  __typename?: 'order_products_variance_fields';
  id?: Maybe<Scalars['Float']>;
  inventory_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_products" */
export type Order_Products_Variance_Order_By = {
  id?: Maybe<Order_By>;
  inventory_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  commentary: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_status" */
export type Order_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Status_Max_Order_By>;
  min?: Maybe<Order_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "order_status" */
export type Order_Status_Arr_Rel_Insert_Input = {
  data: Array<Order_Status_Insert_Input>;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Status_Bool_Exp>>>;
  _not?: Maybe<Order_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Status_Bool_Exp>>>;
  commentary?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint */
  OrderProductStatusPkey = 'order_product_status_pkey'
}

export enum Order_Status_Enum {
  /** lat and long have been found */
  Located = 'LOCATED'
}

/** expression to compare columns of type order_status_enum. All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Order_Status_Enum>;
  _in?: Maybe<Array<Order_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Order_Status_Enum>;
  _nin?: Maybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  commentary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  commentary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "order_status" */
export type Order_Status_Max_Order_By = {
  commentary?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  commentary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "order_status" */
export type Order_Status_Min_Order_By = {
  commentary?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order_Status>;
};

/** input type for inserting object relation for remote table "order_status" */
export type Order_Status_Obj_Rel_Insert_Input = {
  data: Order_Status_Insert_Input;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};

/** on conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns: Array<Order_Status_Update_Column>;
  where?: Maybe<Order_Status_Bool_Exp>;
};

/** ordering options when selecting data from "order_status" */
export type Order_Status_Order_By = {
  commentary?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "order_status" */
export type Order_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Commentary = 'commentary',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  commentary?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Commentary = 'commentary',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  address: Scalars['String'];
  city: Scalars['String'];
  client_id?: Maybe<Scalars['bigint']>;
  company_id: Scalars['bigint'];
  detail: Scalars['String'];
  id: Scalars['bigint'];
  is_cod: Scalars['Boolean'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregated array relationship */
  order_products_aggregate: Order_Products_Aggregate;
  phone: Scalars['Int'];
  status: Order_Status_Enum;
  total_price: Scalars['Int'];
  total_product_count: Scalars['Int'];
  total_volume: Scalars['Int'];
  total_weight: Scalars['Int'];
  user_id: Scalars['bigint'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_ProductsArgs = {
  distinct_on?: Maybe<Array<Order_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Products_Order_By>>;
  where?: Maybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Products_Order_By>>;
  where?: Maybe<Order_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  client_id?: Maybe<Bigint_Comparison_Exp>;
  company_id?: Maybe<Bigint_Comparison_Exp>;
  detail?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_cod?: Maybe<Boolean_Comparison_Exp>;
  order_products?: Maybe<Order_Products_Bool_Exp>;
  phone?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Order_Status_Enum_Comparison_Exp>;
  total_price?: Maybe<Int_Comparison_Exp>;
  total_product_count?: Maybe<Int_Comparison_Exp>;
  total_volume?: Maybe<Int_Comparison_Exp>;
  total_weight?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing integer column in table "orders" */
export type Orders_Inc_Input = {
  client_id?: Maybe<Scalars['bigint']>;
  company_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['Int']>;
  total_product_count?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Int']>;
  total_weight?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['bigint']>;
  company_id?: Maybe<Scalars['bigint']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  is_cod?: Maybe<Scalars['Boolean']>;
  order_products?: Maybe<Order_Products_Arr_Rel_Insert_Input>;
  phone?: Maybe<Scalars['Int']>;
  status?: Maybe<Order_Status_Enum>;
  total_price?: Maybe<Scalars['Int']>;
  total_product_count?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Int']>;
  total_weight?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['bigint']>;
  company_id?: Maybe<Scalars['bigint']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['Int']>;
  total_product_count?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Int']>;
  total_weight?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['bigint']>;
  company_id?: Maybe<Scalars['bigint']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['Int']>;
  total_product_count?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Int']>;
  total_weight?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** ordering options when selecting data from "orders" */
export type Orders_Order_By = {
  address?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  detail?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_cod?: Maybe<Order_By>;
  order_products_aggregate?: Maybe<Order_Products_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders" */
export type Orders_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IsCod = 'is_cod',
  /** column name */
  Phone = 'phone',
  /** column name */
  Status = 'status',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  TotalProductCount = 'total_product_count',
  /** column name */
  TotalVolume = 'total_volume',
  /** column name */
  TotalWeight = 'total_weight',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['bigint']>;
  company_id?: Maybe<Scalars['bigint']>;
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  is_cod?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['Int']>;
  status?: Maybe<Order_Status_Enum>;
  total_price?: Maybe<Scalars['Int']>;
  total_product_count?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Int']>;
  total_weight?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  client_id?: Maybe<Scalars['bigint']>;
  company_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  phone?: Maybe<Scalars['Int']>;
  total_price?: Maybe<Scalars['Int']>;
  total_product_count?: Maybe<Scalars['Int']>;
  total_volume?: Maybe<Scalars['Int']>;
  total_weight?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  City = 'city',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IsCod = 'is_cod',
  /** column name */
  Phone = 'phone',
  /** column name */
  Status = 'status',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  TotalProductCount = 'total_product_count',
  /** column name */
  TotalVolume = 'total_volume',
  /** column name */
  TotalWeight = 'total_weight',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  client_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
  total_product_count?: Maybe<Scalars['Float']>;
  total_volume?: Maybe<Scalars['Float']>;
  total_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  client_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  total_price?: Maybe<Order_By>;
  total_product_count?: Maybe<Order_By>;
  total_volume?: Maybe<Order_By>;
  total_weight?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "clients" */
  clients: Array<Clients>;
  /** fetch aggregated fields from the table: "clients" */
  clients_aggregate: Clients_Aggregate;
  /** fetch data from the table: "clients" using primary key columns */
  clients_by_pk?: Maybe<Clients>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "inventories" */
  inventories: Array<Inventories>;
  /** fetch aggregated fields from the table: "inventories" */
  inventories_aggregate: Inventories_Aggregate;
  /** fetch data from the table: "inventories" using primary key columns */
  inventories_by_pk?: Maybe<Inventories>;
  /** fetch data from the table: "order_products" */
  order_products: Array<Order_Products>;
  /** fetch aggregated fields from the table: "order_products" */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "route_details" */
  route_details: Array<Route_Details>;
  /** fetch aggregated fields from the table: "route_details" */
  route_details_aggregate: Route_Details_Aggregate;
  /** fetch data from the table: "route_details" using primary key columns */
  route_details_by_pk?: Maybe<Route_Details>;
  /** fetch data from the table: "routes" */
  routes: Array<Routes>;
  /** fetch aggregated fields from the table: "routes" */
  routes_aggregate: Routes_Aggregate;
  /** fetch data from the table: "routes" using primary key columns */
  routes_by_pk?: Maybe<Routes>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootClientsArgs = {
  distinct_on?: Maybe<Array<Clients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Clients_Order_By>>;
  where?: Maybe<Clients_Bool_Exp>;
};


/** query root */
export type Query_RootClients_AggregateArgs = {
  distinct_on?: Maybe<Array<Clients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Clients_Order_By>>;
  where?: Maybe<Clients_Bool_Exp>;
};


/** query root */
export type Query_RootClients_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** query root */
export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** query root */
export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootInventoriesArgs = {
  distinct_on?: Maybe<Array<Inventories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventories_Order_By>>;
  where?: Maybe<Inventories_Bool_Exp>;
};


/** query root */
export type Query_RootInventories_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventories_Order_By>>;
  where?: Maybe<Inventories_Bool_Exp>;
};


/** query root */
export type Query_RootInventories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootOrder_ProductsArgs = {
  distinct_on?: Maybe<Array<Order_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Products_Order_By>>;
  where?: Maybe<Order_Products_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Products_Order_By>>;
  where?: Maybe<Order_Products_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Products_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootOrder_StatusArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootRoute_DetailsArgs = {
  distinct_on?: Maybe<Array<Route_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Route_Details_Order_By>>;
  where?: Maybe<Route_Details_Bool_Exp>;
};


/** query root */
export type Query_RootRoute_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Route_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Route_Details_Order_By>>;
  where?: Maybe<Route_Details_Bool_Exp>;
};


/** query root */
export type Query_RootRoute_Details_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootRoutesArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** query root */
export type Query_RootRoutes_AggregateArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** query root */
export type Query_RootRoutes_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "route_details" */
export type Route_Details = {
  __typename?: 'route_details';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  order_id: Scalars['bigint'];
  route_id: Scalars['bigint'];
  sort_index: Scalars['smallint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "route_details" */
export type Route_Details_Aggregate = {
  __typename?: 'route_details_aggregate';
  aggregate?: Maybe<Route_Details_Aggregate_Fields>;
  nodes: Array<Route_Details>;
};

/** aggregate fields of "route_details" */
export type Route_Details_Aggregate_Fields = {
  __typename?: 'route_details_aggregate_fields';
  avg?: Maybe<Route_Details_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Route_Details_Max_Fields>;
  min?: Maybe<Route_Details_Min_Fields>;
  stddev?: Maybe<Route_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Route_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Route_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Route_Details_Sum_Fields>;
  var_pop?: Maybe<Route_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Route_Details_Var_Samp_Fields>;
  variance?: Maybe<Route_Details_Variance_Fields>;
};


/** aggregate fields of "route_details" */
export type Route_Details_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Route_Details_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "route_details" */
export type Route_Details_Aggregate_Order_By = {
  avg?: Maybe<Route_Details_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Route_Details_Max_Order_By>;
  min?: Maybe<Route_Details_Min_Order_By>;
  stddev?: Maybe<Route_Details_Stddev_Order_By>;
  stddev_pop?: Maybe<Route_Details_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Route_Details_Stddev_Samp_Order_By>;
  sum?: Maybe<Route_Details_Sum_Order_By>;
  var_pop?: Maybe<Route_Details_Var_Pop_Order_By>;
  var_samp?: Maybe<Route_Details_Var_Samp_Order_By>;
  variance?: Maybe<Route_Details_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "route_details" */
export type Route_Details_Arr_Rel_Insert_Input = {
  data: Array<Route_Details_Insert_Input>;
  on_conflict?: Maybe<Route_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Route_Details_Avg_Fields = {
  __typename?: 'route_details_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "route_details" */
export type Route_Details_Avg_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "route_details". All fields are combined with a logical 'AND'. */
export type Route_Details_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Route_Details_Bool_Exp>>>;
  _not?: Maybe<Route_Details_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Route_Details_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  order_id?: Maybe<Bigint_Comparison_Exp>;
  route_id?: Maybe<Bigint_Comparison_Exp>;
  sort_index?: Maybe<Smallint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "route_details" */
export enum Route_Details_Constraint {
  /** unique or primary key constraint */
  RouteDetailsPkey = 'route_details_pkey'
}

/** input type for incrementing integer column in table "route_details" */
export type Route_Details_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  route_id?: Maybe<Scalars['bigint']>;
  sort_index?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "route_details" */
export type Route_Details_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  route_id?: Maybe<Scalars['bigint']>;
  sort_index?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Route_Details_Max_Fields = {
  __typename?: 'route_details_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  route_id?: Maybe<Scalars['bigint']>;
  sort_index?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "route_details" */
export type Route_Details_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Route_Details_Min_Fields = {
  __typename?: 'route_details_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  route_id?: Maybe<Scalars['bigint']>;
  sort_index?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "route_details" */
export type Route_Details_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "route_details" */
export type Route_Details_Mutation_Response = {
  __typename?: 'route_details_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Route_Details>;
};

/** input type for inserting object relation for remote table "route_details" */
export type Route_Details_Obj_Rel_Insert_Input = {
  data: Route_Details_Insert_Input;
  on_conflict?: Maybe<Route_Details_On_Conflict>;
};

/** on conflict condition type for table "route_details" */
export type Route_Details_On_Conflict = {
  constraint: Route_Details_Constraint;
  update_columns: Array<Route_Details_Update_Column>;
  where?: Maybe<Route_Details_Bool_Exp>;
};

/** ordering options when selecting data from "route_details" */
export type Route_Details_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "route_details" */
export type Route_Details_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "route_details" */
export enum Route_Details_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RouteId = 'route_id',
  /** column name */
  SortIndex = 'sort_index',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "route_details" */
export type Route_Details_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  route_id?: Maybe<Scalars['bigint']>;
  sort_index?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Route_Details_Stddev_Fields = {
  __typename?: 'route_details_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "route_details" */
export type Route_Details_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Route_Details_Stddev_Pop_Fields = {
  __typename?: 'route_details_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "route_details" */
export type Route_Details_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Route_Details_Stddev_Samp_Fields = {
  __typename?: 'route_details_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "route_details" */
export type Route_Details_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Route_Details_Sum_Fields = {
  __typename?: 'route_details_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  route_id?: Maybe<Scalars['bigint']>;
  sort_index?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "route_details" */
export type Route_Details_Sum_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** update columns of table "route_details" */
export enum Route_Details_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  RouteId = 'route_id',
  /** column name */
  SortIndex = 'sort_index',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Route_Details_Var_Pop_Fields = {
  __typename?: 'route_details_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "route_details" */
export type Route_Details_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Route_Details_Var_Samp_Fields = {
  __typename?: 'route_details_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "route_details" */
export type Route_Details_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Route_Details_Variance_Fields = {
  __typename?: 'route_details_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  sort_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "route_details" */
export type Route_Details_Variance_Order_By = {
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  sort_index?: Maybe<Order_By>;
};

/** columns and relationships of "routes" */
export type Routes = {
  __typename?: 'routes';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['bigint'];
};

/** aggregated selection of "routes" */
export type Routes_Aggregate = {
  __typename?: 'routes_aggregate';
  aggregate?: Maybe<Routes_Aggregate_Fields>;
  nodes: Array<Routes>;
};

/** aggregate fields of "routes" */
export type Routes_Aggregate_Fields = {
  __typename?: 'routes_aggregate_fields';
  avg?: Maybe<Routes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Routes_Max_Fields>;
  min?: Maybe<Routes_Min_Fields>;
  stddev?: Maybe<Routes_Stddev_Fields>;
  stddev_pop?: Maybe<Routes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Routes_Stddev_Samp_Fields>;
  sum?: Maybe<Routes_Sum_Fields>;
  var_pop?: Maybe<Routes_Var_Pop_Fields>;
  var_samp?: Maybe<Routes_Var_Samp_Fields>;
  variance?: Maybe<Routes_Variance_Fields>;
};


/** aggregate fields of "routes" */
export type Routes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Routes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "routes" */
export type Routes_Aggregate_Order_By = {
  avg?: Maybe<Routes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Routes_Max_Order_By>;
  min?: Maybe<Routes_Min_Order_By>;
  stddev?: Maybe<Routes_Stddev_Order_By>;
  stddev_pop?: Maybe<Routes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Routes_Stddev_Samp_Order_By>;
  sum?: Maybe<Routes_Sum_Order_By>;
  var_pop?: Maybe<Routes_Var_Pop_Order_By>;
  var_samp?: Maybe<Routes_Var_Samp_Order_By>;
  variance?: Maybe<Routes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "routes" */
export type Routes_Arr_Rel_Insert_Input = {
  data: Array<Routes_Insert_Input>;
  on_conflict?: Maybe<Routes_On_Conflict>;
};

/** aggregate avg on columns */
export type Routes_Avg_Fields = {
  __typename?: 'routes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "routes" */
export type Routes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "routes". All fields are combined with a logical 'AND'. */
export type Routes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Routes_Bool_Exp>>>;
  _not?: Maybe<Routes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Routes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "routes" */
export enum Routes_Constraint {
  /** unique or primary key constraint */
  RoutesPkey = 'routes_pkey'
}

/** input type for incrementing integer column in table "routes" */
export type Routes_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "routes" */
export type Routes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Routes_Max_Fields = {
  __typename?: 'routes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "routes" */
export type Routes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Routes_Min_Fields = {
  __typename?: 'routes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "routes" */
export type Routes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "routes" */
export type Routes_Mutation_Response = {
  __typename?: 'routes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Routes>;
};

/** input type for inserting object relation for remote table "routes" */
export type Routes_Obj_Rel_Insert_Input = {
  data: Routes_Insert_Input;
  on_conflict?: Maybe<Routes_On_Conflict>;
};

/** on conflict condition type for table "routes" */
export type Routes_On_Conflict = {
  constraint: Routes_Constraint;
  update_columns: Array<Routes_Update_Column>;
  where?: Maybe<Routes_Bool_Exp>;
};

/** ordering options when selecting data from "routes" */
export type Routes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "routes" */
export type Routes_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "routes" */
export enum Routes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "routes" */
export type Routes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Routes_Stddev_Fields = {
  __typename?: 'routes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "routes" */
export type Routes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Routes_Stddev_Pop_Fields = {
  __typename?: 'routes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "routes" */
export type Routes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Routes_Stddev_Samp_Fields = {
  __typename?: 'routes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "routes" */
export type Routes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Routes_Sum_Fields = {
  __typename?: 'routes_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "routes" */
export type Routes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "routes" */
export enum Routes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Routes_Var_Pop_Fields = {
  __typename?: 'routes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "routes" */
export type Routes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Routes_Var_Samp_Fields = {
  __typename?: 'routes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "routes" */
export type Routes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Routes_Variance_Fields = {
  __typename?: 'routes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "routes" */
export type Routes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};


/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "clients" */
  clients: Array<Clients>;
  /** fetch aggregated fields from the table: "clients" */
  clients_aggregate: Clients_Aggregate;
  /** fetch data from the table: "clients" using primary key columns */
  clients_by_pk?: Maybe<Clients>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "inventories" */
  inventories: Array<Inventories>;
  /** fetch aggregated fields from the table: "inventories" */
  inventories_aggregate: Inventories_Aggregate;
  /** fetch data from the table: "inventories" using primary key columns */
  inventories_by_pk?: Maybe<Inventories>;
  /** fetch data from the table: "order_products" */
  order_products: Array<Order_Products>;
  /** fetch aggregated fields from the table: "order_products" */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "route_details" */
  route_details: Array<Route_Details>;
  /** fetch aggregated fields from the table: "route_details" */
  route_details_aggregate: Route_Details_Aggregate;
  /** fetch data from the table: "route_details" using primary key columns */
  route_details_by_pk?: Maybe<Route_Details>;
  /** fetch data from the table: "routes" */
  routes: Array<Routes>;
  /** fetch aggregated fields from the table: "routes" */
  routes_aggregate: Routes_Aggregate;
  /** fetch data from the table: "routes" using primary key columns */
  routes_by_pk?: Maybe<Routes>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootClientsArgs = {
  distinct_on?: Maybe<Array<Clients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Clients_Order_By>>;
  where?: Maybe<Clients_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootClients_AggregateArgs = {
  distinct_on?: Maybe<Array<Clients_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Clients_Order_By>>;
  where?: Maybe<Clients_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootClients_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootInventoriesArgs = {
  distinct_on?: Maybe<Array<Inventories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventories_Order_By>>;
  where?: Maybe<Inventories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInventories_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventories_Order_By>>;
  where?: Maybe<Inventories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInventories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootOrder_ProductsArgs = {
  distinct_on?: Maybe<Array<Order_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Products_Order_By>>;
  where?: Maybe<Order_Products_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Products_Order_By>>;
  where?: Maybe<Order_Products_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Products_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Status_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootRoute_DetailsArgs = {
  distinct_on?: Maybe<Array<Route_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Route_Details_Order_By>>;
  where?: Maybe<Route_Details_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoute_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Route_Details_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Route_Details_Order_By>>;
  where?: Maybe<Route_Details_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoute_Details_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootRoutesArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoutes_AggregateArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoutes_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Role_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Role_Max_Order_By>;
  min?: Maybe<User_Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Role_Bool_Exp>>>;
  _not?: Maybe<User_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Role_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint */
  UserRolePkey = 'user_role_pkey'
}

export enum User_Role_Enum {
  /** Administrator */
  Admin = 'admin',
  /** Client company admin */
  CompanyAdmin = 'company_admin',
  /** Delivery man */
  DeliveryMan = 'delivery_man'
}

/** expression to compare columns of type user_role_enum. All fields are combined with logical 'AND'. */
export type User_Role_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Role_Enum>;
  _in?: Maybe<Array<User_Role_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Role_Enum>;
  _nin?: Maybe<Array<User_Role_Enum>>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Role>;
};

/** input type for inserting object relation for remote table "user_role" */
export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

/** on conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns: Array<User_Role_Update_Column>;
  where?: Maybe<User_Role_Bool_Exp>;
};

/** ordering options when selecting data from "user_role" */
export type User_Role_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_role" */
export type User_Role_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  company: Companies;
  company_id: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  role?: Maybe<User_Role_Enum>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  company?: Maybe<Companies_Bool_Exp>;
  company_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<User_Role_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  company_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  company?: Maybe<Companies_Obj_Rel_Insert_Input>;
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  company?: Maybe<Companies_Order_By>;
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  company_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<User_Role_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  company_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  company_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = (
  { __typename?: 'query_root' }
  & { clients: Array<(
    { __typename?: 'clients' }
    & Pick<Clients, 'id'>
  )> }
);

export type InventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type InventoryQuery = (
  { __typename?: 'query_root' }
  & { inventories: Array<(
    { __typename?: 'inventories' }
    & Pick<Inventories, 'id' | 'name' | 'price' | 'weight'>
  )> }
);

export type SubmitOrdersMutationVariables = Exact<{
  input: Array<Orders_Insert_Input>;
}>;


export type SubmitOrdersMutation = (
  { __typename?: 'mutation_root' }
  & { insert_orders?: Maybe<(
    { __typename?: 'orders_mutation_response' }
    & { returning: Array<(
      { __typename?: 'orders' }
      & Pick<Orders, 'id' | 'address'>
    )> }
  )> }
);

export const MyQueryDocument = gql`
    query MyQuery {
  clients {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MyQueryGQL extends Apollo.Query<MyQueryQuery, MyQueryQueryVariables> {
    document = MyQueryDocument;
    
  }
export const InventoryDocument = gql`
    query Inventory {
  inventories {
    id
    name
    price
    weight
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InventoryGQL extends Apollo.Query<InventoryQuery, InventoryQueryVariables> {
    document = InventoryDocument;
    
  }
export const SubmitOrdersDocument = gql`
    mutation SubmitOrders($input: [orders_insert_input!]!) {
  insert_orders(objects: $input) {
    returning {
      id
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitOrdersGQL extends Apollo.Mutation<SubmitOrdersMutation, SubmitOrdersMutationVariables> {
    document = SubmitOrdersDocument;
    
  }