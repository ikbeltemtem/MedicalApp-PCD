package com.medical.project.Controller;


import com.medical.project.Dao.NotifRepository;
import com.medical.project.Entity.Notif;
import com.medical.project.Entity.Therapie;
import com.medical.project.Exception.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/api/notif")
@RestController
public class NotifController {

    @Autowired
    private NotifRepository notifRepository;

    public NotifController(NotifRepository notifRepository){
        this.notifRepository=notifRepository;
    }


    @GetMapping("/getAll")
    public List<Notif> getAllNotif(){
        return notifRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Notif> getSecretaireById(@PathVariable Long id){
        Notif secretaire = notifRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Notif non trouvé avec l'id :"+id));
        return ResponseEntity.ok(secretaire);
    }

    @PostMapping("/create")
    public Notif createSecretaire(@RequestBody Notif secretaire) {

        return notifRepository.save(secretaire);
    }

    /*@DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMedecin(@PathVariable Long id){

        Notif therapie = notifRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Notif non trouvé avec l'id :"+id));
        notifRepository.delete(therapie);
        //retourne void c'est pour cela qu'on a créer the map pour retourner une réponse

        Map<String,Boolean>  rep = new HashMap<>();
        rep.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(rep);

    }*/
    @Transactional

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteNotif(@PathVariable("id") Long id){
        notifRepository.deleteNotifById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Transactional

    @DeleteMapping("/deleteAll")
    public ResponseEntity<?> deleteAll(){
        notifRepository.deleteAll();

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
