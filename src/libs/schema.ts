import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Basic schema to prevent database errors
export const guestbook = sqliteTable('guestbook', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').notNull(),
  message: text('message').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
}); 