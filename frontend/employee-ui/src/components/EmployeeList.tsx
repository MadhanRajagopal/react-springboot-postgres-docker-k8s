import type { Employee } from "../types/Employee";

interface Props {
  employees: Employee[];
  onDelete: (id: number) => void;
}

function EmployeeList({ employees, onDelete }: Props) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <ul>
      {employees.map((emp) => (
        <li>
          {emp.name} - {emp.email} - {emp.designation}
          {emp.id && (
            <button
              onClick={() => onDelete(emp.id!)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
