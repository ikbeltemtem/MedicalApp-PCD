package com.medical.project.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="secretaire")
@Data
public class Secretaire {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="ids")
    private Long id;

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




}
