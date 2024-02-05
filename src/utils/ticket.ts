import axios from "axios";
const URL = import.meta.env.VITE_API_URL;

type Ticket = {
  aluno: string;
  quantidade: number;
  valor: number;
};

export const registerTicket = async (ticket: Ticket) => {
  try {
    const response = await axios.post(`${URL}/tickets/register`, ticket);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
