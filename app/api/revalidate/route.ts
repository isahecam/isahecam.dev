import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SANITY_REVALIDATE_TAGS: Record<string, string> = {
  project: "projects",
  technology: "technologies",
  experience: "experiences",
};

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const reqBody = await req.json();
    const sanityType = reqBody?._type as string;

    if (!sanityType) {
      return NextResponse.json({ message: "Missing _type in request body" }, { status: 400 });
    }

    const sanityRevalidateTag = SANITY_REVALIDATE_TAGS[sanityType];

    if (!sanityRevalidateTag) {
      return NextResponse.json({ message: `No revalidate tag found for _type: ${sanityType}` }, { status: 400 });
    }

    revalidateTag(sanityRevalidateTag, "max");
    return NextResponse.json({ revalidated: true, tag: sanityRevalidateTag });
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }
}
