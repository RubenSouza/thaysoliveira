import quotes from "../assets/quotes.svg";
// import user from "../assets/user.svg";

type Props = {
  name: string;
  character: string;
  photo?: string;
  feedback: string;
};

const FeedbackCard = ({ name, character, photo, feedback }: Props) => {
  console.log(photo);
  return (
    <div
      className="w-[580px] h-[360px] border-[1px] 
    border-primary-200 rounded-xl bg-secondary-200/70"
    >
      <div className="flex px-10 pt-10 items-center justify-between">
        <div className="flex items-center">
          <div
            className="rounded-full bg-primary-100 w-20 h-20 
          flex items-center justify-center"
          >
            <img src={photo} className="w-full rounded-full p-[1px]" />
          </div>
          <div className="text-primary-600 px-3">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm">{character}</p>
          </div>
        </div>
        <img src={quotes} alt="quotes" className="w-12 h-12" />
      </div>
      <div className="px-10 py-6 text-primary-600 text-lg">{feedback}</div>
    </div>
  );
};

export default FeedbackCard;
