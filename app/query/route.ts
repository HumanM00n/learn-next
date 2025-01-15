import { db } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import bcrypt from 'bcrypt';

const client = await db.connect();

async function listInvoices() {
	const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data.rows;
}

export async function GET() {
try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 200 });
  }
}
