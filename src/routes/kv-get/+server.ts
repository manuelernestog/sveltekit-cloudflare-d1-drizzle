export async function GET({ params, url, platform }) {
	const handler = await platform?.env.MIGHTY_KV.get("handler");
	return Response.json(handler);
  }