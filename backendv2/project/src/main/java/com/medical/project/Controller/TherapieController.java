package com.medical.project.Controller;

import com.medical.project.Dao.TherapieRepository;
import com.medical.project.Entity.Therapie;
import com.medical.project.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RequestMapping("/api/therapie")
@RestController
public class TherapieController {

    @Autowired
    private TherapieRepository therapieRepository;

    @PostMapping("/upload")

    public Therapie uplaodImage(@RequestParam("imageFile") MultipartFile file ,@RequestParam("nomTherapie") String nomTherapie,@RequestParam("description") String description,@RequestParam("video") String video) throws IOException
    {

        System.out.println("Original Image Byte Size - " + file.getBytes().length );
        Therapie img1= new Therapie(nomTherapie,description,file.getOriginalFilename());

        String folder ="/home/ikbel/Bureau/Med_app/Pcd/front1/medical-app/src/assets/img";
        byte [] bytes = file.getBytes();
        Path path = Paths.get(folder + file.getOriginalFilename());
        Files.write(path, bytes);
        return therapieRepository.save(img1);
        //return ResponseEntity.status(HttpStatus.OK);
    }
    @GetMapping("/getAll")

    public List<Therapie> getAllTherapie(){
        return therapieRepository.findAll();
    }


    @PostMapping("/createTherapie")
    public Therapie createTherapie(@RequestBody Therapie therapie) {
        return therapieRepository.save(therapie);
    }



    @GetMapping("/get/{id}")
    public ResponseEntity<Therapie> getTherapieById(@PathVariable Long id){
        Therapie therapie = therapieRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Therapie non trouvé avec l'id :"+id));
        return ResponseEntity.ok(therapie);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Therapie> updateTherapie(@PathVariable Long id,@RequestBody Therapie therapieInfo){
        Therapie therapie = therapieRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException ("Therapie non trouvé avec l'id :"+id));
        therapie.setName(therapieInfo.getName());
        therapie.setDescription(therapieInfo.getDescription());
        Therapie therapieAjour = therapieRepository.save(therapie);
        return ResponseEntity.ok(therapieAjour);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMedecin(@PathVariable Long id){

        Therapie therapie = therapieRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Thérapie non trouvé avec l'id :"+id));
        therapieRepository.delete(therapie);
        //retourne void c'est pour cela qu'on a créer the map pour retourner une réponse

        Map<String,Boolean>  rep = new HashMap<>();
        rep.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(rep);

    }

}