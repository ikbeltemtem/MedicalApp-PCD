package com.medical.project.Service;

import com.medical.project.Dao.DoctorRepository;
import com.medical.project.Entity.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    private DoctorRepository doctorRepository;

    @Autowired
    public DoctorService(DoctorRepository doctorRepository){
        this.doctorRepository=doctorRepository;
    }

    public List<Doctor> getDoctors(){
        return doctorRepository.findAll();
    }

    public void saveDoctor(Doctor doctor){
        doctorRepository.save(doctor);
    }
}
