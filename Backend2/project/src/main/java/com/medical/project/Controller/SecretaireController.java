package com.medical.project.Controller;


import com.medical.project.Dao.SecretaireRepository;
import com.medical.project.Entity.Doctor;
import com.medical.project.Entity.Secretaire;
import com.medical.project.Service.SecretaireService;
import com.medical.project.Service.SecretaireServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/secretaire")
public class SecretaireController {

    @Autowired
    private SecretaireService secretaireService;

    public SecretaireController(SecretaireService secretaireService){
        this.secretaireService=secretaireService;
    }

    @GetMapping("/getAll")
    public List<Secretaire> getSecretaires(){

        return secretaireService.getSecretaires();
    }

    @GetMapping("/get/{ids}")
    public ResponseEntity<Secretaire> getSecretaireById(@PathVariable("ids") Long ids){
        Secretaire sec=secretaireService.findSecretaireById(ids);
        return new ResponseEntity<>(sec, HttpStatus.OK);
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<Secretaire> findMedecinByEmail(@PathVariable String email ){
        Secretaire sec = secretaireService.findSecByEmail(email);
        return ResponseEntity.ok(sec);
    }

    @PostMapping("/add")
    public ResponseEntity<Secretaire> addSecretaire(@RequestBody Secretaire sec){
        Secretaire secnew = secretaireService.createSecretaire(sec);
        return new ResponseEntity<>(secnew,HttpStatus.CREATED);

    }

    @PutMapping("/update/{ids}")
    public ResponseEntity<Secretaire> updateSecretaire(@PathVariable("ids") Long ids,@RequestBody Secretaire sec){
        Secretaire secnew=secretaireService.updateSecretaire(ids,sec);
        return ResponseEntity.ok(secnew);

    }
    @DeleteMapping("/delete/{ids}")
    public ResponseEntity<?> deleteSecretaire(@PathVariable("ids") Long ids){
        secretaireService.deleteSecretaire(ids);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}