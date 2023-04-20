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

    /*@ManyToMany(fetch =FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name="therapie_image",joinColumns = {@JoinColumn(name="t_id")}, inverseJoinColumns = {@JoinColumn(name="id")})
    private Set<ImageModel> therapieImage;*/


    public Therapie(String name, String description, String imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}