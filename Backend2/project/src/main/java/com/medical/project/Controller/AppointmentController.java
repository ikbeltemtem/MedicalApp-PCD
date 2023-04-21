package com.medical.project.Controller;


import com.medical.project.Dao.appointmentRepository;
import com.medical.project.Entity.appointment;
import com.medical.project.Service.AppointmentService;
import com.medical.project.Service.AppointmentServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin({"*"})
@RestController
@RequestMapping(path="/api/Rdv")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService){
        this.appointmentService=appointmentService;
    }


    @CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "Requestor-Type", exposedHeaders = "X-Get-Header")
    //@CrossOrigin({"*"})
    @GetMapping("/getAll")
    public List<appointment> getAppointments(){

        return appointmentService.getAppointments();
    }

    @GetMapping("/getAllArrive")
    public List<appointment> getArriv(){

        return appointmentService.getArrive();
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<appointment> getAppointmentById(@PathVariable("id") Long id){
        appointment appoint=appointmentService.findAppointmentById(id);
        return new ResponseEntity<>(appoint, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<appointment> addAppointment(@RequestBody appointment appoint){
        appointment appnew = appointmentService.createAppointment(appoint);
        return new ResponseEntity<>(appnew,HttpStatus.CREATED);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<appointment> updateAppointment(@PathVariable("id") Long id,@RequestBody appointment appoint){
        appointment appnew=appointmentService.updateAppoint(id,appoint);
        return ResponseEntity.ok(appnew);

    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable("id") Long id){
        appointmentService.deleteAppointment(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
