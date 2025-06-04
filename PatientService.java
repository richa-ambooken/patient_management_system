package com.healthcare.service;

import com.healthcare.model.Patient;
import com.healthcare.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    @Autowired
    private PatientRepository repo;

    public List<Patient> getAll() {
        return repo.findAll();
    }

    public Patient save(Patient patient) {
        return repo.save(patient);
    }

    public Optional<Patient> getById(String id) {
        return repo.findById(id);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }
}
