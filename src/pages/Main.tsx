import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import arrowUp from "../assets/arrrowUp.svg";
import AboutMe from "../components/AboutMe";
import Feedbacks from "../components/Feedbacks";
import Contact from "../components/Contact";
import Students from "../components/Students";
import Videos from "../components/Videos";
import Recital24 from "../components/Recital24";

function Main() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full 
      min-h-screen h-screen scrollbar-thin overflow-y-scroll overflow-x-hidden
      scrollbar-track-gray-400/40 scrollbar-thumb-primary-300 relative"
    >
      <div className="w-full h-full">
        <Navbar />
        <section
          className="w-full h-full flex flex-col items-center 
          relative linear-gradient justify-center"
          id="home"
        >
          <Inicio />
        </section>
        <section
          className="w-full  flex items-center 
        justify-center relative bg-black py-14 xl:py-28"
          id="aboutme"
        >
          <AboutMe />
        </section>
        <section
          className="w-full flex items-center  justify-center
      relative feedbacks"
          id="feedbacks"
        >
          <Feedbacks />
        </section>
        <section
          className="w-full flex items-center justify-center relative py-14 xl:py-28"
          id="students"
        >
          <Recital24 />
        </section>
        <section
          className="w-full flex items-center justify-center relative py-5"
          id="students"
        >
          <Students />
        </section>
        <section
          className="w-full flex items-center  justify-center 
        relative videos pb-7"
          id="videos"
        >
          <Videos />
        </section>
        <section
          className="w-full flex items-center justify-center
        relative py-7"
          id="contact"
        >
          <Contact />
        </section>
      </div>
      <a href="#home">
        <div
          className="w-[40px] h-[40px] border border-primary-500 
      rounded-full flex items-center justify-center opacity-50
      fixed bottom-5 right-7 cursor-pointer hover:opacity-70 
      animate-bounce duration-1000 delay-1000 z-40"
        >
          <img src={arrowUp} alt="goToHome" className="w-[15px]" />
        </div>
      </a>
    </div>
  );
}

export default Main;
