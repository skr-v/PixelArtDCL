import React from 'react';
import PixelTable  from "./components/pixelTableComponent.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>The Scene Tables</h2>
        <PixelTable rows="18" cols="18"></PixelTable>
        <PixelTable rows="27" cols="48"></PixelTable>
        <PixelTable rows="32" cols="32"></PixelTable>
      </header>
    </div>
  );
}

export default App;
