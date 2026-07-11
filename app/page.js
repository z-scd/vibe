import Form from "@/components/Form";
import ContentPageLayout from "@/components/HomePageGrid";
import Thumbnail from "@/components/Thumbnail";
import ThumbnailProvider from "@/contexts/ThumbnailContext";
import { CommentsProvider } from "@/contexts/CommentsContext";
import Comments from "@/components/Comments";
import { VideoProvider } from "@/contexts/VideoContext";
import VideoInfo from "@/components/VideoInfo";
import { UrlProvider } from "@/contexts/UrlContext";
export default function MainPage() {
  return (
    <ThumbnailProvider>
      <CommentsProvider>
        <VideoProvider>
          <UrlProvider>
            <ContentPageLayout
              form={<Form />}
              thumbnail={<Thumbnail />}
              comments={<Comments />}
              stats={<VideoInfo />}
            />
          </UrlProvider>
        </VideoProvider>
      </CommentsProvider>
    </ThumbnailProvider>
  );
}
