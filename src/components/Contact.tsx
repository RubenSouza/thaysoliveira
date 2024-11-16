import Title from "./Title";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import youtube from "../assets/youtube.svg";
import email from "../assets/email.svg";
import ContactCard from "./ContactCard";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full md:w-[1200px] px-4 md:px-0 space-y-2">
      <div className="space-y-1">
        <Title title="Contatos" line="w-[65px]" />
        <h2 className="text-xl md:text-3xl font-semibold text-primary-100 font-serif">
          Consultar horários disponíveis
        </h2>
      </div>
      <div className="py-10 flex flex-col md:flex-row w-full items-center md:justify-between ">
        <div className="">
          <Image
            src={logo}
            width={400}
            height={400}
            alt="logo"
            className="w-[200px] md:w-[350px]"
          />
        </div>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-4 py-4 md:py-0">
          {/* instagram */}
          <ContactCard
            link="https://www.instagram.com/thaysoliveira.a/"
            title="Instagram"
            description="Perfil profissional de imagens"
            image={instagram}
          />
          {/* whatsappp */}
          <ContactCard
            link="https://wa.me/5583991029054"
            title="Whatsapp"
            description="Contato profissional"
            image={whatsapp}
          />
          {/* Youtube */}
          <ContactCard
            link="https://www.youtube.com/@ThaysOliveira"
            title="Youtube"
            description="Perfil pessoal de vídeos"
            image={youtube}
          />
          {/* Email */}
          <ContactCard
            link="mailto:profs.thaysoliveira@gmail.com"
            title="Email"
            description="profs.thaysoliveira@gmail.com"
            image={email}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
