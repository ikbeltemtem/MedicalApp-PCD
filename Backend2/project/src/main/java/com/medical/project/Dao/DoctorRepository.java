package com.medical.project.Dao;

import com.medical.project.Entity.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {

    public Optional<Doctor> findByEmail(String email);
}