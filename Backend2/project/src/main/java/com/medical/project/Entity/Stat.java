package com.medical.project.Entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="stat")
@Entity
@Data
@NoArgsConstructor
public class Stat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name="nb")
    private String nb;

    @Column(name="amount")
    private long amount;

    @Column(name="color")
    private String color;
}
