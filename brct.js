import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello, React 👋</h1>
      <p>This is a basic React app in JavaScript.</p>

      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
    </div>
  );
}

export default App;
