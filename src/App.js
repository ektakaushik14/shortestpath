import React from 'react';
import './App.css';
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import SortingVisualizer from './sortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <div className="algo">
      <div className="ada">ADA ppt for <span>dijkstra's algo</span>  and <span>merge sort</span></div>
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
      <div className="algo">
        <SortingVisualizer></SortingVisualizer>
      </div>
    </div>
  );
}

export default App;
