import capa from "../assets/capa.svg";
import blob from "../assets/blob.svg";

const Inicio = () => {
  return (
    <>
      <img
        src={blob}
        alt="light effect"
        className="absolute bottom-0 right-0 w-full"
      />
      <div
        className="w-[1200px] flex items-center justify-center overflow-hidden
     relative"
      >
        <div className=" h-full flex">
          <div className="flex justify-center items-start flex-col">
            <h1 className="text-9xl font-thin font-glossy">Thays Oliveira</h1>
            <h3 className="font-sans px-3">Professora de música</h3>
          </div>
          <div className="w-full h-full flex items-end justify-end ">
            <div className="">
              <img src={capa} className="h-[650px] z-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
