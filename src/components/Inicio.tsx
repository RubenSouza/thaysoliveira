import capa from "../assets/capa.webp";
import blob from "../assets/blob.webp";
import Particle from "./Particle";

const Inicio = () => {
  return (
    <>
      <Particle />
      <img
        src={blob}
        alt="light effect"
        className="absolute bottom-0 right-0 h-full w-full animate animate-pulse-slow"
      />
      <div
        className="w-full h-full max-h-full lg:w-[1100px] 2xl:w-[1200px] 
         relative "
      >
        <div
          className="px-4 md:px-0 h-full flex flex-col justify-end items-center 
         lg:flex-row "
        >
          <div
            className="flex h-full justify-center items-center flex-col 
            lg:pt-16 pt-24 text-center lg:text-left lg:items-start"
          >
            <h1
              className="xl:text-9xl font-thin font-glossy text-3xl 
            min-[340px]:text-7xl md:text-8xl leading-tight"
            >
              Thays Oliveira
            </h1>
            <h3
              className="font-sans md:px-3 text-[12px] 
            md:text-sm"
            >
              Professora de música
            </h3>
          </div>
          <div
            className="w-full lg:h-full flex items-end
           justify-end"
          >
            <div className="">
              <img
                src={capa}
                className="z-20 w-[400px]
                md:w-[580px] lg:w-[600px] 2xl:w-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
