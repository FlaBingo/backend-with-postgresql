// Make sure to install the 'postgres' package
import "dotenv/config";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

async function main() {
  const queryClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
  const db = drizzle(queryClient);

  const result = await db.execute('select 1');
  console.log(result);

  await queryClient.end(); // Close the connection
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});