// import Main from "./pages/Main";

import { lazy, Suspense } from "react";
import loading from "../src/assets/videos/loading3.webp";

const Main = lazy(() => import("./pages/Main"));

const App = () => {
  return (
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
      <Main />
    </Suspense>
  );
};

export default App;
