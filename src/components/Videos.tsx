import ThaysVideo from "./ThaysVideo";
import Title from "./Title";

const Videos = () => {
  return (
    <div
      className="w-full md:h-[500px] flex flex-col 
    items-center justify-start md:w-[1200px] py-5 md:py-10 "
    >
      <Title title="Vídeos" line="w-[50px]" />
      <div
        className="w-full px-4 md:px-0 my-auto flex flex-col md:flex-row 
      md:justify-between space-y-4 md:space-y-0 pt-10"
      >
        <ThaysVideo videoId="u-WY05TNY60" />
        <ThaysVideo videoId="he4gnkr654A" />
      </div>
    </div>
  );
};

export default Videos;
