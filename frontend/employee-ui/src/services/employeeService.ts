import apiClient from "../config/axios";
import type { Employee } from "../types/Employee";

export const getEmployees = async () => {
  return apiClient.get<Employee[]>("/employees");
};

export const addEmployee = async (employee: Employee) => {
  return apiClient.post<Employee>("/employees", employee);
};

export const deleteEmployee = async (id: number) => {
  return apiClient.delete(`/employees/${id}`);
};
