package com.medical.project.Entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name="appointment")
@Data
public class appointment {
    @Id   //jpa mapping
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="prenom")
    private String prenom;

    @Column(name="age")
    private long age;

    @Column(name="email")
    private String email;

    @Column(name="daterdv")
    @CreationTimestamp  //hibernate automatisation
    private Date daterdv;


    @Column(name="number")
    private long number;

   @Column(name="Symptoms")
    private String Symptoms;


    @Column(name="dispo1")
    private String dispo1;

    @Column(name="dispo2")
    private String dispo2;

    @Column(name="dispo3")
    private String dispo3;

    @Column(name="therapie")
    private String therapie;






}
