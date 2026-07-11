import { google } from "googleapis";

const apiKey = process.env.GOOGLE_DATA_API;

const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

export default async function getComments(videoId) {
  const res = await youtube.commentThreads.list({
    videoId: videoId,
    maxResults: 10,
    part: "snippet",
  });

  const commentsObject = [];

  res.data.items.forEach((item) => {
    const snippet = item.snippet.topLevelComment.snippet;
    commentsObject.push({
      comment: snippet.textDisplay,
      authorName: snippet.authorDisplayName,
      authorImageUrl: snippet.authorProfileImageUrl,
      likeCount: snippet.likeCount,
      commentedAt: snippet.publishedAt,
    });
  });

  return commentsObject;
}
