package com.healthcare.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.healthcare.model.Patient;

public interface PatientRepository extends MongoRepository<Patient, String> {
}
