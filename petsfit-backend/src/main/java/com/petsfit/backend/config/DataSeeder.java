package com.petsfit.backend.config;

import com.petsfit.backend.model.Flavor;
import com.petsfit.backend.model.Product;
import com.petsfit.backend.model.Species;
import com.petsfit.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedProducts(ProductRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                var price = new BigDecimal("10.00"); // 10 soles
                List<Product> seed = List.of(
                    make("Bolsa 450g Pollo Perro", Species.DOG, Flavor.CHICKEN, price),
                    make("Bolsa 450g Ternera Perro", Species.DOG, Flavor.BEEF, price),
                    make("Bolsa 450g Pescado Perro", Species.DOG, Flavor.FISH, price),
                    make("Bolsa 450g Pollo Gato", Species.CAT, Flavor.CHICKEN, price),
                    make("Bolsa 450g Ternera Gato", Species.CAT, Flavor.BEEF, price),
                    make("Bolsa 450g Pescado Gato", Species.CAT, Flavor.FISH, price)
                );
                repo.saveAll(seed);
            }
        };
    }

    private Product make(String name, Species species, Flavor flavor, BigDecimal price) {
        Product p = new Product();
        p.setName(name);
        p.setSpecies(species);
        p.setFlavor(flavor);
        p.setWeightGrams(450);
        p.setPrice(price);
        p.setCurrency("PEN");
        p.setActive(true);
        return p;
    }
}