export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const assetUrl = new URL("/t/index.html", url);

  return env.ASSETS.fetch(new Request(assetUrl, request));
}
