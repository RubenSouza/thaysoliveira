"use client";

import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";

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
const PlyrLayout = dynamic(
  () =>
    import("@vidstack/react/player/layouts/plyr").then(mod => mod.PlyrLayout),
  { ssr: false }
);

import { plyrLayoutIcons } from "@vidstack/react/player/layouts/plyr";

type Props = {
  videoId: string;
};

const ThaysVideo = ({ videoId }: Props) => {
  return (
    <div className="w-full md:w-[550px]">
      <MediaPlayer title="Sprite Fight" src={`youtube/${videoId}`}>
        <MediaProvider />
        <PlyrLayout icons={plyrLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default ThaysVideo;
