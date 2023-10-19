package com.berka.service;

import com.berka.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeService  {
    Employee saveEmployee(Employee employee);
    List<Employee> getAllEmployees();

    Employee getEmployeeByEmailAndPassword(String email, String password);
}
