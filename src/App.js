import "./App.css";
import MapChart from "./components/MapChart/MapChart";

function App() {
  return (
    <>
      <h1 className="title">Network Usage among regions around the world </h1>
      <div className="App">
        <MapChart />
      </div>
    </>
  );
}

export default App;
