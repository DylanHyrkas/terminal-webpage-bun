import { useEffect, useState } from "react";
import "./index.css";

const COMMAND = 'echo "Hello World!"';
const TYPING_SPEED = 100;
const PAUSE_DURATION = 1500;

export function App() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let interval: number;

    const typeLoop = () => {
      interval = window.setInterval(() => {
        if (i < COMMAND.length) {
          setDisplayText(COMMAND.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayText("");
            i = 0;
            typeLoop();
          }, PAUSE_DURATION);
        }
      }, TYPING_SPEED);
    };

    typeLoop();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="terminal-line">
        <div className="arrow">-&gt;</div>
        <div className="tilde">~</div>
        <span>{displayText}</span>
        {showCursor && <div className="cursor" />}
      </div>
    </div>
  );
}

export default App;
