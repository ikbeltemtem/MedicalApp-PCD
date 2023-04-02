package com.medical.project.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="doctor")
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_doctor")
    private int id_doctor;

    @Column(name="speciality")
    private String speciality;

}
