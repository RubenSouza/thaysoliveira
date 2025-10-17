export interface RecitalVideo {
  performer: string;
  title: string;
  videoId: string;
  side: 'left' | 'right';
  year: number;
  age?: string;
  experience?: string;
}

export interface RecitalStudent {
  id: number;
  name: string;
  img: string;
}

export const recitals2024: RecitalVideo[] = [
  {
    performer: 'Arthur Oliveira',
    title: 'Eu juro / Até que durou',
    videoId: 'kyjMyWrEY7c',
    side: 'left',
    year: 2024,
  },
  {
    performer: 'Maria Eduarda',
    title: 'Um xodó',
    videoId: 'BHtzTcSX-XI',
    side: 'left',
    year: 2024,
  },
  {
    performer: 'Maria Julia',
    title: 'Anunciação',
    videoId: 'S1r0zzaz_nw',
    side: 'right',
    year: 2024,
  },
  {
    performer: 'Heitor Vitorio',
    title: 'Me namora',
    videoId: 'T-8RkdKRFqQ',
    side: 'right',
    year: 2024,
  },
  {
    performer: 'Marina Lima',
    title: 'Coisas que eu sei',
    videoId: 'Htjl0phZkcY',
    side: 'left',
    year: 2024,
  },
  {
    performer: 'Ana Clara',
    title: 'Do lado de cá',
    videoId: 'E_SICqlU8vw',
    side: 'left',
    year: 2024,
  },
  {
    performer: 'Lara Costa',
    title: 'Baby',
    videoId: 'k_Y2vpJ8E_0',
    side: 'right',
    year: 2024,
  },
  {
    performer: 'Alice Barbosa',
    title: 'Trem bala / Foi Deus quem fez você',
    videoId: 'FXYStXcapQY',
    side: 'left',
    year: 2024,
  },
  {
    performer: 'Ravi Paulino',
    title: 'Era uma vez',
    videoId: 'ZJyTwcTR9D8',
    side: 'left',
    year: 2024,
  },
  {
    performer: 'Raissa e Lara',
    title: 'Dia especial',
    videoId: 'hoRUBiW6Hd8',
    side: 'right',
    year: 2024,
  },
  {
    performer: 'Alessandra - Grupo',
    title: 'Meu erro',
    videoId: 'UMs5p43YWdM',
    side: 'left',
    year: 2024,
  },
];

export const recitals2023: RecitalVideo[] = [
  {
    performer: 'Lara Costa',
    title: 'Fico assim sem você / Peça felicidade',
    videoId: '7grwEwF4DUU',
    side: 'left',
    year: 2023,
    age: '10 anos',
    experience: '5 meses de aulas',
  },
  {
    performer: 'Alice Monteiro',
    title: 'O sol',
    videoId: '42pbNkQlQ6A',
    side: 'left',
    year: 2023,
    age: '8 anos',
    experience: '1 ano e 2 meses de aulas',
  },
  {
    performer: 'Marina Lima',
    title: 'Trevo / Anunciação',
    videoId: 'oR_PtTk1_WQ',
    side: 'right',
    year: 2023,
    age: '8 anos',
    experience: '1 ano de aulas',
  },
  {
    performer: 'Maria Eduarda',
    title: 'Fico assim sem você / Peça felicidade',
    videoId: 'iEIRZNd_pJo',
    side: 'right',
    year: 2023,
    age: '13 anos',
    experience: '2 anos de aulas',
  },
  {
    performer: 'Arthur Oliveira',
    title: 'Naquela mesa',
    videoId: '5bh9_GO2fOM',
    side: 'left',
    year: 2023,
    age: '14 anos',
    experience: '3 anos de aulas',
  },
  {
    performer: 'Maria Júlia',
    title: 'Cai cai balão / Brilha estrelinha',
    videoId: '7uOj5wCy2EE',
    side: 'left',
    year: 2023,
    age: '7 anos',
    experience: '2 meses de aulas',
  },
  {
    performer: 'Abraão Barbosa',
    title: 'Pequena flor / Meu abrigo',
    videoId: 'HO50ZpdkcbU',
    side: 'right',
    year: 2023,
    age: '11 anos',
    experience: '7 meses de aulas',
  },
  {
    performer: 'Ana Clara',
    title: 'Snap',
    videoId: 'xFJkZbAhur8',
    side: 'left',
    year: 2023,
    age: '10 anos',
    experience: '10 meses de aulas',
  },
  {
    performer: 'Alice Barbosa',
    title: 'Asa branca / Era uma vez',
    videoId: '8OcbjDAvZ38',
    side: 'left',
    year: 2023,
    age: '7 anos',
    experience: '1 ano e 5 meses de aulas',
  },
  {
    performer: 'João Miguel',
    title: 'Jura juradinho',
    videoId: 'VNCt7h6s640',
    side: 'right',
    year: 2023,
    age: '14 anos',
    experience: '7 meses de aulas',
  },
];

export const recitalStudents: RecitalStudent[] = [
  {
    id: 0,
    name: 'Ingresso avulso',
    img: 'https://firebasestorage.googleapis.com/v0/b/school-df18f.appspot.com/o/perfis%20dos%20alunos%20do%20recital%2FIngresso.jpeg?alt=media&token=590bc937-034b-4144-b009-6ff4adabd4d0',
  },

  {
    id: 2,
    name: 'Ana Clara',
    img: '/recital/students/ana-clara.jpg',
  },
  {
    id: 3,
    name: 'Arthur',
    img: '/recital/students/arthur.jpg',
  },
  {
    id: 6,
    name: 'Alice Barbosa',
    img: '/recital/students/alice-barbosa.jpg',
  },
  {
    id: 8,
    name: 'Cecília',
    img: '/recital/students/cecilia.jpg',
  },
  {
    id: 11,
    name: 'Hellen',
    img: '/recital/students/hellen.jpg',
  },
  {
    id: 13,
    name: 'Jujú',
    img: '/recital/students/juju.jpg',
  },
  {
    id: 14,
    name: 'Júlia',
    img: '/recital/students/julia.jpg',
  },
  {
    id: 15,
    name: 'Lara',
    img: '/recital/students/lara.jpg',
  },
  {
    id: 16,
    name: 'Majú',
    img: '/recital/students/maju.jpg',
  },
  {
    id: 17,
    name: 'Malú',
    img: '/recital/students/malu.jpg',
  },
  {
    id: 21,
    name: 'Ravi',
    img: '/recital/students/ravi.jpg',
  },
  {
    id: 22,
    name: 'Rodolfo',
    img: '/recital/students/rodolfo.jpg',
  },
  {
    id: 23,
    name: 'Sofia Catão',
    img: '/recital/students/sofia-catao.jpg',
  },
  {
    id: 25,
    name: 'Tomás',
    img: '/recital/students/tomas.jpg',
  },
];
