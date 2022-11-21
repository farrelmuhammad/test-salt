import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import Channels from "./components/Channels";
import Activity from "./components/Activity";
import People from "./components/People";

function App() {
  return (
    <>
      <div className="container">
        <div class="flex grid-cols-2 gap-2 m-10">
          <div className="flex-auto w-64">
            <Box />
            <People className="" />
          </div>
          <div className="flex-auto w-8">
            <Activity />
            <Channels />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
