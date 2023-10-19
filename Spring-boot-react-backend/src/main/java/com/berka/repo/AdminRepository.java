package com.berka.repo;

import com.berka.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {


    Admin findAdminByEmailAndPassword(String email, String password);

}
