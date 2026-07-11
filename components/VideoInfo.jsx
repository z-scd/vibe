"use client";
import { useVideo } from "@/contexts/VideoContext";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemGroup,
  ItemHeader,
} from "@/components/ui/item";
import {
  Empty,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import { VideoIcon } from "lucide-react";

export default function VideoInfo() {
  const { videoInfo } = useVideo();

  return (
    <>
      {videoInfo ? (
        <ItemGroup>
          <Item>
            <ItemHeader className="items-center gap-2">
              <ItemMedia varient="icon">
                <VideoIcon width={24} />
              </ItemMedia>
              <ItemTitle className="text-lg font-semibold text-slate-900">
                Video Description
              </ItemTitle>
            </ItemHeader>
            <ItemContent className="space-y-2">
              <ItemDescription className="text-sm text-slate-700">
                <span className="font-bold"> Video Title:</span>{" "}
                {videoInfo?.videoTitle}
              </ItemDescription>
              <ItemDescription className="text-sm text-slate-700">
                <span className="font-bold"> Published at:</span>{" "}
                {new Date(videoInfo?.publishedAt).toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </ItemDescription>
              <ItemDescription className="text-sm text-slate-700">
                <span className="font-bold"> Publisher:</span>{" "}
                {videoInfo?.channelTitle}
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      ) : (
        <Empty>
          <EmptyMedia variant="icon">
            <VideoIcon width={24} />
          </EmptyMedia>
          <EmptyContent>
            <EmptyTitle className="text-base font-semibold text-slate-900">
              Video information is not available
            </EmptyTitle>
            <EmptyDescription className="text-sm text-muted-foreground">
              To get information you must provide a YouTube video link.
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      )}
    </>
  );
}
