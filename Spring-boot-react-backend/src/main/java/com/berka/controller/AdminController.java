package com.berka.controller;

import com.berka.dto.EmailRequest;
import com.berka.model.Admin;
import com.berka.model.Employee;
import com.berka.service.AdminService;
import com.berka.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/add")
    public String add(@RequestBody Admin admin) {
        adminService.saveAdmin(admin);
        return "New admin added";
    }

    @GetMapping("/getAllAdmins")
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @PostMapping("/getAdmin")
    public Admin getAdmin(@RequestBody EmailRequest emailRequest) {

        String email = emailRequest.getEmail();
        String password = emailRequest.getPassword();

        Admin admin = adminService.getAdminByEmail(email, password);
        System.out.println(email + " " + password);
        return admin;

    }

}
