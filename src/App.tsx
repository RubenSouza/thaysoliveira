import { lazy, Suspense } from "react";
import loading from "../src/assets/videos/loading3.webp";
import { Route, Routes } from "react-router-dom";
import Event from "./pages/Event";

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
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/recital" element={<Event />} />
      </Routes>
    </Suspense>
  );
};

export default App;
