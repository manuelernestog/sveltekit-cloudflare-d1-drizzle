import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  // dbCredentials: {
  //   url: 'file:./[ulr to your db in .wrangler folder]',
  // },
});