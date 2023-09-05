const Navbar = () => {
  return (
    <div className="w-[1200px] flex items-center py-10 z-20">
      <ul
        className="uppercase flex justify-between w-[450px] text-xs 
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
  );
};

export default Navbar;
