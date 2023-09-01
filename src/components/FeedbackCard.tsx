import quotes from "../assets/quotes.svg";
import user from "../assets/user.svg";

type Props = {
  name: string;
  character: string;
  photo?: string;
  feedback: string;
};

const FeedbackCard = ({ name, character, feedback }: Props) => {
  return (
    <div
      className="w-[580px] h-[360px] border-[1px] 
    border-primary-200 rounded-xl bg-secondary-200/70"
    >
      <div className="flex p-10 items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full bg-white w-20 h-20 flex items-center justify-center">
            <img src={user} className="w-12 h-12" />
          </div>
          <div className="text-primary-600 px-3">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm">{character}</p>
          </div>
        </div>
        <img src={quotes} alt="quotes" className="w-12 h-12" />
      </div>
      <div className="px-10 text-primary-600 ">
        <p className="text-base">{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
