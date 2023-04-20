package com.medical.project.Entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;


@Table(name="therapie")
@Entity
@Data
@NoArgsConstructor
public class Therapie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id_t;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name=" ratefive")
    private long  ratefive;

    @Column(name="ratefour")
    private long ratefour;

    @Column(name="ratethree")
    private long ratethree;

    @Column(name="ratetwo")
    private long ratetwo;

    @Column(name="rateone")
    private long rateone;

    @Column(name="star")
    private long star;

    @Column(name="rateall")
    private long rateall;


    public Therapie(String name, String description, String imageUrl, long ratefive, long ratefour, long ratethree, long ratetwo, long rateone,
                    long starRating, long rateall) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.ratefive=ratefive;
        this.ratefour=ratefour;
        this.ratethree = ratethree;
        this.ratetwo = ratetwo;
        this.rateone = rateone;
        this.star = starRating;
        this.rateall = rateall;
    }
}