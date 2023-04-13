package com.medical.project.Service;

import com.medical.project.Dao.appointmentRepository;
import com.medical.project.Entity.appointment;
import com.medical.project.Exception.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class AppointmentServiceImp  implements AppointmentService{
    private appointmentRepository appRepo;
    @Autowired
    public AppointmentServiceImp(appointmentRepository appRepo){
        this.appRepo=appRepo;
    }

    public appointment createAppointment(appointment appoint){

        return appRepo.save(appoint);
    }

    public List<appointment> getAppointments(){

        return appRepo.findAll();
    }
    public appointment updateAppoint(Long id,appointment appoint){
        appointment appt=appRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("patient non trouvé avec l'id :"+id));
        appt.setName(appoint.getName());
        appt.setAge(appoint.getAge());
        appt.setPrenom(appoint.getPrenom());
        appt.setDispo1(appoint.getDispo1());
        appt.setSymptoms(appoint.getSymptoms());
        appt.setDispo2(appoint.getDispo2());
        appt.setEmail(appoint.getEmail());
        appt.setNumber(appoint.getNumber());
        return appRepo.save(appt);
    }

    public appointment findAppointmentById(Long id){
        return appRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException ("patient non trouvé avec l'id :"+id));

    }
    public void deleteAppointment(Long id){
        appRepo.deleteAppointmentById(id);
    }


}
