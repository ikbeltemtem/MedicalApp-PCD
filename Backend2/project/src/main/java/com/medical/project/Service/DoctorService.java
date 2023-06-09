package com.medical.project.Service;

import com.medical.project.Entity.Doctor;

import java.util.List;

public interface DoctorService {

    //public appointment saveRdv(appointment Rdv);
    public List<Doctor> getDoctors();
    public Doctor updateDoctor(Long id_doctor,Doctor doc);
    public Doctor findDoctorById(Long id_doctor);
    public Doctor createDoctor(Doctor doc);
    public Doctor findMedecinByEmail(String email );
    public void deleteDoctor(Long id_doctor);


}