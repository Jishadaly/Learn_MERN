import { Route, Routes } from "react-router-dom";
import Counter from "./compontes/counter";
import FormComponents from "./compontes/formComponents";
import ToggleComponent from "./compontes/ToggleComponent";
import Dashboard from "./compontes/Dashboard";
import Login from "./compontes/Login";
import StopWatch from "./compontes/StopWatch";
import ErrorBoundary from "./utils/ErrorBountery";
import Home from "./compontes/Home";
import TodoApp from "./compontes/Todo";
import Parant from "./compontes/Parant";
import ParentComponent from "./compontes/RefAndForwardRef";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        
        <Routes>
          {/* <Route path="/" element = {<Home/>}/> */}
          {/* <Route path="/" element = {<Parant/>}/> */}
          <Route path="/" element = {<ParentComponent/>}/>
          <Route path="counter" element={<Counter />} />
          <Route path="form" element={<FormComponents />} />
          <Route path="toggle" element={<ToggleComponent />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="stopWatch" element={<StopWatch />} />

        </Routes>
      </ErrorBoundary>
      {/* <TodoApp/> */}
    </div>
  );
}

export default App;
