import fundo from "../assets/fundo.jpg";

const Event = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full 
      bg-black bg-opacity-50"
      >
        <h1 className="text-3xl font-bold text-white">Event</h1>
      </div>
    </div>
  );
};

export default Event;
