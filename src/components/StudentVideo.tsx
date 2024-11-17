"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import dynamic from "next/dynamic";

// Carrega o player dinamicamente sem SSR
const MediaPlayer = dynamic(
  () => import("@vidstack/react").then(mod => mod.MediaPlayer),
  { ssr: false }
);
const MediaProvider = dynamic(
  () => import("@vidstack/react").then(mod => mod.MediaProvider),
  { ssr: false }
);

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import { Poster } from "@vidstack/react";

type Props = {
  videoId: string;
};

const StudentVideo = ({ videoId }: Props) => {
  return (
    <div className="w-[300px] max-w-[350px] h-[500px] relative">
      <MediaPlayer
        title="Vídeo do aluno"
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        src={`youtube/${videoId}`}
        aspectRatio="9/16"
      >
        <MediaProvider>
          <Poster
            className="absolute inset-0 block h-full w-full rounded-md opacity-0 
            transition-opacity data-[visible]:opacity-100 object-cover"
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Poster do vídeo"
          />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default StudentVideo;
