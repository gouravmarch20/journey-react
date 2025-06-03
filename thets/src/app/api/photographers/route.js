// /app/api/photographers/route.js
export async function GET(request) {
  const response = await fetch("http://localhost:3001/photographers");
  const data = await response.json();
  return Response.json(data); // ✅ this is App Router style
}