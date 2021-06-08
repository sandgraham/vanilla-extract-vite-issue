import React from "react";
import { themeClassName } from "./theme.css";
import { pretty } from "./styles.css";

function App() {
  return (
    <div className={themeClassName}>
      <button type="button" className={pretty}>
        hello world
      </button>
    </div>
  );
}

export default App;
