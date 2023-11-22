import React from 'react';
// import logo from './logo.svg';
import BloackRenderer from './components/BlockRenderer';
import MOCK_DATA from './Mock_data';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Block } from './types/Block';

function App() {
  const blocks = Object.entries(MOCK_DATA).reduce<Block[]>((prev, [blockId, block]) => {
    return [...prev, block]
  }, [])
  return (
    <div className="App">
      {blocks.map((block) => (
          <BloackRenderer key={block.id} {...block}></BloackRenderer>
        ))}
      {/* <div>Heading 1</div>
      <div>Heading 2</div>
      <div>Heading 3</div>
      <div>Callout</div>
      <div>Quote</div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
