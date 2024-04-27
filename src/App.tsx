// import Main from "./pages/Main";

import { lazy, Suspense } from "react";
import loading from "../src/assets/videos/loading3.webp";

const Main = lazy(() => import("./pages/Main"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <img src={loading} className="w-[200px] h-[200px]" />
        </div>
      }
    >
      <Main />
    </Suspense>
  );
};

export default App;
