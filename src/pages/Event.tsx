import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import fundo from "../assets/fundo.jpg";
import recitalStudents from "../data/recitalStudents.json";
import { registerTicket } from "../utils/ticket";
import { IoIosArrowUp, IoIosArrowDown, IoMdCopy } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";

import PIX from "react-qrcode-pix";
import toast, { Toaster } from "react-hot-toast";

type Student = {
  id: number;
  name: string;
  img: string;
};

const Event = () => {
  const [selectedStudent, setSelectedStudent] = useState({} as Student);
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [totalValue, setTotalValue] = useState(30);
  const [fullPIX, setFullPIX] = useState("");
  const [isPix, setIsPix] = useState(false);
  const inAreaRef = useRef<HTMLDivElement | null>(null);

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

  const handleCopy = () => {
    toast.success("PIX copiado!", {
      duration: 3000,
    });
  };

  const handlePix = async () => {
    setIsPix(true);
    const data = {
      aluno: selectedStudent?.name,
      quantidade: counter,
      valor: totalValue,
    };
    try {
      await registerTicket(data);
    } catch (error) {
      console.log("Erro ao registrar ticket", error);
    }
  };

  useEffect(() => {
    setTotalValue(30 * counter);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        nextPage &&
        inAreaRef.current &&
        !inAreaRef.current.contains(event.target as Node)
      ) {
        setNextPage(false);
        setIsPix(false);
        setCounter(1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [totalValue, counter, nextPage]);

  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <Toaster />
      <div
        className="flex flex-col items-center justify-center  w-full h-full 
      bg-black bg-opacity-50"
      >
        <h1 className="text-lg 2xl:text-3xl font-bold text-white pb-2">
          Recital 2024
        </h1>
        <div className="flex flex-col items-center ">
          <p className="text-xs 2xl:text-base text-center pb-4">
            Efetue a compra do seu ingresso individual <br />
            ou selecione o aluno que irá acompanhar
          </p>
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col items-center justify-center py-2 2xl:py-6"
          >
            {/* 3 colunas */}
            <div className="grid grid-cols-3 gap-6 xl:gap-10 2xl:gap-16">
              {first.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-14 h-14 sm:16 sm:h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 ${
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
                  <p className="text-sm xl:text-base">{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 4 colunas */}
            <div className="grid grid-cols-4 gap-8 xl:gap-10 2xl:gap-16">
              {second.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-14 h-14 sm:16 sm:h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 ${
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
                  <p className="text-sm xl:text-base">{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 4 colunas */}
            <div className="grid grid-cols-4 gap-9 xl:gap-10 2xl:gap-16">
              {third.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-14 h-14 sm:16 sm:h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 ${
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
                  <p className="text-sm xl:text-base">{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 4 colunas */}
            <div className="grid grid-cols-4 gap-8 xl:gap-10 2xl:gap-16">
              {fourth.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-14 h-14 sm:16 sm:h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 ${
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
                  <p className="text-sm xl:text-base">{student?.name}</p>
                </div>
              ))}
            </div>
            {/* 2 colunas */}
            <div className="grid grid-cols-2 gap-8 xl:gap-10 2xl:gap-16">
              {fifth.map((student, i) => (
                <div
                  className="w-full flex flex-col items-center cursor-pointer"
                  key={i}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-14 h-14 sm:16 sm:h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 ${
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
                  <p className="text-sm xl:text-base">{student?.name}</p>
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
          <div
            className="absolute w-full h-screen bg-black/80 flex flex-col items-center justify-center"
            id="out_area"
          >
            <div
              className="w-[300px] h-[500px] lg:w-[400px] bg-slate-200 rounded-2xl 
            text-slate-900"
              id="in_area"
              ref={inAreaRef}
            >
              {!isPix ? (
                <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
                  <div className="w-full space-y-3">
                    <h1 className="text-2xl font-bold text-center ">
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
                  </div>
                  <div className="flex flex-col items-center w-full  justify-center space-y-5">
                    <p className="text-center font-semibold">
                      Quantidade de acompanhantes:
                    </p>
                    <div
                      className="flex flex-col items-center justify-center
                  w-[200px]
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
                      <p className="font-semibold">
                        Valor total: {totalValue}R$
                      </p>
                      <button
                        className="bg-purple-500 p-2 text-sm uppercase rounded-lg 2xl:p-3 2xl:text-base mt-2 2xl:mt-4
               disabled:bg-slate-300 text-white"
                        onClick={handlePix}
                      >
                        Gerar pix
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
                  <div className="w-full space-y-3">
                    <h1 className="text-2xl font-bold text-center ">
                      Confirmar Compra
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-xs px-12 py-2 text-center">
                        Escaneie o QR Code para prosseguir com o pagamento.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <PIX
                      pixkey="profs.thaysoliveira@gmail.com"
                      merchant="Virginia Thays da Silva Oliveira"
                      onLoad={setFullPIX}
                      resize={160}
                      city="Campina Grande"
                      cep="58460000"
                      amount={totalValue}
                    />
                    <CopyToClipboard text={fullPIX} onCopy={handleCopy}>
                      <button
                        className="my-2 flex border bg-slate-300 p-2 text-sm items-center justify-center 
                    rounded-md border-slate-400 px-6 text-slate-600 cursor-pointer"
                      >
                        <IoMdCopy className="w-6 h-6" />
                        <p>Copiar PIX copia e cola</p>
                      </button>
                    </CopyToClipboard>
                    <div className="text-xs">
                      <p>Banco: PICPAY</p>
                      <p>Nome: Virgínia Thays da Silva Oliveira</p>
                    </div>
                    <p className="text-[11px] px-10 py-2 text-center">
                      Verifique se o remetente e o valor estão corretos antes de
                      confirmar o pagamento. Após isso, envie o comprovante para
                      o WhatsApp (83) 99102-9054
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
