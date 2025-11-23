import { useState } from "react";
import type { Employee } from "../types/Employee";

interface Props {
  onAdd: (emp: Employee) => void;
}

function EmployeeForm({ onAdd }: Props) {
  const [form, setForm] = useState<Employee>({
    name: "",
    email: "",
    designation: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.designation) {
      setError("All fields are required");
      return;
    }
    setError("");
    onAdd(form);
    setForm({ name: "", email: "", designation: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Designation"
        value={form.designation}
        onChange={(e) => setForm({ ...form, designation: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default EmployeeForm;
