type Props = {
  link: string;
  title: string;
  description: string;
  image: string;
};

const ContactCard = ({ link, title, description, image }: Props) => {
  return (
    <a href={link} target="_blank">
      <div
        className="w-[95px] md:w-[375px] h-[95px] md:h-[105px] border border-primary-100 md:rounded-lg
            hover:bg-primary-500/20 rounded-full"
      >
        <div className="flex justify-between items-center w-full h-full px-5">
          <div className="hidden md:inline">
            <h4 className="text-2xl font-serif">{title}</h4>
            <p className="text-xs text-primary-500">{description}</p>
          </div>
          <img
            src={image}
            className="invert opacity-80 md:invert-0 md:opacity-100"
          />
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
