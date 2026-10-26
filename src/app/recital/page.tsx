'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Fuse from 'fuse.js'
import { DM_Sans, Fraunces } from 'next/font/google'
import { recitalStudents } from '@/src/data/recitals'
import { registerTicket } from '../../utils/ticket'
import { IoMdCopy } from 'react-icons/io'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PIX from 'react-qrcode-pix'
import toast, { Toaster } from 'react-hot-toast'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['600', '700'] })

type Student = {
  id: number
  name: string
  price?: number
}

const now = new Date().getTime().toString()
const GOLD = '#E3BE7A'
const MAX_TICKETS = 10

const normalize = (t: string) =>
  t
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const getInitials = (name: string) => {
  const parts = name.trim().split(' ')
  const value =
    parts.length > 1
      ? parts[0][0] + parts[parts.length - 1][0]
      : name.slice(0, 2)

  return value.toUpperCase()
}

const money = (v: number) => 'R$ ' + v.toFixed(2).replace('.', ',')

const TicketIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
    <path d="M14 6v12" strokeDasharray="2 2.5" />
  </svg>
)

const CheckCircle = ({ on, color }: { on: boolean; color: string }) => (
  <span
    className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center box-border"
    style={{
      border: `1.5px solid ${on ? color : 'rgba(255,255,255,0.35)'}`,
      background: on ? color : 'transparent',
    }}
  >
    {on && (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#150D26"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    )}
  </span>
)

const RecitalRegistration = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [search, setSearch] = useState('')
  const [counter, setCounter] = useState(1)
  const [nextPage, setNextPage] = useState(false)
  const [modalStep, setModalStep] = useState(1)
  const [totalValue, setTotalValue] = useState(40)
  const [fullPIX, setFullPIX] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')

  const inAreaRef = useRef<HTMLDivElement | null>(null)

  const combo = recitalStudents.find(s => s.id === 0)

  const allStudents = useMemo(() => recitalStudents.filter(s => s.id !== 0), [])

  // Índice do Fuse com o nome normalizado (sem acentos), para que
  // "leticia" encontre "Letícia" em qualquer versão do fuse.js
  const fuse = useMemo(
    () =>
      new Fuse(
        allStudents.map(s => ({
          student: s,
          searchName: normalize(s.name),
        })),
        {
          keys: ['searchName'],
          threshold: 0.35,
          ignoreLocation: true,
          minMatchCharLength: 2,
        },
      ),
    [allStudents],
  )

  const students = useMemo(() => {
    const q = normalize(search.trim())
    if (!q) return allStudents
    return fuse.search(q).map(result => result.item.student)
  }, [search, fuse, allStudents])

  const unitPrice = selectedStudent?.price || 40
  const isCombo = selectedStudent?.id === 0

  const handleStudent = (student: Student) => {
    // Clicar novamente no mesmo item desmarca
    if (selectedStudent?.id === student.id) {
      setSelectedStudent(null)
      return
    }

    setSelectedStudent(student)
    setTotalValue((student.price || 40) * counter)
  }

  const handleNextPage = () => {
    setNextPage(true)
    setModalStep(1)
    setTotalValue(unitPrice * counter)
  }

  const handleCopy = () => {
    toast.success('PIX copiado!', {
      duration: 3000,
    })
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')

    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2')
    }

    return userPhone
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setUserPhone(formatted)
  }

  const closeModal = () => {
    setNextPage(false)
    setModalStep(1)
    setCounter(1)
    setUserName('')
    setUserEmail('')
    setUserPhone('')
  }

  const handleGeneratePix = async () => {
    setModalStep(3)

    if (!selectedStudent) return

    const data = {
      aluno: selectedStudent.name,
      email: userEmail,
      name: userName,
      phone: userPhone,
      quantidade: counter,
      valor: totalValue,
    }

    try {
      await registerTicket(data)
    } catch (error) {
      console.log('Erro ao registrar ticket', error)
    }
  }

  const isEmailValid =
    userEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)

  const isPhoneValid = userPhone.replace(/\D/g, '').length >= 10
  const isStep1Valid = userName.trim() && isEmailValid && isPhoneValid

  // Atualiza o valor sem adicionar eventos de clique fora do modal.
  useEffect(() => {
    setTotalValue(unitPrice * counter)
  }, [counter, unitPrice])

  const rowStyle = (on: boolean): React.CSSProperties => ({
    border: `1px solid ${on ? '#A78BFA' : 'rgba(255,255,255,0.12)'}`,
    background: on ? 'rgba(167,139,250,0.20)' : 'rgba(255,255,255,0.05)',
  })

  const comboStyle: React.CSSProperties = {
    border: `1px solid ${isCombo ? GOLD : 'rgba(227,190,122,0.55)'}`,
    background: isCombo
      ? 'linear-gradient(120deg, rgba(227,190,122,0.30), rgba(227,190,122,0.12))'
      : 'linear-gradient(120deg, rgba(227,190,122,0.16), rgba(227,190,122,0.05))',
  }

  const summary = !selectedStudent
    ? 'Nenhum aluno selecionado'
    : isCombo
      ? 'Combo Recital selecionado'
      : `${selectedStudent.name} selecionado`

  const inputClass =
    'w-full box-border h-12 px-4 rounded-[14px] border border-white/15 bg-white/5 text-[#F3EFFA] text-base outline-none placeholder:text-[#A79DBB] focus-visible:outline-2 focus-visible:outline-[#F3EFFA] focus-visible:outline-offset-2'

  const ghostBtn =
    'h-[52px] px-5 rounded-[14px] text-base font-semibold bg-transparent text-[#F3EFFA] border border-white/25 hover:brightness-125 transition'

  const primaryBtn =
    'h-[52px] px-6 rounded-[14px] text-base font-semibold tracking-wider bg-[#F3EFFA] text-[#150D26] hover:brightness-90 transition disabled:bg-white/10 disabled:text-[#A79DBB] disabled:cursor-not-allowed disabled:hover:brightness-100'

  const stepTitles = [
    '',
    'Seus dados',
    'Quantidade de ingressos',
    'Pagamento PIX',
  ]

  return (
    <div
      className={`${dmSans.className} w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed text-[#F3EFFA]`}
      style={{ backgroundImage: `url(./assets/fundo.jpg)` }}
    >
      <Toaster />

      <div
        className="min-h-screen flex flex-col items-center w-full"
        style={{
          background:
            'radial-gradient(90% 26% at 50% 0%, rgba(124,58,237,0.40), rgba(124,58,237,0) 70%), rgba(10,6,16,0.80)',
        }}
      >
        <div className="relative w-full max-w-[760px] box-border px-4 pt-10 pb-1 text-center flex flex-col gap-3 items-center">
          <h1
            className={`${fraunces.className} m-0 font-bold text-[38px] leading-[1.05] tracking-tight`}
            style={{ color: '#F3EFFA' }}
          >
            Recital 2026
          </h1>

          <p
            className="m-0 max-w-[520px] text-[15px] leading-normal"
            style={{ color: '#CFC6E0' }}
          >
            Escolha o aluno que você irá acompanhar ou selecione o Combo recital
            para participar de todas as sessões do evento.
          </p>
        </div>

        <motion.main
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="w-full max-w-[760px] box-border px-4 pt-6 flex flex-col gap-6 grow"
        >
          {combo && (
            <button
              type="button"
              aria-pressed={isCombo}
              onClick={() => handleStudent(combo)}
              className="w-full box-border flex items-center gap-[14px] px-[18px] py-[14px] min-h-[76px] rounded-2xl text-[#F3EFFA] cursor-pointer hover:brightness-125 transition"
              style={comboStyle}
            >
              <span
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(227,190,122,0.14)',
                  border: `1.5px solid ${GOLD}`,
                  color: GOLD,
                }}
              >
                <TicketIcon />
              </span>

              <span className="grow flex flex-col gap-0.5 text-left">
                <span
                  className={`${fraunces.className} font-semibold text-xl`}
                  style={{ color: '#F6E4BE' }}
                >
                  Combo Recital
                </span>
                <span className="text-sm text-[#CFC6E0]">
                  Todas as sessões do evento
                </span>
              </span>

              <CheckCircle on={isCombo} color={GOLD} />
            </button>
          )}

          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-[#A79DBB] text-xs tracking-[0.14em] uppercase">
              <span className="grow h-px bg-white/15" />
              <span>ou escolha um aluno</span>
              <span className="grow h-px bg-white/15" />
            </div>

            <div className="relative flex items-center">
              <label htmlFor="busca" className="sr-only">
                Buscar aluno
              </label>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A79DBB"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className="absolute left-4 pointer-events-none"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>

              <input
                id="busca"
                type="search"
                placeholder="Buscar aluno"
                value={search}
                onChange={e => setSearch(e.target.value)}
                autoComplete="off"
                className={`${inputClass} pl-11`}
              />
            </div>

            <div className="columns-1 min-[680px]:columns-2 gap-[10px]">
              {students.map(student => {
                const on = selectedStudent?.id === student.id

                return (
                  <button
                    key={student.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => handleStudent(student)}
                    className="w-full box-border flex items-center gap-[14px] px-4 py-[10px] min-h-[60px] mb-[10px] break-inside-avoid rounded-2xl text-[#F3EFFA] cursor-pointer hover:brightness-125 transition"
                    style={rowStyle(on)}
                  >
                    <span
                      className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold tracking-wide"
                      style={{
                        background:
                          'linear-gradient(140deg, rgba(167,139,250,0.30), rgba(99,102,241,0.14))',
                        border: '1.5px solid rgba(255,255,255,0.28)',
                      }}
                    >
                      {getInitials(student.name)}
                    </span>

                    <span className="grow text-left text-[17px] font-medium">
                      {student.name}
                    </span>

                    <CheckCircle on={on} color="#A78BFA" />
                  </button>
                )
              })}
            </div>

            {students.length === 0 && (
              <p className="mt-2 text-center text-[#A79DBB] text-[15px]">
                Nenhum aluno encontrado.
              </p>
            )}
          </section>
        </motion.main>

        <div
          className="sticky bottom-0 w-full box-border mt-4 px-4 pt-6 pb-5 flex flex-col items-center gap-[10px]"
          style={{
            background: 'linear-gradient(to top, #0A0610 62%, rgba(10,6,16,0))',
          }}
        >
          <span aria-live="polite" className="text-sm text-[#CFC6E0]">
            {summary}
          </span>

          <button
            type="button"
            onClick={handleNextPage}
            disabled={!selectedStudent}
            className="h-[52px] px-11 rounded-full text-base font-semibold tracking-[0.06em] uppercase bg-[#F3EFFA] text-[#150D26] hover:brightness-90 transition disabled:bg-white/10 disabled:text-[#A79DBB] disabled:cursor-not-allowed disabled:hover:brightness-100"
          >
            continuar
          </button>
        </div>
        {nextPage && selectedStudent && (
          <div
            className="fixed inset-0 z-50 box-border p-0 sm:p-4 flex items-end sm:items-center justify-center"
            style={{
              background: 'rgba(5,3,10,0.76)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div
              ref={inAreaRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="dlg-title"
              className="w-full sm:max-w-[440px] h-auto max-h-[90dvh] sm:max-h-full overflow-y-auto overscroll-contain box-border rounded-t-3xl rounded-b-none sm:rounded-3xl border border-white/15"
              style={{
                background: '#150E24',
                boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
              }}
            >
              {/* Cabeçalho fixo: o botão X permanece visível ao rolar */}
              <div
                className="sticky top-0 z-10 px-6 pt-[22px] pb-[18px] flex flex-col gap-[14px] border-b border-white/10"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(124,58,237,0.98), rgba(79,70,229,0.96))',
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2
                    id="dlg-title"
                    className={`${fraunces.className} m-0 font-bold text-2xl leading-tight`}
                  >
                    {stepTitles[modalStep]}
                  </h2>

                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Fechar"
                    className="w-11 h-11 -my-2 -mr-2.5 shrink-0 border-0 rounded-full bg-black/20 text-[#F3EFFA] flex items-center justify-center cursor-pointer hover:bg-black/40 transition"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div
                    className="grow grid grid-cols-3 gap-1.5"
                    aria-hidden="true"
                  >
                    {[1, 2, 3].map(i => (
                      <span
                        key={i}
                        className="h-1 rounded-sm"
                        style={{
                          background:
                            i <= modalStep
                              ? '#A78BFA'
                              : 'rgba(255,255,255,0.16)',
                        }}
                      />
                    ))}
                  </div>

                  <span className="text-[13px] text-[#F3EFFA]">
                    Etapa {modalStep} de 3
                  </span>
                </div>
              </div>

              <div className="px-6 pt-[22px] pb-6 flex flex-col gap-5">
                {modalStep === 1 && (
                  <>
                    <div className="flex items-center gap-[14px] px-[14px] py-3 rounded-2xl bg-white/5 border border-white/10">
                      <span
                        className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center"
                        style={
                          isCombo
                            ? {
                                background: 'rgba(227,190,122,0.14)',
                                border: `1.5px solid ${GOLD}`,
                                color: GOLD,
                              }
                            : {
                                background:
                                  'linear-gradient(140deg, rgba(167,139,250,0.30), rgba(99,102,241,0.14))',
                                border: '1.5px solid rgba(255,255,255,0.28)',
                              }
                        }
                      >
                        {isCombo ? (
                          <TicketIcon size={22} />
                        ) : (
                          <span className="text-sm font-semibold">
                            {getInitials(selectedStudent.name)}
                          </span>
                        )}
                      </span>

                      <span className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-[13px] text-[#A79DBB]">
                          Acompanhante de
                        </span>

                        <span
                          className={
                            isCombo
                              ? `${fraunces.className} font-semibold text-lg`
                              : 'text-[17px] font-semibold'
                          }
                          style={isCombo ? { color: '#F6E4BE' } : undefined}
                        >
                          {selectedStudent.name}
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="f-nome"
                          className="text-sm text-[#CFC6E0]"
                        >
                          Nome completo
                        </label>

                        <input
                          id="f-nome"
                          type="text"
                          autoComplete="name"
                          placeholder="Digite seu nome completo"
                          value={userName}
                          onChange={e => setUserName(e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="f-email"
                          className="text-sm text-[#CFC6E0]"
                        >
                          E-mail
                        </label>

                        <input
                          id="f-email"
                          type="email"
                          autoComplete="email"
                          placeholder="seu@email.com"
                          value={userEmail}
                          onChange={e => setUserEmail(e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="f-tel"
                          className="text-sm text-[#CFC6E0]"
                        >
                          Telefone
                        </label>

                        <input
                          id="f-tel"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="(00) 00000-0000"
                          maxLength={15}
                          value={userPhone}
                          onChange={handlePhoneChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setModalStep(2)}
                      disabled={!isStep1Valid}
                      className={`${primaryBtn} w-full`}
                    >
                      Continuar
                    </button>
                  </>
                )}

                {modalStep === 2 && (
                  <>
                    <div className="flex flex-col items-center gap-[14px] px-4 py-5 rounded-[20px] bg-white/5 border border-white/10">
                      <span className="text-[15px] text-[#CFC6E0]">
                        Quantos acompanhantes?
                      </span>

                      <div className="flex items-center gap-[22px]">
                        <button
                          type="button"
                          onClick={() => setCounter(Math.max(1, counter - 1))}
                          disabled={counter <= 1}
                          aria-label="Diminuir quantidade"
                          className="w-[52px] h-[52px] rounded-full flex items-center justify-center border border-white/30 bg-white/10 text-[#F3EFFA] hover:brightness-90 transition disabled:border-white/10 disabled:bg-transparent disabled:text-[#6F6685] disabled:cursor-not-allowed"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        </button>

                        <div
                          className="min-w-[84px] flex flex-col items-center gap-0.5"
                          aria-live="polite"
                        >
                          <span
                            className={`${fraunces.className} font-bold text-[56px] leading-none`}
                          >
                            {counter}
                          </span>

                          <span className="text-sm text-[#CFC6E0]">
                            {counter === 1 ? 'ingresso' : 'ingressos'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setCounter(Math.min(MAX_TICKETS, counter + 1))
                          }
                          disabled={counter >= MAX_TICKETS}
                          aria-label="Aumentar quantidade"
                          className="w-[52px] h-[52px] rounded-full flex items-center justify-center border border-white/30 bg-white/10 text-[#F3EFFA] hover:brightness-90 transition disabled:border-white/10 disabled:bg-transparent disabled:text-[#6F6685] disabled:cursor-not-allowed"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 px-[18px] py-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-baseline justify-between text-[15px] text-[#CFC6E0]">
                        <span>Valor unitário</span>

                        <span className="text-[#F3EFFA] font-semibold">
                          {money(unitPrice)}
                        </span>
                      </div>

                      <span className="h-px bg-white/10" />

                      <div className="flex items-baseline justify-between">
                        <span className="text-base font-semibold">
                          Valor total
                        </span>

                        <span
                          className={`${fraunces.className} font-bold text-[28px]`}
                          style={{ color: GOLD }}
                        >
                          {money(totalValue)}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-[10px]">
                      <button
                        type="button"
                        onClick={() => setModalStep(1)}
                        className={ghostBtn}
                      >
                        Voltar
                      </button>

                      <button
                        type="button"
                        onClick={handleGeneratePix}
                        className={`${primaryBtn} grow`}
                      >
                        Gerar PIX
                      </button>
                    </div>
                  </>
                )}
                {modalStep === 3 && (
                  <>
                    <div className="flex flex-col items-center gap-[14px]">
                      <span className="hidden sm:block text-[15px] text-[#CFC6E0]">
                        Escaneie o QR Code para pagar
                      </span>

                      {/* QR Code visível em telas maiores */}
                      <div className="hidden sm:flex p-3 rounded-2xl bg-[#F3EFFA] items-center justify-center">
                        <PIX
                          pixkey="profs.thaysoliveira@gmail.com"
                          merchant="Virginia Thays"
                          city="Campina Grande"
                          cep="58.419-205"
                          code={'RQP' + now}
                          amount={totalValue}
                          onLoad={setFullPIX}
                          resize={164}
                        />
                      </div>

                      {/* PIX Copia e Cola visível no celular */}
                      <div className="sm:hidden w-full flex flex-col gap-2">
                        <label
                          htmlFor="pix-copia-cola"
                          className="text-sm font-semibold text-[#F3EFFA]"
                        >
                          PIX Copia e Cola
                        </label>

                        <textarea
                          id="pix-copia-cola"
                          readOnly
                          value={fullPIX}
                          placeholder="Gerando código PIX..."
                          rows={4}
                          className="w-full box-border resize-none rounded-xl border border-white/15 bg-white/5 p-3 text-sm leading-relaxed text-[#F3EFFA] outline-none focus-visible:outline-2 focus-visible:outline-[#F3EFFA]"
                          onFocus={event => event.currentTarget.select()}
                        />

                        <CopyToClipboard text={fullPIX} onCopy={handleCopy}>
                          <button
                            type="button"
                            disabled={!fullPIX}
                            className={`${primaryBtn} w-full flex items-center justify-center gap-[10px]`}
                          >
                            <IoMdCopy className="w-[18px] h-[18px]" />
                            <span>Copiar código PIX</span>
                          </button>
                        </CopyToClipboard>
                      </div>

                      <span
                        className={`${fraunces.className} font-bold text-[32px]`}
                        style={{ color: GOLD }}
                      >
                        {money(totalValue)}
                      </span>
                    </div>

                    {/* Botão de cópia para desktop */}
                    <div className="hidden sm:block">
                      <CopyToClipboard text={fullPIX} onCopy={handleCopy}>
                        <button
                          type="button"
                          disabled={!fullPIX}
                          className={`${ghostBtn} w-full flex items-center justify-center gap-[10px] bg-white/5`}
                        >
                          <IoMdCopy className="w-[18px] h-[18px]" />
                          <span>Copiar PIX Copia e Cola</span>
                        </button>
                      </CopyToClipboard>
                    </div>

                    <div className="flex flex-col gap-1 px-4 py-[14px] rounded-2xl bg-white/5 border border-white/10 text-sm text-[#CFC6E0]">
                      <span className="font-semibold text-[#F3EFFA]">
                        Dados bancários
                      </span>
                      <span>Banco: PICPAY</span>
                      <span>Nome: Virgínia Thays da Silva Oliveira</span>
                    </div>

                    <p className="m-0 text-[13px] leading-[1.55] text-[#B9B0CC] text-center">
                      Verifique se o remetente e o valor estão corretos antes de
                      confirmar o pagamento. Após isso, envie o comprovante para
                      o WhatsApp (83) 99102-9054.
                    </p>

                    <button
                      type="button"
                      onClick={() => setModalStep(2)}
                      className={ghostBtn}
                    >
                      Voltar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecitalRegistration
