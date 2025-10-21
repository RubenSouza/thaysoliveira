'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { recitalStudents } from '@/src/data/recitals';
import { registerTicket } from '../../utils/ticket';
import { IoIosArrowUp, IoIosArrowDown, IoMdCopy } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PIX from 'react-qrcode-pix';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

type Student = {
  id: number;
  name: string;
  img: string;
  price?: number;
};

const now = new Date().getTime().toString();

const RecitalRegistration = () => {
  const [selectedStudent, setSelectedStudent] = useState({} as Student);
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [totalValue, setTotalValue] = useState(40);
  const [fullPIX, setFullPIX] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const inAreaRef = useRef<HTMLDivElement | null>(null);

  const unitPrice = selectedStudent?.price || 40;

  const handleStudent = (student: Student) => {
    setSelectedStudent(student);
    setTotalValue((student.price || 40) * counter);
  };

  const handleNextPage = () => {
    setNextPage(true);
    setModalStep(1);
    setTotalValue(unitPrice * counter);
  };

  const handleCopy = () => {
    toast.success('PIX copiado!', {
      duration: 3000,
    });
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2');
    }
    return userPhone;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setUserPhone(formatted);
  };

  const handleGeneratePix = async () => {
    setModalStep(3);
    const data = {
      aluno: selectedStudent?.name,
      email: userEmail,
      name: userName,
      phone: userPhone,
      quantidade: counter,
      valor: totalValue,
    };
    try {
      await registerTicket(data);
    } catch (error) {
      console.log('Erro ao registrar ticket', error);
    }
  };

  const isEmailValid =
    userEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
  const isPhoneValid = userPhone.replace(/\D/g, '').length >= 10;
  const isStep1Valid = userName.trim() && isEmailValid && isPhoneValid;

  useEffect(() => {
    setTotalValue(unitPrice * counter);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        nextPage &&
        inAreaRef.current &&
        !inAreaRef.current.contains(event.target as Node)
      ) {
        setNextPage(false);
        setModalStep(1);
        setCounter(1);
        setUserName('');
        setUserEmail('');
        setUserPhone('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [totalValue, counter, nextPage, unitPrice]);

  return (
    <div
      className='w-full h-full bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(./assets/fundo.jpg)` }}
    >
      <Toaster />
      <div className='flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 mt-6'>
        <h1 className='text-lg 2xl:text-3xl font-bold text-white pb-2'>
          Recital 2025
        </h1>
        <div className='flex flex-col items-center'>
          <p className='text-xs 2xl:text-base text-center xl:pb-0 2xl:pb-4'>
            Escolha o aluno que você irá acompanhar ou selecione o Combo recital
            para participar de todas as sessões do evento.
          </p>
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className='flex flex-col items-center justify-center px-10 md:px-0 py-2 2xl:py-6'
          >
            <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 gap-y-2 md:gap-6 md:gap-y-3 lg:gap-8 lg:gap-y-4 xl:gap-10 xl:gap-y-6'>
              {recitalStudents.map(student => (
                <div
                  className='w-full flex flex-col items-center cursor-pointer'
                  key={student.id}
                  onClick={() => handleStudent(student)}
                >
                  <div
                    className={`bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 transition-all duration-200 ${
                      selectedStudent?.name === student.name
                        ? 'border-4 border-purple-500 scale-105'
                        : 'border-2 border-slate-300 hover:border-purple-300'
                    }`}
                  >
                    <Image
                      width={400}
                      height={400}
                      alt={student.name}
                      src={student.img}
                      className='w-full h-full rounded-full object-cover object-center max-w-full'
                    />
                  </div>
                  <p className='text-xs xl:text-sm 2xl:text-base w-[70px] md:w-[80px] lg:w-[90px] text-center mt-1'>
                    {student.name}
                  </p>
                </div>
              ))}
            </div>

            <button
              className='bg-purple-500 p-2 text-sm uppercase rounded-lg 2xl:p-3 2xl:text-base mt-2 2xl:mt-4 
                disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-900 disabled:opacity-50
                hover:bg-purple-600 transition-colors'
              onClick={handleNextPage}
              disabled={!selectedStudent?.name}
            >
              continuar
            </button>
          </motion.div>
        </div>

        {nextPage && (
          <div className='fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50'>
            <div
              className='w-[320px] h-auto max-h-[90vh] overflow-y-auto lg:w-[420px] bg-white rounded-2xl text-slate-900'
              ref={inAreaRef}
            >
              <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-t-2xl'>
                <h1 className='text-xl font-bold text-white text-center mb-3'>
                  {modalStep === 1 && 'Seus Dados'}
                  {modalStep === 2 && 'Quantidade de Ingressos'}
                  {modalStep === 3 && 'Pagamento PIX'}
                </h1>
                <div className='flex justify-center space-x-2'>
                  {[1, 2, 3].map(s => (
                    <div
                      key={s}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        s === modalStep ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className='p-6'>
                {modalStep === 1 && (
                  <div className='space-y-6'>
                    <div className='text-center mb-4'>
                      <div className='w-16 h-16 rounded-full mx-auto mb-2 border-2 border-purple-200'>
                        <Image
                          width={400}
                          height={400}
                          alt={selectedStudent?.name}
                          src={selectedStudent?.img}
                          className='w-full h-full rounded-full object-cover object-top'
                        />
                      </div>
                      <p className='text-gray-600 text-sm'>
                        Acompanhante de:{' '}
                        <span className='font-semibold text-purple-600'>
                          {selectedStudent?.name}
                        </span>
                      </p>
                    </div>

                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Nome Completo
                        </label>
                        <input
                          type='text'
                          value={userName}
                          onChange={e => setUserName(e.target.value)}
                          placeholder='Digite seu nome completo'
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-gray-900'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          E-mail
                        </label>
                        <input
                          type='email'
                          value={userEmail}
                          onChange={e => setUserEmail(e.target.value)}
                          placeholder='seu@email.com'
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-gray-900'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Telefone
                        </label>
                        <input
                          type='tel'
                          value={userPhone}
                          onChange={handlePhoneChange}
                          placeholder='(00) 00000-0000'
                          maxLength={15}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-gray-900'
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setModalStep(2)}
                      disabled={!isStep1Valid}
                      className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {modalStep === 2 && (
                  <div className='space-y-6'>
                    <div className='text-center'>
                      <p className='text-gray-700 font-medium mb-6'>
                        Quantos acompanhantes?
                      </p>
                    </div>

                    <div className='flex flex-col items-center space-y-4'>
                      <div className='w-48 bg-gray-50 rounded-2xl p-4'>
                        <button
                          onClick={() => setCounter(counter + 1)}
                          className='w-full flex justify-center py-3 rounded-t-xl hover:bg-gray-200 transition-colors'
                        >
                          <IoIosArrowUp className='w-8 h-8 text-gray-600' />
                        </button>

                        <div className='text-center py-4'>
                          <p className='text-6xl font-bold text-purple-600'>
                            {counter}
                          </p>
                          <p className='text-sm text-gray-500 mt-2'>
                            {counter === 1 ? 'ingresso' : 'ingressos'}
                          </p>
                        </div>

                        <button
                          onClick={() => setCounter(Math.max(1, counter - 1))}
                          disabled={counter <= 1}
                          className='w-full flex justify-center py-3 rounded-b-xl hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:hover:bg-gray-50'
                        >
                          <IoIosArrowDown className='w-8 h-8 text-gray-600' />
                        </button>
                      </div>

                      <div className='bg-purple-50 rounded-lg p-4 w-full'>
                        <div className='flex justify-between items-center'>
                          <span className='text-gray-700'>Valor unitário:</span>
                          <span className='font-semibold'>
                            R$ {unitPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className='flex justify-between items-center mt-2 pt-2 border-t border-purple-200'>
                          <span className='text-lg font-bold text-gray-800'>
                            Valor Total:
                          </span>
                          <span className='text-2xl font-bold text-purple-600'>
                            R$ {totalValue.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex space-x-3'>
                      <button
                        onClick={() => setModalStep(1)}
                        className='flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all'
                      >
                        Voltar
                      </button>
                      <button
                        onClick={handleGeneratePix}
                        className='flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all'
                      >
                        Gerar PIX
                      </button>
                    </div>
                  </div>
                )}

                {modalStep === 3 && (
                  <div className='space-y-4'>
                    <div className='text-center'>
                      <p className='text-sm text-gray-600 mb-3'>
                        Escaneie o QR Code para pagar
                      </p>
                      <div className='flex justify-center mb-3'>
                        <PIX
                          pixkey='profs.thaysoliveira@gmail.com'
                          merchant='Virginia Thays'
                          city='Campina Grande'
                          cep='58.419-205'
                          code={'RQP' + now}
                          amount={totalValue}
                          onLoad={setFullPIX}
                          resize={160}
                        />
                      </div>
                      <p className='text-2xl font-bold text-purple-600'>
                        R$ {totalValue.toFixed(2)}
                      </p>
                    </div>

                    <CopyToClipboard text={fullPIX} onCopy={handleCopy}>
                      <button className='w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all flex items-center justify-center space-x-2'>
                        <IoMdCopy className='w-5 h-5' />
                        <span>Copiar PIX Copia e Cola</span>
                      </button>
                    </CopyToClipboard>

                    <div className='text-xs text-gray-600 bg-gray-50 rounded-lg p-3'>
                      <p className='font-semibold mb-1'>Dados bancários:</p>
                      <p>Banco: PICPAY</p>
                      <p>Nome: Virgínia Thays da Silva Oliveira</p>
                    </div>

                    <p className='text-xs text-gray-500 text-center'>
                      Verifique se o remetente e o valor estão corretos antes de
                      confirmar o pagamento. Após isso, envie o comprovante para
                      o WhatsApp (83) 99102-9054
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecitalRegistration;
