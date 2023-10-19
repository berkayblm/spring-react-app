package com.berka.service;

import com.berka.model.Admin;
import com.berka.model.Employee;
import com.berka.repo.AdminRepository;
import com.berka.repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService   {

    @Autowired
    AdminRepository adminRepository;
    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Admin getAdminByEmail(String email, String password) {
        return adminRepository.findAdminByEmailAndPassword(email, password);
    }

}
