import "./App.css";
import Timeline from "./components/Timeline/Timeline";
import Sidebar from "./components/Sideber/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
    </div>
  );
}

export default App;
