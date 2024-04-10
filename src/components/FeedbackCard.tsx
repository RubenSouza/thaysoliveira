import quotes from "../assets/quotes.svg";

type Props = {
  name: string;
  character: string;
  photo?: string;
  feedback: string;
};

const FeedbackCard = ({ name, character, photo, feedback }: Props) => {
  return (
    <div
      className="w-full h-[280px] border-[1px] 
    border-primary-200 rounded-xl bg-secondary-200/70 cursor-pointer "
    >
      <div className="flex px-6 md:px-10 pt-8 items-center justify-between">
        <div className="flex items-center">
          <div
            className="rounded-full bg-primary-100 h-14 w-14
          flex items-center justify-center"
          >
            <img src={photo} className="w-full rounded-full p-[1px]" />
          </div>
          <div className="text-primary-600 px-3">
            <h3 className="text-base md:text-xl font-semibold">{name}</h3>
            <p className="text-[11px] md:text-sm">{character}</p>
          </div>
        </div>
        <img src={quotes} alt="quotes" className="w-10" />
      </div>
      <div
        className="px-6 md:px-10 py-5 text-primary-600 
      text-sm "
      >
        {feedback}
      </div>
    </div>
  );
};

export default FeedbackCard;
