import { products } from "$lib/db/schema";

export async function GET({ request: Request, platform, locals }) {
    let data = await locals.db.select().from(products).all();
    return Response.json(data);
}