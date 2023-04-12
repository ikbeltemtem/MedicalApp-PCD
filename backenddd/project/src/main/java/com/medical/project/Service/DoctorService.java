package com.medical.project.Service;

import com.medical.project.Entity.Doctor;

import java.util.List;

public interface DoctorService {

    //public appointment saveRdv(appointment Rdv);
    public List<Doctor> getDoctors();
    public Doctor updateDoctor(int id_doctor,Doctor doc);
    public Doctor findDoctorById(int id_doctor);
    public Doctor createDoctor(Doctor doc);

    /*public void deleteDoctor(int id_doctor);*/
}