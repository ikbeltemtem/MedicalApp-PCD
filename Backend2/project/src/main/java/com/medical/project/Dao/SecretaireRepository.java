package com.medical.project.Dao;

import com.medical.project.Entity.Doctor;
import com.medical.project.Entity.Secretaire;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface SecretaireRepository extends JpaRepository<Secretaire,Long> {
    /*void deleteSecretaireById(long ids);*/

    public Optional<Secretaire> findByEmail(String email);

}