package com.eazybytes.eazystore.dto;

import com.eazybytes.eazystore.entity.Product;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ProductDto
{
    private Long productId;

    private String name;

    private String description;

    private BigDecimal price;

    private Integer popularity;

    private String imageUrl;


}
