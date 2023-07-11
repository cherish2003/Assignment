import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Banner } from "./components/banner";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <Banner />
      <Section />
    </>
  );
}

export default App;
