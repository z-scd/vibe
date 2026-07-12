import getComments from "@/utils/getComments";
import getVideoInfo from "@/utils/getVideoInfo";
import getYouTubeVideoId from "@/utils/getVideoId";
export async function POST(request) {
  const body = await request.json();
  const id = getYouTubeVideoId(body.url);
  const comments = await getComments(id);
  const { publishedAt, videoTitle, channelTitle, channelThumbnail } =
    await getVideoInfo(id);

  return new Response(
    JSON.stringify({
      status: 200,
      data: {
        videoInfo: {
          publishedAt,
          videoTitle,
          channelTitle,
          channelThumbnail,
        },
        comments,
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
