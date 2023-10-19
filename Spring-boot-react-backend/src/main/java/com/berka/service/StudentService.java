package com.berka.service;

import com.berka.model.Student;

import java.util.List;

public interface StudentService {

     Student saveStudent(Student student);

     List<Student> getAllStudents();
}
