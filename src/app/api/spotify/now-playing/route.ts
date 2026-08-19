import { getNowPlaying } from "@/features/spotify/lib/get-now-playing";

export async function GET() {
  const track = await getNowPlaying();
  return Response.json(track);
}
