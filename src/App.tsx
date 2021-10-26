import React from "react";
import "./App.css";

import { HeaderComponent } from "./components/HeaderComponent";
import { HomeComponent } from "./components/HomeComponent";

function App() {
  return (
    <div className="">
      <HeaderComponent />
      <main className="main">
        <HomeComponent />
      </main>
    </div>
  );
}

export default App;
