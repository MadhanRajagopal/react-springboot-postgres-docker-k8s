package com.dev.controller;

import com.dev.entity.Employee;
import com.dev.repo.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    private final EmployeeRepository repo;

    public EmployeeController(EmployeeRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee emp) {
        return repo.save(emp);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
        emp.setId(id);
        return repo.save(emp);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        repo.deleteById(id);
    }
}

