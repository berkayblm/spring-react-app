package com.berka.service;

import com.berka.model.Admin;

import java.util.List;

public interface AdminService {
    Admin saveAdmin(Admin admin);

    List<Admin> getAllAdmins();

    Admin getAdminByEmail(String email, String password);
}
