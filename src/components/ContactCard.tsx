import Image from "next/image";

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
        className="w-[60px] md:w-[375px] h-full md:h-[105px] border border-primary-100 md:rounded-lg
            hover:bg-primary-500/20 rounded-full"
      >
        <div className="flex justify-between items-center w-full h-full ">
          <div className="hidden md:inline px-5">
            <h4 className="text-2xl font-serif">{title}</h4>
            <p className="text-xs text-primary-500">{description}</p>
          </div>
          <Image
            alt="logo"
            width={90}
            height={90}
            src={image}
            className="invert opacity-80 md:invert-0 md:opacity-100 p-3"
          />
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
