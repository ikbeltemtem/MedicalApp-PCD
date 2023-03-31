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
    private long ids;

    @Column(name="cin")
    private long cin;

}