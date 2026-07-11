import { google } from "googleapis";

const apiKey = process.env.GOOGLE_DATA_API;

const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

export default async function getVideoInfo(videoId) {
  const res = await youtube.videos.list({
    id: videoId,
    part: "snippet",
  });

  const snippet = res.data.items[0].snippet;
  const videoInfo = {
    publishedAt: snippet.publishedAt,
    videoTitle: snippet.title,
    channelTitle: snippet.channelTitle,
    channelThumbnail: snippet.thumbnails.standard.url,
  };

  return videoInfo;
}
