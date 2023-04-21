package com.medical.project.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.ZonedDateTime;
@Data
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="therapie")
    private String therapie;

    @Column(name="email")
    private String email;

    private String createdDate;
    @Column(columnDefinition = "TEXT")
    private String text;

}
