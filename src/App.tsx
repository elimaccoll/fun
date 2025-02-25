import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { InteractiveGrid } from "./components/interactive-grid/InteractiveGrid";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/fun" element={<Home />} />
        <Route path="/fun/grid" element={<InteractiveGrid />} />
      </Routes>
    </Router>
  );
};

export default App;
