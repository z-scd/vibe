import { google } from "googleapis";

const apiKey = process.env.GOOGLE_DATA_API;

const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

const getComments = async (videoId) => {
  const res = await youtube.commentThreads.list({
    videoId: videoId,
    maxResults: 10,
    part: "snippet",
  });

  const commentsObject = [];

  res.data.items.forEach((item) => {
    comments.push(item.snippet.topLevelComment.snippet.textDisplay);
    const snippet = item.snippet.topLevelComment.snippet;
    commentsObject.push({
      comment: snippet.textDisplay,
      authorName: snippet.authorDisplayName,
      authorImageUrl: snippet.authorProfileImageUrl,
      likeCount: snippet.likeCount,
      commentedAt: snippet.publishedAt,
    });
  });

  commentsObject.forEach((comment) => console.log(comment));

  return commentsObject;
};
