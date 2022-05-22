import { Fade } from "react-reveal";
import Typed from "react-typed";
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="App">
      <h1>
        <Typed strings={"Hello Developers!"} />
      </h1>
      <Dashboard />
    </div>
  );
}

export default App;
