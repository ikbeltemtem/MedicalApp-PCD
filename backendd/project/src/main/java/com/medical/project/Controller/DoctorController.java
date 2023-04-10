package com.medical.project.Controller;


import com.medical.project.Entity.Doctor;
import com.medical.project.Service.DoctorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {

    private DoctorService doctorService;

    public DoctorController(DoctorService doctorService){
        this.doctorService=doctorService;
    }

    @GetMapping("/getAllDoctors")
    public List<Doctor> getDoctors(){return doctorService.getDoctors();}

    @PostMapping("/createDoctor")
    public void createDoctor(@RequestBody Doctor doctor){
        doctorService.saveDoctor(doctor);
    }
}
