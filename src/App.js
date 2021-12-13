import "./App.css";
import CompositionDemo from "./components/FeatureFlagDemo/CompositionDemo";
import HOCDemo from "./components/FeatureFlagDemo/HOCDemo";

function App() {
  return (
    <div className="App">
      <CompositionDemo />
      <HOCDemo />
    </div>
  );
}

export default App;
