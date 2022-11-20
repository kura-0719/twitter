import "./App.css";
import Timeline from "./components/Timeline/Timeline";
import Sidebar from "./components/Sideber/Sidebar";
import Widgets from "./components/Widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Timeline */}
      <Timeline />

      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
