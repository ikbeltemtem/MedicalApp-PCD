package com.medical.project.Controller;


import com.medical.project.Dao.DoctorRepository;
import com.medical.project.Entity.Doctor;
import com.medical.project.Service.DoctorService;
import com.medical.project.Service.DoctorServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    public DoctorController(DoctorService doctorService){
        this.doctorService=doctorService;
    }
    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "Requestor-Type", exposedHeaders = "X-Get-Header")
    @GetMapping("/getAll")
    public List<Doctor> getDoctors(){

        return doctorService.getDoctors();
    }

    @GetMapping("/get/{id_doctor}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable("id_doctor") Long id_doctor){
        Doctor doc=doctorService.findDoctorById(id_doctor);
        return new ResponseEntity<>(doc, HttpStatus.OK);
    }
    @GetMapping("/find/{email}")
    public ResponseEntity<Doctor> findMedecinByEmail(@PathVariable String email ){
        Doctor medecin = doctorService.findMedecinByEmail(email);
        return ResponseEntity.ok(medecin);
    }

    @PostMapping("/add")
    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doc){
        Doctor docnew = doctorService.createDoctor(doc);
        return new ResponseEntity<>(docnew,HttpStatus.CREATED);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable("id") Long id_doctor,@RequestBody Doctor doc){
        Doctor docnew=doctorService.updateDoctor(id_doctor,doc);
        return ResponseEntity.ok(docnew);

    }
    @DeleteMapping("/delete/{id_doctor}")
    public ResponseEntity<?> deleteDoctor(@PathVariable("id_doctor") Long id_doctor){
        doctorService.deleteDoctor(id_doctor);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}