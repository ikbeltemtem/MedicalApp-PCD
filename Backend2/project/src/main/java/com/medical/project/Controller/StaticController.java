package com.medical.project.Controller;


import com.medical.project.Dao.StatRepo;
import com.medical.project.Entity.Stat;
import com.medical.project.Entity.Therapie;
import com.medical.project.Entity.appointment;
import com.medical.project.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/chart")
public class StaticController {
 @Autowired
    private StatRepo statRepo;

 public StaticController(StatRepo statRepo){
     this.statRepo=statRepo;
 }

    @GetMapping("/getAll")
    public List<Stat> getStat(){
     return statRepo.findAll();

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Stat> update(@PathVariable Long id, @RequestBody Stat rendezvousInfo){
        Stat rendezvous = statRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("stat non trouvé avec l'id :"+id));

        rendezvous.setNb(rendezvousInfo.getNb());
        rendezvous.setAmount(rendezvousInfo.getAmount());
        rendezvous.setColor(rendezvousInfo.getColor());
        Stat rendezvousAjour = statRepo.save(rendezvous);
        return ResponseEntity.ok(rendezvousAjour);
    }
}
