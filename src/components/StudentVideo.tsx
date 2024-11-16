"use client";

type Props = {
  videoId: string;
};

const StudentVideo = ({ videoId }: Props) => {
  const iframeUrl = `https://www.youtube.com/embed/${videoId}?controls=1&rel=0&showinfo=0`;

  return (
    <div className="w-[300px] md:w-[350px] h-[500px] md:h-[550px]">
      <iframe
        width="100%"
        height="100%"
        src={iframeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default StudentVideo;
