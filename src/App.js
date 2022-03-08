import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UseSpringDemo } from "./demos/useSpring/useSpringDemo";
import { UseTransitionDemo } from "./demos/useTransition/useTransitionDemo";
import { UseTrailDemo } from "./demos/useTrail/useTrailDemo";
import { UseChainDemo } from "./demos/useChain/useChainDemo";
import { Home } from "./home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/use-spring" element={<UseSpringDemo />} />
        <Route path="/use-transition" element={<UseTransitionDemo />} />
        <Route path="/use-trail" element={<UseTrailDemo />} />
        <Route path="/use-chain" element={<UseChainDemo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
