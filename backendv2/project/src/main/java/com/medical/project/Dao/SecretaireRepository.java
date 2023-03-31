package com.medical.project.Dao;


import com.medical.project.Entity.Secretaire;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SecretaireRepository extends JpaRepository<Secretaire,Long> {
    /*void deleteSecretaireById(long ids);*/
}