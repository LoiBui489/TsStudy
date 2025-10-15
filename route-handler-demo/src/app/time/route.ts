// Enable caching
// Cache only work in production
export const dynamic = "force-static";
// Validate the [next request] for every 10 seconds to check if the data has changed
// If it changed, the next request (after the [request] above) will apply the change
export const revalidate = 10;

export async function GET() {
    return Response.json(new Date().toLocaleString());
}