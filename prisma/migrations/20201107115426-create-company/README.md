# Migration `20201107115426-create-company`

This migration has been generated at 11/7/2020, 12:54:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Company" (
"id" SERIAL,
"symbol" text   NOT NULL ,
"name" text   NOT NULL ,
"description" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201107115426-create-company
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Company {
+  id Int @default(autoincrement()) @id
+  symbol String
+  name String
+  description String
+}
```


