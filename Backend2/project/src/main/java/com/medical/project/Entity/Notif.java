package com.medical.project.Entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name="notif")
@Data
public class Notif {

    @Id   //jpa mapping
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="prenom")
    private String prenom;

    @Column(name="email")
    private String email;

    @Column(name="daterdv")

    private String daterdv;

    @Column(name="therapie")
    private String therapie;

    @Column(name="dispo1")
    private String dispo1;
}
