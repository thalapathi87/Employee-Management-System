package com.example.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository repo;


    // SAVE
    public Employee saveEmployee(Employee emp) {

        return repo.save(emp);
    }


    // READ
    public List<Employee> getEmployees() {

        return repo.findAll();
    }


    // DELETE
    public void deleteEmployee(int id) {

        repo.deleteById(id);
    }
}