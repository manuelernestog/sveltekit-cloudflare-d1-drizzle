export async function GET({ params, url, platform }) {
	const date = new Date;
	const handler = await platform?.env.MIGHTY_KV.put("handler", date.toISOString());
	return Response.json(date.toISOString());
}