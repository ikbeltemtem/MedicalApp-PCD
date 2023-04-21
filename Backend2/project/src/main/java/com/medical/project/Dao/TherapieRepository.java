package com.medical.project.Dao;

import com.medical.project.Entity.Therapie;
import com.medical.project.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TherapieRepository extends JpaRepository<Therapie,Long> {



}
