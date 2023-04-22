package com.medical.project.Service;

import com.medical.project.Entity.Secretaire;
import org.springframework.stereotype.Service;

import java.util.List;

public interface SecretaireService {


    public List<Secretaire> getSecretaires();
    public Secretaire updateSecretaire(Long ids,Secretaire sec);
    public Secretaire findSecretaireById(Long ids);
    public Secretaire createSecretaire(Secretaire sec);
    public Secretaire findSecByEmail(String email );

    public void deleteSecretaire(Long ids);
}