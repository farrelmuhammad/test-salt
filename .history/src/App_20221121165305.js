import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import Channels from "./components/Channels";
import Activity from "./components/Activity";

function App() {
  return (
    <>
      <div className="container">
        <div class="grid grid-cols-2 gap-2">
          <div>
            <Box />
          </div>
          <div>
            <Activity />
          </div>
        </div>
      </div>
      <Channels />
    </>
  );
}

export default App;
