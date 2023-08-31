import crianca from "../assets/crianca.svg";
import purpleimg from "../assets/purpleimg.svg";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="w-[1200px] py-10">
      <div className="flex justify-between items-center">
        <img src={crianca} className="w-[400px]" />
        <div className="w-[500px] space-y-2">
          <Title title="Sobre mim" line="w-[81px]" />
          <h2 className="text-3xl font-semibold text-primary-200">
            A vida é uma música e a nossa história é a letra
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            nunc nec nibh aliquet fringilla. Proin nec luctus velit, ut
            elementum purus. Nunc varius, urna et vehicula luctus, arcu eros
            fermentum augue, ut sagittis justo lacus eu turpis. Phasellus et
            vestibulum nulla. Etiam vel mi sed ante iaculis aliquam. Fusce
            fermentum est elit, id tincidunt turpis tempus eu. Phasellus id elit
            dolor.
          </p>
          <div className="flex space-x-3">
            <h3 className="text-6xl font-bold text-primary-300">19</h3>
            <p className="text-xl w-[100px] font-semibold pt-1">
              Anos de experiência
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-10">
        <div className="w-[500px] space-y-2">
          <h2 className="text-3xl font-semibold text-primary-200">
            A vida é uma música e a nossa história é a letra
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            nunc nec nibh aliquet fringilla. Proin nec luctus velit, ut
            elementum purus. Nunc varius, urna et vehicula luctus, arcu eros
            fermentum augue, ut sagittis justo lacus eu turpis. Phasellus et
            vestibulum nulla. Etiam vel mi sed ante iaculis aliquam. Fusce
            fermentum est elit, id tincidunt turpis tempus eu. Phasellus id elit
            dolor.
          </p>
          <div className="flex space-x-3">
            <h3 className="text-6xl font-bold text-primary-300">19</h3>
            <p className="text-xl w-[100px] font-semibold pt-1">
              Anos de experiência
            </p>
          </div>
        </div>
        <img src={purpleimg} className="w-[400px]" />
      </div>
    </div>
  );
};

export default AboutMe;
