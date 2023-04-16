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

    @Column(name="firstname")
    private String firstname;

    @Column(name="lastname")
    private String lastname;

    @Column(name="age")
    private String age;

    @Column(name="adresse")
    private String adresse;

    @Column(name="tel")
    private String tel;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="speciality")
    private String speciality;


}
