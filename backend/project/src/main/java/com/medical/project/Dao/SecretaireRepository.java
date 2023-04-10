package com.medical.project.Dao;

import com.medical.project.Entity.Secretaire;
import com.medical.project.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecretaireRepository extends JpaRepository<Secretaire, Integer> {
}
