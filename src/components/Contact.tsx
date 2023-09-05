import Title from "./Title";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import youtube from "../assets/youtube.svg";
import email from "../assets/email.svg";

const Contact = () => {
  return (
    <div className="w-[1200px]  space-y-2">
      <div className="space-y-1">
        <Title title="Contato" line="w-[55px]" />
        <h2 className="text-3xl font-semibold text-primary-100 font-serif">
          Agende sua aula experimental
        </h2>
      </div>
      <div className="py-10 flex w-full justify-between ">
        <div className=" ">
          <img src={logo} alt="logo" className="w-[350px]" />
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          {/* instagram */}
          <a href="https://www.instagram.com/thaysoliveira.a/" target="_blank">
            <div
              className="w-[375px] h-[105px] border border-primary-100 rounded-lg
            hover:bg-primary-500/20"
            >
              <div className="flex justify-between items-center w-full h-full px-5">
                <div>
                  <h4 className="text-2xl font-serif">Instagram</h4>
                  <p className="text-xs text-primary-500">
                    Perfil profissional de imagens
                  </p>
                </div>
                <img src={instagram} />
              </div>
            </div>
          </a>
          {/* whatsappp */}
          <a href="https://wa.me/5583991029054" target="_blank">
            <div
              className="w-[375px] h-[105px] border border-primary-100 rounded-lg
            hover:bg-primary-500/20"
            >
              <div className="flex justify-between items-center w-full h-full px-5">
                <div>
                  <h4 className="text-2xl font-serif">Whatsapp</h4>
                  <p className="text-xs text-primary-500">
                    Contato profissional
                  </p>
                </div>
                <img src={whatsapp} />
              </div>
            </div>
          </a>
          {/* Youtube */}
          <a href="https://www.youtube.com/@ThaysOliveira" target="_blank">
            <div
              className="w-[375px] h-[105px] border border-primary-100 rounded-lg
            hover:bg-primary-500/20"
            >
              <div className="flex justify-between items-center w-full h-full px-5">
                <div>
                  <h4 className="text-2xl font-serif">Youtube</h4>
                  <p className="text-xs text-primary-500">
                    Perfil pessoal de vídeos
                  </p>
                </div>
                <img src={youtube} />
              </div>
            </div>
          </a>
          {/* Email */}
          <a href="mailto:thaysoliveira@gmail.com">
            <div
              className="w-[375px] h-[105px] border border-primary-100 rounded-lg
            hover:bg-primary-500/20"
            >
              <div className="flex justify-between items-center w-full h-full px-5">
                <div>
                  <h4 className="text-2xl font-serif">Email</h4>
                  <p className="text-xs text-primary-500">
                    thaysoliveira@gmail.com
                  </p>
                </div>
                <img src={email} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
