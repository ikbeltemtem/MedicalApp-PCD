package com.medical.project.Controller;


import com.medical.project.Entity.Patient;
import com.medical.project.Entity.Secretaire;
import com.medical.project.Service.PatientService;
import com.medical.project.Service.SecretaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    public PatientController(PatientService patientService){
        this.patientService=patientService;
    }

    @GetMapping("/getAll")
    public List<Patient> getPatients(){

        return patientService.getP();
    }

    @GetMapping("/get/{ids}")
    public ResponseEntity<Patient> getPById(@PathVariable("ids") long ids){
        Patient sec=patientService.findPatientById(ids);
        return new ResponseEntity<>(sec, HttpStatus.OK);
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<Patient> findPaByEmail(@PathVariable String email ){
        Patient sec = patientService.findPatientByEmail(email);
        return ResponseEntity.ok(sec);
    }

    @PostMapping("/add")
    public ResponseEntity<Patient> addPatient(@RequestBody Patient sec){
        Patient secnew = patientService.createP(sec);
        return new ResponseEntity<>(secnew,HttpStatus.CREATED);

    }

    @PutMapping("/update/{ids}")
    public ResponseEntity<Patient> updatePatient(@PathVariable("ids") long ids,@RequestBody Patient sec){
        Patient secnew=patientService.updateP(ids,sec);
        return ResponseEntity.ok(secnew);

    }
}
