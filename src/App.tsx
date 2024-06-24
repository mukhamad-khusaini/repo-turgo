import "./App.css";

function App() {
  return (
    <main>
      <div className="topper">
        <svg
          className="vector-background"
          xmlns="http://www.w3.org/2000/svg"
          width="390"
          height="368"
          viewBox="0 0 390 368"
          fill="none"
        >
          <path d="M127.401 278.149C-26.9281 251.717 -27.3318 103.717 -24 51L-24 -44C-6.49999 -53.5 388.01 -49.5 410.5 -49.5C432.99 -49.5 418.492 411.959 400.5 363.5C382.508 315.041 320.312 311.189 127.401 278.149Z" />
        </svg>
        <div className="background-template"></div>
        <img className="logo" src="/logo.png" alt="logo" />
      </div>
    </main>
  );
}

export default App;
