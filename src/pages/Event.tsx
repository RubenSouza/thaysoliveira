import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fundo from "../assets/fundo.jpg";
import recitalStudents from "../data/recitalStudents.json";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import PIX from "react-qrcode-pix";

type Student = {
  id: number;
  name: string;
  img: string;
};

const Event = () => {
  const [selectedStudent, setSelectedStudent] = useState({} as Student);
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [totalValue, setTotalValue] = useState(35);

  const first = recitalStudents.slice(0, 3);
  const second = recitalStudents.slice(3, 7);
  const third = recitalStudents.slice(7, 11);
  const fourth = recitalStudents.slice(11, 15);
  const fifth = recitalStudents.slice(15, 17);

  const handleStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleNextPage = () => {
    setNextPage(true);
  };

  useEffect(() => {
    setTotalValue(35 * counter);
  }, [totalValue, counter]);

  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div
        className="flex flex-col items-center justify-center  w-full h-full 
      bg-black bg-opacity-50"
      >
        <h1 className="text-lg 2xl:text-3xl font-bold text-white">
          Recital 2024
        </h1>
        <div className="flex flex-col items-center ">
          <p className="text-sm 2xl:text-base">
            Selecione o aluno que irá acompanhar
          </p>
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center justify-center py-2 2xl:py-6"
          >
            {/* 3 colunas */}
            <div className="grid grid-cols-3 gap-10 2xl:gap-16">
              {first.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-20 h-20 2xl:w-28 2xl:h-28 ${
                      selectedStudent?.name === student.name
                        ? "border-2 border-purple-500"
                        : "border-2 border-slate-300"
                    }`}
                  >
                    <img
                      src={student?.img}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <p>{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 4 colunas */}
            <div className="grid grid-cols-4 gap-10 2xl:gap-16">
              {second.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-20 h-20 2xl:w-28 2xl:h-28 ${
                      selectedStudent?.name === student.name
                        ? "border-2 border-purple-500"
                        : "border-2 border-slate-300"
                    }`}
                  >
                    <img
                      src={student?.img}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <p>{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 4 colunas */}
            <div className="grid grid-cols-4 gap-16">
              {third.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-20 h-20 2xl:w-28 2xl:h-28 ${
                      selectedStudent?.name === student.name
                        ? "border-2 border-purple-500"
                        : "border-2 border-slate-300"
                    }`}
                  >
                    <img
                      src={student?.img}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <p>{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 4 colunas */}
            <div className="grid grid-cols-4 gap-16">
              {fourth.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-20 h-20 2xl:w-28 2xl:h-28 ${
                      selectedStudent?.name === student.name
                        ? "border-2 border-purple-500"
                        : "border-2 border-slate-300"
                    }`}
                  >
                    <img
                      src={student?.img}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <p>{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 2 colunas */}
            <div className="grid grid-cols-2 gap-16">
              {fifth.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-20 h-20 2xl:w-28 2xl:h-28 ${
                      selectedStudent?.name === student.name
                        ? "border-2 border-purple-500"
                        : "border-2 border-slate-300"
                    }`}
                  >
                    <img
                      src={student?.img}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <p>{student?.name}</p>
                </div>
              ))}
            </div>
            <button
              className="bg-purple-500 p-2 text-sm uppercase rounded-lg 2xl:p-3 2xl:text-base mt-2 2xl:mt-4 
                disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-900 disabled:opacity-50"
              onClick={handleNextPage}
              disabled={!selectedStudent?.name}
            >
              continuar
            </button>
          </motion.div>
        </div>
        {nextPage && (
          <div className="absolute w-full h-screen bg-black/80 flex flex-col items-center justify-center">
            <div
              className="w-[400px] h-[500px] bg-slate-200 rounded-2xl 
            text-slate-900"
            >
              <div className="w-full h-full flex flex-col items-center my-10">
                <h1 className="text-3xl font-bold text-center ">
                  Confirmar Compra
                </h1>
                <div className="flex flex-col items-center justify-center">
                  <div className={`rounded-full w-16 h-16 `}>
                    <img
                      src={selectedStudent?.img}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <p>{selectedStudent?.name}</p>
                </div>
                <div>
                  <p className="text-center font-semibold">
                    Quantidade de acompanhantes:
                  </p>
                </div>
                <div
                  className="flex flex-col items-center justify-center
                   w-[200px] h-[190px] 
                 "
                >
                  <div
                    className="w-full flex justify-center rounded-t-2xl hover:cursor-pointer hover:bg-slate-300"
                    onClick={() => setCounter(counter + 1)}
                  >
                    <IoIosArrowUp className="w-10 h-10 2xl:w-16" />
                  </div>
                  <p className="text-8xl">{counter}</p>
                  <div
                    className="w-full flex justify-center rounded-b-2xl hover:cursor-pointer hover:bg-slate-300"
                    onClick={() => setCounter(counter - 1)}
                  >
                    <IoIosArrowDown className="w-10 h-10 2xl:w-16" />
                  </div>
                </div>
                <p className="font-semibold">Valor total: {totalValue}R$</p>
                <button
                  className="bg-purple-500 p-2 text-sm uppercase rounded-lg 2xl:p-3 2xl:text-base mt-2 2xl:mt-4 
                disabled:bg-slate-300 text-white"
                >
                  Gerar pix
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;

{
  //   <div className="flex flex-col items-center justify-center">
  //   <PIX
  //     pixkey="+5583981358394"
  //     merchant="Rúben Eliel"
  //     city="Campina Grande"
  //     cep="58460000"
  //     amount={100}
  //   />
  //   <p className="text-sm text-center">
  //     Escaneie o QR Code para prosseguir com o pagamento.
  //   </p>
  // </div>
}
