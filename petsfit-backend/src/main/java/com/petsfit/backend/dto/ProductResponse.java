package com.petsfit.backend.dto;

import com.petsfit.backend.model.Flavor;
import com.petsfit.backend.model.Species;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class ProductResponse {
    private Long id;
    private String name;
    private Species species;
    private Flavor flavor;
    private Integer weightGrams;
    private BigDecimal price;
    private BigDecimal currentPrice;
    private String currency;
    private Boolean active;
}
