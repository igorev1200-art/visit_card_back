const { Client } = require('pg');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const match = env.match(/DATABASE_URL="?([^"\r\n]+)"?/);
if (!match) {
  console.error('No DATABASE_URL in .env');
  process.exit(1);
}
const url = match[1];
console.log('Trying', url.replace(/:[^:@]+@/, ':***@'));

(async () => {
  const c = new Client({
    connectionString: url,
    connectionTimeoutMillis: 10000,
    ssl: { rejectUnauthorized: false },
  });
  try {
    await c.connect();
    const r = await c.query('select current_database(), current_user');
    console.log('OK', r.rows[0]);
    await c.end();
  } catch (e) {
    console.log('FAIL', e.code || '', e.message);
    try {
      await c.end();
    } catch {}
    process.exit(1);
  }
})();
