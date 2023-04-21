package com.medical.project.Service;

import com.medical.project.Dao.PatientRepository;
import com.medical.project.Dao.SecretaireRepository;
import com.medical.project.Entity.Patient;
import com.medical.project.Entity.Secretaire;
import com.medical.project.Exception.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PatientService {
    private PatientRepository patientRepo;
    @Autowired
    public PatientService(PatientRepository secRepo){
        this.patientRepo=secRepo;
    }

    public Patient createP(Patient secretaire){

        return patientRepo.save(secretaire);
    }

    public List<Patient> getP(){

        return patientRepo.findAll();
    }
    public Patient updateP(long ids,Patient secretaire){
        Patient secr=patientRepo.findById(ids).orElseThrow(()-> new ResourceNotFoundException("patient non trouvé avec l'id :"+ids));
        secr.setFirstname(secretaire.getFirstname());
        secr.setLastname(secretaire.getLastname());
        secr.setAge(secretaire.getAge());
        secr.setAdresse(secretaire.getAdresse());
        secr.setTel(secretaire.getTel());
        secr.setEmail(secretaire.getEmail());
        secr.setPassword(secretaire.getPassword());

        return patientRepo.save(secr);
    }

    public Patient findPatientById(long ids) {
        return patientRepo.findById(ids).orElseThrow(() -> new ResourceNotFoundException("patient non trouvé avec l'id :" + ids));
    }

    public Patient findPatientByEmail(String email ){
        return patientRepo.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException ("Médecin non trouvé avec l'email :"+email));

    }
}
