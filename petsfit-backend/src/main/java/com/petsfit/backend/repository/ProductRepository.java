package com.petsfit.backend.repository;

import com.petsfit.backend.model.Product;
import com.petsfit.backend.model.Species;
import com.petsfit.backend.model.Flavor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByActiveTrue();
    List<Product> findBySpeciesAndActiveTrue(Species species);
    List<Product> findByFlavorAndActiveTrue(Flavor flavor);
}