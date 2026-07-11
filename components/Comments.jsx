"use client";
import React from "react";
import { useComments } from "@/contexts/CommentsContext";
import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemSeparator,
  ItemFooter,
  ItemMedia,
  ItemGroup,
  ItemTitle,
  ItemHeader,
} from "@/components/ui/item";
import { MessageSquare, Box, ThumbsUp } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function Comments() {
  const { comments } = useComments();
  return (
    <div className="flex flex-col gap-2">
      <Item>
        <ItemMedia>
          <MessageSquare />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-lg font-semibold">
            Comments from the provided YouTube video link
          </ItemTitle>
        </ItemContent>
      </Item>
      {comments && comments.length > 0 ? (
        <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden space-y-2">
          <ItemGroup className="min-w-0">
            {comments.map((item, idx) => (
              <React.Fragment key={item.commentedAt ?? idx}>
                <Item>
                  <ItemHeader>
                    <ItemMedia variant="image">
                      <Image
                        src={item?.authorImageUrl}
                        width={20}
                        height={20}
                        className="rounded-full"
                        alt={item?.authorName || "author"}
                      />
                    </ItemMedia>
                    <ItemTitle className="text-sm font-semibold text-slate-900">
                      {item?.authorName}
                    </ItemTitle>
                  </ItemHeader>
                  <ItemContent>
                    <ItemDescription className="text-sm text-slate-700">
                      {item?.comment}
                    </ItemDescription>
                  </ItemContent>
                  <ItemFooter>
                    <ItemDescription className="flex gap-2 items-center text-xs text-muted-foreground">
                      <ThumbsUp width="12" />
                      {item?.likeCount}
                    </ItemDescription>
                    <ItemDescription className="text-xs text-muted-foreground">
                      {new Date(item?.commentedAt).toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </ItemDescription>
                  </ItemFooter>
                </Item>
                <ItemSeparator />
              </React.Fragment>
            ))}
          </ItemGroup>
        </div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Box />
            </EmptyMedia>
            <EmptyTitle>Empty Comments</EmptyTitle>
            <EmptyDescription>
              Provide YouTube video link for load comments
            </EmptyDescription>
          </EmptyHeader>
          {/* <EmptyContent>
            <Button>Add data</Button>
          </EmptyContent> */}
        </Empty>
      )}
    </div>
  );
}
