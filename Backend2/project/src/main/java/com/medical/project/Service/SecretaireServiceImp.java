package com.medical.project.Service;

import com.medical.project.Dao.SecretaireRepository;
import com.medical.project.Entity.Doctor;
import com.medical.project.Entity.Secretaire;
import com.medical.project.Exception.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class SecretaireServiceImp  implements SecretaireService{
    private SecretaireRepository secRepo;
    @Autowired
    public SecretaireServiceImp(SecretaireRepository secRepo){
        this.secRepo=secRepo;
    }

    public Secretaire createSecretaire(Secretaire secretaire){

        return secRepo.save(secretaire);
    }

    public List<Secretaire> getSecretaires(){

        return secRepo.findAll();
    }
    public Secretaire updateSecretaire(long ids,Secretaire secretaire){
        Secretaire secr=secRepo.findById(ids).orElseThrow(()-> new ResourceNotFoundException("patient non trouvé avec l'id :"+ids));
        secr.setFirstname(secretaire.getFirstname());
        secr.setLastname(secretaire.getLastname());
        secr.setAge(secretaire.getAge());
        secr.setAdresse(secretaire.getAdresse());
        secr.setTel(secretaire.getTel());
        secr.setEmail(secretaire.getEmail());
        secr.setPassword(secretaire.getPassword());

        return secRepo.save(secr);
    }

    public Secretaire findSecretaireById(long ids) {
        return secRepo.findById(ids).orElseThrow(() -> new ResourceNotFoundException("patient non trouvé avec l'id :" + ids));
    }

        public Secretaire findSecByEmail(String email ){
            return secRepo.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException ("Médecin non trouvé avec l'email :"+email));

        }


    /*public void deleteSecretaire(int ids){
      /*  secRepo.deleteSecretaireById(ids);
    }*/


}