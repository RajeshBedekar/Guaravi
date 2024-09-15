import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { EmployeePage } from "./components/EmployeePage";
import { EmployeeLogin } from "./components/EmployeeLogin";
import Cable from "./components/Cable";
import { Customer } from "./components/Customer";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/employe" Component={EmployeePage} />
      <Route path="/admin" Component={EmployeeLogin} />
      <Route path="/cable" Component={Cable} />
      <Route path="/customer" Component={Customer} />
    </Routes>
  );
}

export default App;
