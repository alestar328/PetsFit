package com.petsfit.backend.dto;

import com.petsfit.backend.model.Flavor;
import com.petsfit.backend.model.Species;
import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductRequest {
    @NotBlank @Size(max = 120)
    private String name;

    @NotNull
    private Species species;

    @NotNull
    private Flavor flavor;

    @Positive
    private Integer weightGrams = 450;

    @DecimalMin("0.00") @Digits(integer = 10, fraction = 2)
    private BigDecimal price;

    private String currency = "PEN";
}
