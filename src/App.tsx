import { useState } from "react";
import "./App.css";
import { Grid } from "react-loader-spinner";
import Topper from "./components/Topper";
import Box_template_undangan from "./components/Box-template-undangan";
import Box_publikasi from "./components/Box-publikasi";
import Bottom from "./components/Bottom";

function App() {
  const [und, setUnd]: any = useState([]);
  const [box, setBox]: any = useState(true);
  const [load, setLoad]: any = useState(true);

  return (
    <main>
      <div className="center">
        {/* Head */}
        <Topper setter={setBox} />

        {/* Loader */}
        <div className="loader-img">
          <Grid
            visible={load}
            height="200"
            width="80"
            color="#ff8b00"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>

        {/* Content */}
        {box ? (
          <Box_template_undangan
            getter={und}
            setter={setUnd}
            onload={setLoad}
          />
        ) : (
          <Box_publikasi getter={und} setter={setUnd} onload={setLoad} />
        )}

        {/* footer */}
        <Bottom />
      </div>
    </main>
  );
}

export default App;
