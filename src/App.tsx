import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Feedbacks from "./components/Feedbacks";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import Videos from "./components/Videos";

// import arrowUp from "./assets/arrrowUp.svg";

function App() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full 
      min-h-screen h-screen overflow-y-scroll 
      scrollbar-track-gray-400/40 scrollbar-thumb-primary-300"
    >
      <div className="w-[1400px] h-full space-y-4">
        <section
          className="w-full flex flex-col items-center justify-center 
          relative linear-gradient"
          id="home"
        >
          <Navbar />
          <Inicio />
        </section>
        <section
          className="bg-[#09090C] w-full flex items-center 
        justify-center relative "
          id="aboutme"
        >
          <AboutMe />
        </section>
        <section
          className="w-full flex items-center justify-center 
        relative feedbacks"
          id="feedbacks"
        >
          <Feedbacks />
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
        relative pb-7"
          id="contact"
        >
          <Contact />
        </section>
      </div>
      {/* <a href="#home">
        <div
          className="w-[30px] h-[30px] border border-primary-500 
      rounded-full flex items-center justify-center opacity-50
      fixed bottom-5 right-7 cursor-pointer hover:opacity-70 
      animate-bounce duration-1000 delay-1000"
        >
          <img src={arrowUp} alt="goToHome" className="w-[12px]" />
        </div>
      </a> */}
    </div>
  );
}

export default App;
