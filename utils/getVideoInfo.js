import { google } from "googleapis";

const apiKey = process.env.GOOGLE_DATA_API;

const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

const getVideoInfo = async (videoId) => {
  const res = await youtube.videos.list({
    id: videoId,
    part: "snippet",
  });

  const snippet = res.data.items[0].snippet;
  const videoInfo = {
    publishedAt: snippet.publishedAt,
    title: snippet.title,
    channelTitle: snippet.channelTitle,
    thumbnail: snippet.thumbnails.standard.url,
  };
};

getVideoInfo("WRMqBdRFrB0");
