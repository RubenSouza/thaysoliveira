import quotes from "../assets/quotes.svg";
// import user from "../assets/user.svg";

type Props = {
  name: string;
  character: string;
  photo?: string;
  feedback: string;
};

const FeedbackCard = ({ name, character, photo, feedback }: Props) => {
  return (
    <div
      className="w-full md:w-[580px] h-[370px] md:h-[360px] border-[1px] 
    border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer"
    >
      <div className="flex px-10 pt-10 items-center justify-between">
        <div className="flex items-center">
          <div
            className="rounded-full bg-primary-100 w-16  md:w-20 h-16 md:h-20 
          flex items-center justify-center"
          >
            <img src={photo} className="w-full rounded-full p-[1px]" />
          </div>
          <div className="text-primary-600 px-3">
            <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
            <p className="text-xs md:text-sm">{character}</p>
          </div>
        </div>
        <img src={quotes} alt="quotes" className="w-10 md:w-12 h-10 md:h-12" />
      </div>
      <div className="px-10 py-4 md:py-6 text-primary-600 text-base md:text-lg">
        {feedback}
      </div>
    </div>
  );
};

export default FeedbackCard;
