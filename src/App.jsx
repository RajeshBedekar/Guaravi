import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { EmployeePage } from "./components/EmployeePage";
import { EmployeeLogin } from "./components/EmployeeLogin";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/employe" Component={EmployeePage} />
      <Route path="/admin" Component={EmployeeLogin} />
    </Routes>
  );
}

export default App;
