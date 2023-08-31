import quotes from "../assets/quotes.svg";
import user from "../assets/user.svg";
// type Props = {
//     name:string;
//     character:string;
//     photo:string;
//     feedback:string;
// }

const FeedbackCard = () => {
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
            <h3 className="text-xl font-semibold">Marta Alves</h3>
            <p className="text-sm">Mãe do aluno</p>
          </div>
        </div>
        <img src={quotes} alt="quotes" className="w-12 h-12" />
      </div>
      <div className="px-10 text-primary-600 ">
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
          nunc nec nibh aliquet fringilla. Proin nec luctus velit, ut elementum
          purus. Nunc varius, urna et vehicula luctus, arcu eros fermentum
          augue, ut sagittis justo lacus eu turpis. Phasellus et vestibulum
          nulla. Etiam vel mi sed ante iaculis aliquam. Fusce fermentum est
          elit, id tincidunt turpis tempus eu. Phasellus id elit dolor.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;

// {name,character,photo,feedback}: Props
