import { Player, Youtube, DefaultControls, ClickToPlay } from "@vime/react";

type Props = {
  videoId: string;
};

const ThaysVideo = ({ videoId }: Props) => {
  return (
    <div className="w-[550px]">
      <Player playbackQuality="auto" volume={50}>
        <Youtube videoId={videoId} />
        <DefaultControls hideOnMouseLeave />
        <ClickToPlay />
      </Player>
    </div>
  );
};

export default ThaysVideo;
