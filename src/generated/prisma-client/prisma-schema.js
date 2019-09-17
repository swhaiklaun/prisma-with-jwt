module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Address {
  id: ID!
  line1: String!
  line2: String
  line3: String
  postalCode: String!
  phone: String!
  isDefault: Boolean!
  user: User!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  id: ID
  line1: String!
  line2: String
  line3: String
  postalCode: String!
  phone: String!
  isDefault: Boolean
  user: UserCreateOneWithoutAddressesInput!
}

input AddressCreateManyWithoutUserInput {
  create: [AddressCreateWithoutUserInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateWithoutUserInput {
  id: ID
  line1: String!
  line2: String
  line3: String
  postalCode: String!
  phone: String!
  isDefault: Boolean
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  line1_ASC
  line1_DESC
  line2_ASC
  line2_DESC
  line3_ASC
  line3_DESC
  postalCode_ASC
  postalCode_DESC
  phone_ASC
  phone_DESC
  isDefault_ASC
  isDefault_DESC
}

type AddressPreviousValues {
  id: ID!
  line1: String!
  line2: String
  line3: String
  postalCode: String!
  phone: String!
  isDefault: Boolean!
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  line1: String
  line1_not: String
  line1_in: [String!]
  line1_not_in: [String!]
  line1_lt: String
  line1_lte: String
  line1_gt: String
  line1_gte: String
  line1_contains: String
  line1_not_contains: String
  line1_starts_with: String
  line1_not_starts_with: String
  line1_ends_with: String
  line1_not_ends_with: String
  line2: String
  line2_not: String
  line2_in: [String!]
  line2_not_in: [String!]
  line2_lt: String
  line2_lte: String
  line2_gt: String
  line2_gte: String
  line2_contains: String
  line2_not_contains: String
  line2_starts_with: String
  line2_not_starts_with: String
  line2_ends_with: String
  line2_not_ends_with: String
  line3: String
  line3_not: String
  line3_in: [String!]
  line3_not_in: [String!]
  line3_lt: String
  line3_lte: String
  line3_gt: String
  line3_gte: String
  line3_contains: String
  line3_not_contains: String
  line3_starts_with: String
  line3_not_starts_with: String
  line3_ends_with: String
  line3_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  isDefault: Boolean
  isDefault_not: Boolean
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateInput {
  line1: String
  line2: String
  line3: String
  postalCode: String
  phone: String
  isDefault: Boolean
  user: UserUpdateOneRequiredWithoutAddressesInput
}

input AddressUpdateManyDataInput {
  line1: String
  line2: String
  line3: String
  postalCode: String
  phone: String
  isDefault: Boolean
}

input AddressUpdateManyMutationInput {
  line1: String
  line2: String
  line3: String
  postalCode: String
  phone: String
  isDefault: Boolean
}

input AddressUpdateManyWithoutUserInput {
  create: [AddressCreateWithoutUserInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  set: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  update: [AddressUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [AddressUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateWithoutUserDataInput {
  line1: String
  line2: String
  line3: String
  postalCode: String
  phone: String
  isDefault: Boolean
}

input AddressUpdateWithWhereUniqueWithoutUserInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateWithoutUserDataInput!
}

input AddressUpsertWithWhereUniqueWithoutUserInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateWithoutUserDataInput!
  create: AddressCreateWithoutUserInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  line1: String
  line1_not: String
  line1_in: [String!]
  line1_not_in: [String!]
  line1_lt: String
  line1_lte: String
  line1_gt: String
  line1_gte: String
  line1_contains: String
  line1_not_contains: String
  line1_starts_with: String
  line1_not_starts_with: String
  line1_ends_with: String
  line1_not_ends_with: String
  line2: String
  line2_not: String
  line2_in: [String!]
  line2_not_in: [String!]
  line2_lt: String
  line2_lte: String
  line2_gt: String
  line2_gte: String
  line2_contains: String
  line2_not_contains: String
  line2_starts_with: String
  line2_not_starts_with: String
  line2_ends_with: String
  line2_not_ends_with: String
  line3: String
  line3_not: String
  line3_in: [String!]
  line3_not_in: [String!]
  line3_lt: String
  line3_lte: String
  line3_gt: String
  line3_gte: String
  line3_contains: String
  line3_not_contains: String
  line3_starts_with: String
  line3_not_starts_with: String
  line3_ends_with: String
  line3_not_ends_with: String
  postalCode: String
  postalCode_not: String
  postalCode_in: [String!]
  postalCode_not_in: [String!]
  postalCode_lt: String
  postalCode_lte: String
  postalCode_gt: String
  postalCode_gte: String
  postalCode_contains: String
  postalCode_not_contains: String
  postalCode_starts_with: String
  postalCode_not_starts_with: String
  postalCode_ends_with: String
  postalCode_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  isDefault: Boolean
  isDefault_not: Boolean
  user: UserWhereInput
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateCustomer {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateSupplier {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Customer {
  id: ID!
  firstName: String!
  lastName: String!
  user: User!
  organizationName: String!
  customerType: CustomerType!
}

type CustomerConnection {
  pageInfo: PageInfo!
  edges: [CustomerEdge]!
  aggregate: AggregateCustomer!
}

input CustomerCreateInput {
  id: ID
  firstName: String!
  lastName: String!
  user: UserCreateOneInput!
  organizationName: String!
  customerType: CustomerType
}

type CustomerEdge {
  node: Customer!
  cursor: String!
}

enum CustomerOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  organizationName_ASC
  organizationName_DESC
  customerType_ASC
  customerType_DESC
}

type CustomerPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  organizationName: String!
  customerType: CustomerType!
}

type CustomerSubscriptionPayload {
  mutation: MutationType!
  node: Customer
  updatedFields: [String!]
  previousValues: CustomerPreviousValues
}

input CustomerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CustomerWhereInput
  AND: [CustomerSubscriptionWhereInput!]
  OR: [CustomerSubscriptionWhereInput!]
  NOT: [CustomerSubscriptionWhereInput!]
}

enum CustomerType {
  JuristicPerson
  OrdinaryPerson
}

input CustomerUpdateInput {
  firstName: String
  lastName: String
  user: UserUpdateOneRequiredInput
  organizationName: String
  customerType: CustomerType
}

input CustomerUpdateManyMutationInput {
  firstName: String
  lastName: String
  organizationName: String
  customerType: CustomerType
}

input CustomerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  user: UserWhereInput
  organizationName: String
  organizationName_not: String
  organizationName_in: [String!]
  organizationName_not_in: [String!]
  organizationName_lt: String
  organizationName_lte: String
  organizationName_gt: String
  organizationName_gte: String
  organizationName_contains: String
  organizationName_not_contains: String
  organizationName_starts_with: String
  organizationName_not_starts_with: String
  organizationName_ends_with: String
  organizationName_not_ends_with: String
  customerType: CustomerType
  customerType_not: CustomerType
  customerType_in: [CustomerType!]
  customerType_not_in: [CustomerType!]
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
  NOT: [CustomerWhereInput!]
}

input CustomerWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(data: CustomerUpdateInput!, where: CustomerWhereUniqueInput!): Customer
  updateManyCustomers(data: CustomerUpdateManyMutationInput!, where: CustomerWhereInput): BatchPayload!
  upsertCustomer(where: CustomerWhereUniqueInput!, create: CustomerCreateInput!, update: CustomerUpdateInput!): Customer!
  deleteCustomer(where: CustomerWhereUniqueInput!): Customer
  deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createSupplier(data: SupplierCreateInput!): Supplier!
  updateSupplier(data: SupplierUpdateInput!, where: SupplierWhereUniqueInput!): Supplier
  updateManySuppliers(data: SupplierUpdateManyMutationInput!, where: SupplierWhereInput): BatchPayload!
  upsertSupplier(where: SupplierWhereUniqueInput!, create: SupplierCreateInput!, update: SupplierUpdateInput!): Supplier!
  deleteSupplier(where: SupplierWhereUniqueInput!): Supplier
  deleteManySuppliers(where: SupplierWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  published: Boolean
  title: String!
  content: String
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  id: ID
  published: Boolean
  title: String!
  content: String
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  customer(where: CustomerWhereUniqueInput!): Customer
  customers(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Customer]!
  customersConnection(where: CustomerWhereInput, orderBy: CustomerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomerConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  supplier(where: SupplierWhereUniqueInput!): Supplier
  suppliers(where: SupplierWhereInput, orderBy: SupplierOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Supplier]!
  suppliersConnection(where: SupplierWhereInput, orderBy: SupplierOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SupplierConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  id: ID
  name: String!
  users: UserCreateManyWithoutRoleInput
}

input RoleCreateOneWithoutUsersInput {
  create: RoleCreateWithoutUsersInput
  connect: RoleWhereUniqueInput
}

input RoleCreateWithoutUsersInput {
  id: ID
  name: String!
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  name: String
  users: UserUpdateManyWithoutRoleInput
}

input RoleUpdateManyMutationInput {
  name: String
}

input RoleUpdateOneRequiredWithoutUsersInput {
  create: RoleCreateWithoutUsersInput
  update: RoleUpdateWithoutUsersDataInput
  upsert: RoleUpsertWithoutUsersInput
  connect: RoleWhereUniqueInput
}

input RoleUpdateWithoutUsersDataInput {
  name: String
}

input RoleUpsertWithoutUsersInput {
  update: RoleUpdateWithoutUsersDataInput!
  create: RoleCreateWithoutUsersInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

enum Status {
  Pending
  Active
  InActive
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  customer(where: CustomerSubscriptionWhereInput): CustomerSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  supplier(where: SupplierSubscriptionWhereInput): SupplierSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Supplier {
  id: ID!
  name: String!
  user: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SupplierConnection {
  pageInfo: PageInfo!
  edges: [SupplierEdge]!
  aggregate: AggregateSupplier!
}

input SupplierCreateInput {
  id: ID
  name: String!
  user: UserCreateOneInput!
}

type SupplierEdge {
  node: Supplier!
  cursor: String!
}

enum SupplierOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SupplierPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SupplierSubscriptionPayload {
  mutation: MutationType!
  node: Supplier
  updatedFields: [String!]
  previousValues: SupplierPreviousValues
}

input SupplierSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SupplierWhereInput
  AND: [SupplierSubscriptionWhereInput!]
  OR: [SupplierSubscriptionWhereInput!]
  NOT: [SupplierSubscriptionWhereInput!]
}

input SupplierUpdateInput {
  name: String
  user: UserUpdateOneRequiredInput
}

input SupplierUpdateManyMutationInput {
  name: String
}

input SupplierWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SupplierWhereInput!]
  OR: [SupplierWhereInput!]
  NOT: [SupplierWhereInput!]
}

input SupplierWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  name: String
  password: String!
  status: Status!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  role: Role!
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  name: String
  password: String!
  status: Status
  posts: PostCreateManyWithoutAuthorInput
  role: RoleCreateOneWithoutUsersInput!
  addresses: AddressCreateManyWithoutUserInput
}

input UserCreateManyWithoutRoleInput {
  create: [UserCreateWithoutRoleInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutAddressesInput {
  create: UserCreateWithoutAddressesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAddressesInput {
  id: ID
  email: String!
  name: String
  password: String!
  status: Status
  posts: PostCreateManyWithoutAuthorInput
  role: RoleCreateOneWithoutUsersInput!
}

input UserCreateWithoutPostsInput {
  id: ID
  email: String!
  name: String
  password: String!
  status: Status
  role: RoleCreateOneWithoutUsersInput!
  addresses: AddressCreateManyWithoutUserInput
}

input UserCreateWithoutRoleInput {
  id: ID
  email: String!
  name: String
  password: String!
  status: Status
  posts: PostCreateManyWithoutAuthorInput
  addresses: AddressCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  status_ASC
  status_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String
  password: String!
  status: Status!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  name: String
  password: String
  status: Status
  posts: PostUpdateManyWithoutAuthorInput
  role: RoleUpdateOneRequiredWithoutUsersInput
  addresses: AddressUpdateManyWithoutUserInput
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  status: Status
  posts: PostUpdateManyWithoutAuthorInput
  role: RoleUpdateOneRequiredWithoutUsersInput
  addresses: AddressUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  email: String
  name: String
  password: String
  status: Status
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
  status: Status
}

input UserUpdateManyWithoutRoleInput {
  create: [UserCreateWithoutRoleInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRoleInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRoleInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutAddressesInput {
  create: UserCreateWithoutAddressesInput
  update: UserUpdateWithoutAddressesDataInput
  upsert: UserUpsertWithoutAddressesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAddressesDataInput {
  email: String
  name: String
  password: String
  status: Status
  posts: PostUpdateManyWithoutAuthorInput
  role: RoleUpdateOneRequiredWithoutUsersInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  name: String
  password: String
  status: Status
  role: RoleUpdateOneRequiredWithoutUsersInput
  addresses: AddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutRoleDataInput {
  email: String
  name: String
  password: String
  status: Status
  posts: PostUpdateManyWithoutAuthorInput
  addresses: AddressUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRoleDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutAddressesInput {
  update: UserUpdateWithoutAddressesDataInput!
  create: UserCreateWithoutAddressesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutRoleInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRoleDataInput!
  create: UserCreateWithoutRoleInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  role: RoleWhereInput
  addresses_every: AddressWhereInput
  addresses_some: AddressWhereInput
  addresses_none: AddressWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    