export async function GET({ request: Request, platform }) {
    const db = platform?.env.DB;
    const productsResults = await db?.prepare('SELECT * FROM products').all();
    return Response.json(productsResults?.results);
}