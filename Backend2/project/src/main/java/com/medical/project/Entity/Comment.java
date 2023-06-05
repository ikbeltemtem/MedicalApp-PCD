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

    public Comment(String therapie, String email, String createdDate, String text) {
        this.therapie = therapie;
        this.email = email;
        this.createdDate = createdDate;
        this.text = text;
    }

    public Comment() {
    }
}
