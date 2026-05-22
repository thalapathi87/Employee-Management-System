package com.example.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    EmployeeService service;

    // CREATE
    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee emp) {

        return service.saveEmployee(emp);
    }

    // READ
    @GetMapping("/employees")
    public List<Employee> getEmployees() {

        return service.getEmployees();
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable int id) {

        service.deleteEmployee(id);

        return "Employee Deleted";
    }

    // UPDATE
    @PutMapping("/updateEmployee")
    public Employee updateEmployee(@RequestBody Employee emp) {

        return service.saveEmployee(emp);
    }
}