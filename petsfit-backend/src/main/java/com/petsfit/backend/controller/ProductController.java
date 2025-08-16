package com.petsfit.backend.controller;

import com.petsfit.backend.dto.ProductRequest;
import com.petsfit.backend.dto.ProductResponse;
import com.petsfit.backend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = {"http://localhost:5173"}) // React dev
public class ProductController {

    private final ProductService service;
    public ProductController(ProductService service) { this.service = service; }

    @GetMapping
    public List<ProductResponse> list() {
        return service.findAllActive();
    }

    @PostMapping
    public ProductResponse create(@Valid @RequestBody ProductRequest req) {
        return service.create(req);
    }
}
