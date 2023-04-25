package com.medical.project.Dao;

import com.medical.project.Entity.Doctor;
import com.medical.project.Entity.appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@Repository
//@CrossOrigin("http://localhost:4200")
public interface appointmentRepository extends JpaRepository<appointment,Long> {
    void deleteAppointmentById(Long id);
    public List<appointment> findByArrivee(String arrivee);
    public List<appointment> findByEmail(String email);

}
