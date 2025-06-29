import type { Config } from 'drizzle-kit';

export default {
  schema: './src/libs/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    connectionString: process.env.TURSO_DATABASE_URL || 'file:./local.db',
  },
} satisfies Config; 