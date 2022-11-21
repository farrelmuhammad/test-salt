import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import Channels from "./components/Channels";
import Activity from "./components/Activity";

function App() {
  return (
    <>
      <div className="container">
        <div class="flex grid-cols-2 gap-2 m-10">
          <div className="flex-auto w-32">
            <Box />
          </div>
          <div className="flex-auto w-16">
            <Activity />
          </div>
        </div>
      </div>
      <Channels />
    </>
  );
}

export default App;
