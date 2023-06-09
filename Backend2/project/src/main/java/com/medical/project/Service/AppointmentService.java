package com.medical.project.Service;

import com.medical.project.Entity.appointment;
import org.springframework.stereotype.Service;

import java.util.List;


public interface AppointmentService {

    //public appointment saveRdv(appointment Rdv);
    public List<appointment> getAppointments();
    public appointment updateAppoint(Long id,appointment appoint);
    public appointment findAppointmentById(Long id);
    public appointment createAppointment(appointment appoint);
    public List<appointment> getArrive();
    public List<appointment> findAppointByEmail(String email );



        public void deleteAppointment(Long id);
}
