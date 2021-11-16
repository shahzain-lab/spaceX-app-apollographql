import React from 'react';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-center bg-gray-300">
      <header className="App-header">
        <p className="my-2 font-bold">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="bg-purple-600 hover:bg-purple-700 py-1 px-4 rounded text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex justify-center my-2">
          <button className="py-1 px-4 rounded  bg-green-400 text-white hover:bg-green-500">First</button>
          <button className="py-1 px-4 mx-2 rounded bg-blue-500 text-white hover:bg-blue-600">Second</button>
          <button className="py-1 px-4 rounded bg-pink-500 text-white hover:bg-pink-600">Third</button>
        </div>
      </header>
    </div>
  );
}

export default App;
