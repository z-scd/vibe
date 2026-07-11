import getComments from "@/utils/getComments";
import getVideoInfo from "@/utils/getVideoInfo";

export async function POST(request) {
  const body = await request.json();
  const id = body.url.split("=").at(-1);
  const { comment, authorName, authorImageUrl, likeCount, commentedAt } =
    getComments(id);
  const { publishedAt, videoTitle, channelTitle, channelThumbnail } =
    getVideoInfo(id);
  return new Response(id, { status: 200 });
}
