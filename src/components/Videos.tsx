import ThaysVideo from "./ThaysVideo";
import Title from "./Title";

const Videos = () => {
  return (
    <div
      className="h-[500px] flex flex-col 
    items-center justify-start space-y-14 w-[1200px] py-10"
    >
      <Title title="Vídeos" line="w-[50px]" />
      <div className="w-full flex justify-between">
        <ThaysVideo videoId="u-WY05TNY60" />
        <ThaysVideo videoId="he4gnkr654A" />
      </div>
    </div>
  );
};

export default Videos;
