package com.medical.project.Service;

import com.medical.project.Dao.DoctorRepository;
import com.medical.project.Entity.Doctor;
import com.medical.project.Exception.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class DoctorServiceImp  implements DoctorService{
    private DoctorRepository docRepo;
    @Autowired
    public DoctorServiceImp(DoctorRepository docRepo){
        this.docRepo=docRepo;
    }

    public Doctor createDoctor(Doctor doctor){

        return docRepo.save(doctor);
    }

    public List<Doctor> getDoctors(){

        return docRepo.findAll();
    }
    public Doctor updateDoctor(int id_doctor,Doctor doctor){
        Doctor doct=docRepo.findById(id_doctor).orElseThrow(()-> new ResourceNotFoundException("patient non trouvé avec l'id :"+id_doctor));

        doct.setSpeciality(doctor.getSpeciality());
        doct.setFirstname(doctor.getFirstname());
        doct.setLastname(doctor.getLastname());
        doct.setAge(doctor.getAge());
        doct.setAdresse(doctor.getAdresse());
        doct.setEmail(doctor.getEmail());
        doct.setPassword(doctor.getPassword());
        return docRepo.save(doct);
    }

    public Doctor findDoctorById(int id_doctor){
        return docRepo.findById(id_doctor).orElseThrow(()-> new ResourceNotFoundException ("patient non trouvé avec l'id :"+id_doctor));

    }


    public Doctor findMedecinByEmail(String email ){
        return docRepo.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException ("Médecin non trouvé avec l'email :"+email));

    }
    /*public void deleteDoctor(int id_doctor){
       docRepo.deleteDoctorById(id_doctor);
    }*/


}