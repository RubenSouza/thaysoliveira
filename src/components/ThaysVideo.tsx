"use client";

type Props = {
  videoId: string;
};

const ThaysVideo = ({ videoId }: Props) => {
  return (
    <div className="w-full md:w-[550px]">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default ThaysVideo;
