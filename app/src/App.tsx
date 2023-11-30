import { useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

export const CountDisplay = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%cCountDisplay render:" + ref.current.toString(),
    "color: yellow"
  );
  console.log('props.count', props.count)

  return <>{props.count}</>;
};

export const CounterComponentMemo = React.memo((props) => {
  return <CounterComponent />
}, (prevProps, nextProps) => { return false })

export const CounterComponent = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%cCounterComponent render:" + ref.current.toString(),
    "color: yellow"
  );
  const [count, setCount] = useState(0);

  const onClick = () => setCount((count) => count + 1)

  return (
    <>
      <button onClick={onClick}>
        count is {count}
      </button>
      {/*<CountDisplay count={count} /> */}
    </>
  );
};

function App() {
  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%cParent render:" + ref.current.toString(),
    "color: yellow"
  );
  return (
    <>
      <CounterComponentMemo />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
