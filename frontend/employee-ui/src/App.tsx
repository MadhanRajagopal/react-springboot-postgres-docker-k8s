import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
} from "./services/employeeService";
import type { Employee } from "./types/Employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAdd = async (emp: Employee) => {
    try {
      const res = await addEmployee(emp);
      setEmployees([...employees, res.data]);
    } catch (error) {
      console.error("Error adding employee", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Employee Management {import.meta.env.VITE_APP_ENV}</h2>
      <EmployeeForm onAdd={handleAdd} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <EmployeeList employees={employees} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
