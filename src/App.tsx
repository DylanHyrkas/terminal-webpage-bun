import "./index.css";

export function App() {
  return (
    <div className="app">
      <div className="terminal-line">
        <div className="arrow">-&gt;</div>
        <div className="tilde">~</div>
        <span> echo "Hello World!"</span>
        <div className="cursor" />
      </div>
    </div>
  );
}

export default App;
