import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:./local.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client);

// Disable migrate function in production
// export const migrate = async () => {
//   if (process.env.NODE_ENV === 'production') {
//     return;
//   }
//   // Migration logic here
// }; 