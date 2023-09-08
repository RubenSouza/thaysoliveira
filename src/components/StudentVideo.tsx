import {
  Ui,
  ClickToPlay,
  Spinner,
  Poster,
  Player,
  Youtube,
  DefaultControls,
} from "@vime/react";

type Props = {
  videoId: string;
};

const StudentVideo = ({ videoId }: Props) => {
  return (
    <div className="w-[300px] md:w-[350px]">
      <Player aspectRatio="4:5" playbackQuality="auto" volume={70}>
        <Youtube videoId={videoId} />
        <Ui>
          <ClickToPlay />
          <Spinner />
          <Poster />
          <DefaultControls activeDuration={1200} hideOnMouseLeave />
        </Ui>
      </Player>
    </div>
  );
};

export default StudentVideo;
