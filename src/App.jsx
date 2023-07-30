import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { EmployeePage } from "./components/EmployeePage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/employe" Component={EmployeePage} />
    </Routes>
  );
}

export default App;
