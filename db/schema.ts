import {sqliteTable,text,integer} from "drizzle-orm/sqlite-core";
export const settings=sqliteTable("settings",{key:text("key").primaryKey(),value:text("value").notNull()});
export const products=sqliteTable("products",{id:text("id").primaryKey(),title:text("title").notNull(),description:text("description").notNull(),price:integer("price").notNull(),category:text("category").notNull(),pages:integer("pages").notNull(),cover:text("cover").notNull(),file:text("file").notNull(),active:integer("active").notNull().default(1)});
