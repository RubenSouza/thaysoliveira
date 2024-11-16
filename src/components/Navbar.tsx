"use client";

import { useState } from "react";
import menu from "../assets/menu.svg";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(false); // Feche o menu após o clique
  }

  return (
    <div
      className="w-full flex lg:justify-center justify-start px-10 
    lg:px-0"
    >
      <div
        className="lg:w-[1100px] 2xl:w-[1200px] md:flex items-center md:py-10 
      hidden z-20 absolute top-0 "
      >
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
          <a href="#games">
            <li className="hover:cursor-pointer">Games</li>
          </a>
          <a href="#students">
            <li className="hover:cursor-pointer">Recitais</li>
          </a>
          <a href="#videos">
            <li className="hover:cursor-pointer">Vídeos</li>
          </a>
          <a href="#contact">
            <li className="hover:cursor-pointer">Contatos</li>
          </a>
        </ul>
      </div>
      <div
        className="w-full px-4 h-12 bg-black md:hidden fixed z-30 top-0 left-0 right-0"
        onClick={() => setIsMenuOpen(true)}
      >
        <Image src={menu} width={40} height={400} alt="menu" className="w-11" />
      </div>

      {isMenuOpen && (
        <div className="top-0 bottom-0 left-0 right-0 bg-black/90 fixed z-40">
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
              <a href="#aboutme" onClick={() => handleMenuClick()}>
                <li className="hover:cursor-pointer">Sobre mim</li>
              </a>
              <a href="#feedbacks" onClick={() => handleMenuClick()}>
                <li className="hover:cursor-pointer">Feedbacks</li>
              </a>
              <a href="#games" onClick={() => handleMenuClick()}>
                <li className="hover:cursor-pointer">Games</li>
              </a>
              <a href="#students" onClick={() => handleMenuClick()}>
                <li className="hover:cursor-pointer">Recitais</li>
              </a>
              <a href="#videos" onClick={() => handleMenuClick()}>
                <li className="hover:cursor-pointer">Vídeos</li>
              </a>
              <a href="#contact" onClick={() => handleMenuClick()}>
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
