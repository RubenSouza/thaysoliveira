// import Event from "./pages/Event";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/recital" element={<Event />} /> */}
    </Routes>
  );
};

export default App;
