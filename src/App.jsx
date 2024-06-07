import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BottomHelper from "./components/BottomHelper";
import Navbar from "./components/Navbar";
import EmblaCarousel from "./components/EmblaCarousel";
function App() {
  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <div className=" fixed bottom-3 left-40 right-40">
        <BottomHelper color="text-green-700" />
      </div>
    </>
  );
}

export default App;
