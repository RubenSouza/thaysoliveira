import AboutMe from "./components/AboutMe";
import Feedbacks from "./components/Feedbacks";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Students from "./components/Students";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[1400px] space-y-4">
        <section
          className="w-full flex flex-col items-center justify-center 
          relative linear-gradient"
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
        <section className="w-full flex items-center justify-center relative section2">
          <Feedbacks />
        </section>
        <section
          className="w-full flex items-center justify-center relative"
          id="students"
        >
          <Students />
        </section>
      </div>
    </div>
  );
}

export default App;
