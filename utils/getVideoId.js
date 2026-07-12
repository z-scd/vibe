function getYouTubeVideoId(url) {
  if (!url || typeof url !== "string") return null;

  try {
    const normalized = url.trim().match(/^https?:\/\//)
      ? url.trim()
      : `https://${url.trim()}`;
    const parsed = new URL(normalized);
    const host = parsed.hostname.replace(/^www\./, "").replace(/^m\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return isValidId(id) ? id : null;
    }

    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return isValidId(id) ? id : null;
      }

      const segments = parsed.pathname.split("/").filter(Boolean);

      if (
        segments.length >= 2 &&
        ["embed", "shorts", "v", "live"].includes(segments[0])
      ) {
        const id = segments[1];
        return isValidId(id) ? id : null;
      }
    }

    return null;
  } catch {
    return null;
  }
}

function isValidId(id) {
  return typeof id === "string" && /^[a-zA-Z0-9_-]{11}$/.test(id);
}

export default getYouTubeVideoId;
