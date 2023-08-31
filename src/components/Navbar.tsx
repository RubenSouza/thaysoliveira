const Navbar = () => {
  return (
    <div className="w-[1200px] flex items-center py-10 z-20">
      <ul
        className="uppercase flex justify-between w-[400px] text-sm font-semibold 
      font-sans"
      >
        <li className="hover:cursor-pointer">Sobre mim</li>
        <li className="hover:cursor-pointer">Feedback</li>
        <li className="hover:cursor-pointer">Alunos</li>
        <li className="hover:cursor-pointer">Contato</li>
      </ul>
    </div>
  );
};

export default Navbar;
