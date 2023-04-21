package com.medical.project.Dao;

import com.medical.project.Entity.Patient;
import com.medical.project.Entity.Secretaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface PatientRepository extends JpaRepository<Patient,Long> {
    public Optional<Patient> findByEmail(String email);
}
