import { useState } from "react";
import "./App.css";
import Topper from "./components/Topper";
import Box_template_undangan from "./components/Box-template-undangan";
import Box_publikasi from "./components/Box-publikasi";
import Bottom from "./components/Bottom";

function App() {
  const [und, setUnd]: any = useState([]);
  const [box, setBox]: any = useState(true);

  return (
    <main>
      <div className="center">
        <Topper setter={setBox} />
        <div className="vertical-indenting"></div>
        {box ? (
          <Box_template_undangan getter={und} setter={setUnd} />
        ) : (
          <Box_publikasi getter={und} setter={setUnd} />
        )}
        <Bottom />
      </div>
    </main>
  );
}

export default App;
