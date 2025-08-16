package com.petsfit.backend.service;

import com.petsfit.backend.dto.ProductRequest;
import com.petsfit.backend.dto.ProductResponse;
import com.petsfit.backend.model.Product;
import com.petsfit.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<ProductResponse> findAllActive() {
        return repo.findByActiveTrue().stream().map(this::toResponse).toList();
    }

    @Transactional
    public ProductResponse create(ProductRequest req) {
        Product p = new Product();
        p.setName(req.getName());
        p.setSpecies(req.getSpecies());
        p.setFlavor(req.getFlavor());
        p.setWeightGrams(req.getWeightGrams());
        p.setPrice(req.getPrice());
        p.setCurrency(req.getCurrency());
        p.setActive(true);
        return toResponse(repo.save(p));
    }

    private ProductResponse toResponse(Product p) {
        ProductResponse r = new ProductResponse();
        r.setId(p.getId());
        r.setName(p.getName());
        r.setSpecies(p.getSpecies());
        r.setFlavor(p.getFlavor());
        r.setWeightGrams(p.getWeightGrams());
        r.setPrice(p.getPrice());
        r.setCurrentPrice(p.getPrice());
        r.setCurrency(p.getCurrency());
        r.setActive(p.getActive());
        return r;
    }
}
