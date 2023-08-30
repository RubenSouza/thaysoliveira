import capa from "../assets/capa.svg";
import blob1 from "../assets/blob1.svg";

const Inicio = () => {
  return (
    <>
      <img src={blob1} className="absolute bottom-0 right-0 w-full" />
      <div
        className="w-[1200px] h-[670px]  flex items-center justify-center overflow-hidden
     relative"
      >
        <div className=" h-full flex">
          <div className="flex justify-center items-start flex-col">
            <h1 className="text-9xl font-semibold font-serif">
              Thays Oliveira
            </h1>
            <h3 className="text-xl">Professora de música</h3>
          </div>
          <div className="w-full h-full flex items-end justify-end ">
            <div className="">
              <img src={capa} className="h-[670px] z-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
