import { useState } from "react";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-10 w-full flex justify-center">
      <div className="md:w-[1200px] md:flex items-center md:py-10 hidden z-20">
        <ul
          className="uppercase flex justify-between w-[450px] h-full text-xs 
        font-sans"
        >
          <a href="#aboutme">
            <li className="hover:cursor-pointer">Sobre mim</li>
          </a>
          <a href="#feedbacks">
            <li className="hover:cursor-pointer">Feedbacks</li>
          </a>
          <a href="#students">
            <li className="hover:cursor-pointer">Alunos</li>
          </a>
          <a href="#videos">
            <li className="hover:cursor-pointer">Vídeos</li>
          </a>
          <a href="#contact">
            <li className="hover:cursor-pointer">Contato</li>
          </a>
        </ul>
      </div>

      <div
        className="w-full px-4 py-1 md:hidden fixed z-30 bg-black top-0"
        onClick={() => setIsMenuOpen(true)}
      >
        <img src={menu} alt="menu" className="w-11" />
      </div>

      {isMenuOpen && (
        <div className="top-0 bottom-0 left-0 right-0 bg-black fixed z-40">
          <div className="absolute right-0 opacity-70 z-40">
            <p
              className="text-2xl p-6 h-20 w-16"
              onClick={() => setIsMenuOpen(false)}
            >
              X
            </p>
          </div>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-20">
            <ul
              className="uppercase flex flex-col justify-center items-center
          space-y-8 h-full text-xl font-sans"
            >
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:cursor-pointer">Inicio</li>
              </a>
              <a href="#aboutme" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:cursor-pointer">Sobre mim</li>
              </a>
              <a href="#feedbacks" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:cursor-pointer">Feedbacks</li>
              </a>
              <a href="#students" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:cursor-pointer">Alunos</li>
              </a>
              <a href="#videos" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:cursor-pointer">Vídeos</li>
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <li className="hover:cursor-pointer">Contatos</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
