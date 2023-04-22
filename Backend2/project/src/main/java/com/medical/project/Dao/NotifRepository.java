package com.medical.project.Dao;

import com.medical.project.Entity.Notif;
import com.medical.project.Entity.appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotifRepository extends JpaRepository<Notif,Long> {
}
