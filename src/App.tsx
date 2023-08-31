import AboutMe from "./components/AboutMe";
import Feedbacks from "./components/Feedbacks";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[1400px]">
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
        >
          <AboutMe />
        </section>
        <section className="w-full flex items-center justify-center relative section2 mb-40">
          <Feedbacks />
        </section>
      </div>
    </div>
  );
}

export default App;
