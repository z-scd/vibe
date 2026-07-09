import "./globals.css";

export const metadata = {
  title: "Vibe: Youtube Video Sentiment Analyzer",
  description: "Youtube video sentimenatl analysis through comments",
  keywords:
    "sentiment analysis, youtube video, multilanguage sentiment analysis",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
