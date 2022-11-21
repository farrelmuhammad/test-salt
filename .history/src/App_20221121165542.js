import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import Channels from "./components/Channels";
import Activity from "./components/Activity";

function App() {
  return (
    <>
      <div className="container">
        <div class="flex ">
          <div className="flex-auto w-64">
            <Box />
          </div>
          <div className="flex-auto w-8">
            <Activity />
          </div>
        </div>
      </div>
      <Channels />
    </>
  );
}

export default App;
