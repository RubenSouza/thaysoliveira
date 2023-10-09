import capa from "../assets/capa.svg";
import blob from "../assets/blob.png";

const Inicio = () => {
  return (
    <>
      <img
        src={blob}
        alt="light effect"
        className="absolute bottom-0 right-0 h-full w-full animate animate-pulse-slow"
      />
      <div
        className="w-full md:w-[1200px] flex items-center justify-center overflow-hidden
     relative"
      >
        <div className="px-4 md:px-0 h-full flex">
          <div className="flex justify-center items-start flex-col pt-16">
            <h1 className="md:text-9xl font-thin font-glossy text-[32px] leading-tight">
              Thays Oliveira
            </h1>
            <h3 className="font-sans md:px-3 text-[11px]">
              Professora de música
            </h3>
          </div>
          <div className="w-full h-full flex items-end justify-end ">
            <div className="">
              <img src={capa} className="h-full md:h-[650px] z-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
