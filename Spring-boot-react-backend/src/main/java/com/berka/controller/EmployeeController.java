package com.berka.controller;

import com.berka.dto.EmailRequest;
import com.berka.model.Employee;
import com.berka.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin("http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/add")
    public String add(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return "New employee added";
    }

    @GetMapping("/getAllEmployees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping("/getEmployee")
    public Employee getEmployee(@RequestBody EmailRequest emailRequest) {

        return employeeService.getEmployeeByEmailAndPassword(emailRequest.getEmail(), emailRequest.getPassword());
    }
}
