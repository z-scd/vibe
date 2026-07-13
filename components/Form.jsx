"use client";
import * as z from "zod";

import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { toast, Toaster } from "sonner";
import { useThumbnail } from "@/contexts/ThumbnailContext";
import { useComments } from "@/contexts/CommentsContext";
import { useVideo } from "@/contexts/VideoContext";
import { useUrl } from "@/contexts/UrlContext";
import { LoaderIcon } from "lucide-react";
export default function Form() {
  const { setUrl } = useUrl();
  const { setComments } = useComments();
  const { setVideoInfo } = useVideo();
  const { setThumbnailUrl, setTitle } = useThumbnail();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const urlSchema = z.object({
    url: z
      .url("Must be a valid URL!")
      .refine(
        (url) => url.includes("youtube.com") || url.includes("youtu.be"),
        {
          message: "Must be a valid YouTube URL!",
        },
      ),
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGotResponse(false);
    setInput("");
    const form = e.target;
    const formData = new FormData(form);
    const formValues = {
      url: formData.get("url"),
    };

    const result = urlSchema.safeParse(formValues);
    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      toast("Error Occured", {
        description: errorMessage,
        position: "top-center",
      });
      setLoading(false);
      return;
    }

    setUrl(formValues.url);

    const response = await fetch("/api/fetchUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formValues.url }),
    });

    if (!response.ok) {
      throw new Error(`Http response error. Status: ${response.status}`);
    }

    const json = await response.json();
    if (json) setGotResponse(true);
    setThumbnailUrl(json?.data?.videoInfo?.channelThumbnail);
    setTitle(json?.data?.videoInfo?.videoTitle);
    setVideoInfo(json?.data?.videoInfo);
    setComments(json?.data?.comments);
    setLoading(false);
  };

  return (
    <>
      <Toaster />
      <Card className="w-full max-w-sm border-1">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Youtube Video Vibe Check
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter video url to check the VIBE of the video!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="url" className="text-sm font-medium">
                Enter Url
              </Label>
              <Input
                id="url"
                name="url"
                value={input}
                onChange={handleChange}
                className="text-base placeholder:text-muted-foreground"
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            </div>
            <Button
              className="w-full py-3 text-base font-semibold"
              type="submit"
              disabled={!input || loading}
            >
              {loading ? <LoaderIcon className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
