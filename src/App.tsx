import "./App.css";
import Topper from "./components/Topper";
import Template_undangan from "./components/Template-undangan";
import Template_publikasi from "./components/Template-publikasi";

function App() {
  return (
    <main>
      <Topper />
      <div className="vertical-indenting"></div>
      <Template_undangan />
      <Template_publikasi />
    </main>
  );
}

export default App;
