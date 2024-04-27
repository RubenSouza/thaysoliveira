import {
  // useState,
  useEffect,
} from "react";
// import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import arrowUp from "../assets/arrrowUp.svg";
import { lazy, Suspense } from "react";
import loading from "../assets/videos/loading3.gif";

const Inicio = lazy(() => import("../components/Inicio"));
// import AboutMe from "../components/AboutMe";
// import Feedbacks from "../components/Feedbacks";
// import Contact from "../components/Contact";
// import Students from "../components/Students";
// import Videos from "../components/Videos";
// import Recital24 from "../components/Recital24";

function Main() {
  // const [isLoading, setLoading] = useState(true);
  // const [topPadding, setTopPadding] = useState("0px");

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    // window.innerWidth < 768 ? setTopPadding("48px") : setTopPadding("0px");
  });

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
          <Suspense
            fallback={
              <div
                className="fixed w-full h-screen bg-[#1e1d1d] flex items-center 
        justify-center z-40"
              >
                <img src={loading} className="w-[600px]" />
              </div>
            }
          >
            <Inicio />
          </Suspense>
        </section>
        {/* <section
          className="w-full  flex items-center 
        justify-center relative bg-black py-14 xl:py-28"
          id="aboutme"
          style={{ scrollMarginTop: topPadding }}
        >
          <AboutMe />
        </section>
        <section
          className="w-full flex items-center  justify-center
      relative feedbacks"
          id="feedbacks"
          style={{ scrollMarginTop: topPadding }}
        >
          <Feedbacks />
        </section>
        <section
          className="w-full flex items-center justify-center relative py-14 xl:py-28"
          id="students"
          style={{ scrollMarginTop: topPadding }}
        >
          <Recital24 />
        </section>
        <section
          className="w-full flex items-center justify-center relative py-5"
          id="students"
          style={{ scrollMarginTop: topPadding }}
        >
          <Students />
        </section>
        <section
          className="w-full flex items-center  justify-center 
        relative videos pb-7"
          id="videos"
          style={{ scrollMarginTop: topPadding }}
        >
          <Videos />
        </section>
        <section
          className="w-full flex items-center justify-center
        relative py-7"
          id="contact"
          style={{ scrollMarginTop: topPadding }}
        >
          <Contact />
        </section> */}
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
