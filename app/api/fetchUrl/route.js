export async function POST(request) {
  const body = await request.json();
  const id = body.url.split("=").at(-1);
  return new Response(id, { status: 200 });
}
