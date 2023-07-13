import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-slate-200 p-5">
      <Header />
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-500" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
