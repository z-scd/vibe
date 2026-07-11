"use client";
import Image from "next/image";
import { useThumbnail } from "@/contexts/ThumbnailContext";
import { Button } from "./ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import { useUrl } from "@/contexts/UrlContext";
import Link from "next/link";

export default function Thumbnail() {
  const { thumbnailUrl, title } = useThumbnail();
  const { url } = useUrl();
  return (
    <>
      <Image
        src={thumbnailUrl ? thumbnailUrl : "/images/placeholder.jpg"}
        alt="Thumbnail Placeholder"
        width={"600"}
        height={400}
      />
      <Item>
        <ItemContent>
          <ItemTitle className="text-lg font-semibold">
            {title ? title : "Submit a valid youtube url!"}
          </ItemTitle>
        </ItemContent>
        <ItemActions>
          {title && (
            <Button className="text-base font-semibold">
              <a target="_blank" href={url}>
                Visit
              </a>
            </Button>
          )}
        </ItemActions>
      </Item>
    </>
  );
}
