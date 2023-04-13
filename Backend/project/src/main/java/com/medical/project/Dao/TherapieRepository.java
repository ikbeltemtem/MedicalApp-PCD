package com.medical.project.Dao;

import com.medical.project.Entity.Therapie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TherapieRepository extends JpaRepository<Therapie,Long> {
}
