import { Route, Routes } from "react-router-dom";
import Counter from "./compontes/counter";
import FormComponents from "./compontes/formComponents";
import ToggleComponent from "./compontes/ToggleComponent";
import Dashboard from "./compontes/Dashboard";
import Login from "./compontes/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="counter" element = {<Counter/>} />
        <Route path="form" element = {<FormComponents/>} />
        <Route path="toggle" element={<ToggleComponent/>}/>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="login" element={<Login/>} />

      </Routes>
    </div>
  );
}

export default App;
