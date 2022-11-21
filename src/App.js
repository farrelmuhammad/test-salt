import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import Channels from "./components/Channels";
import Activity from "./components/Activity";
import People from "./components/People";
import Document from "./components/People copy";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div class="flex grid-cols-2 gap-2 m-10">
          <div className="flex-auto w-64">
            <Box />
          </div>
          <div className="flex-auto w-8">
            <Activity />
          </div>
        </div>
      </div>

      <div className="container">
        <div class="flex grid-cols-2 gap-2 m-10">
          <div className="flex-auto w-64">
            <People />
            <Document />
          </div>
          <div className="flex-auto w-8">
            <Channels />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
