package com.eazybytes.eazystore.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;
//orm (hibernate)
@Getter//provided by lombok (java can easily understand to which this product table to poco class)
@Setter//provided by lombok
@Entity//spring framework (spring data JPA)
@Table(name="products")//(spring data)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productId", nullable = false)
    private Long productId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "popularity", nullable = false)
    private Integer popularity;

    @Column(name = "imageUrl", nullable = false)
    private String imageUrl;

    @Column(name = "createdAt")
    private Instant createdAt;

    @Column(name = "createdBy", nullable = false)
    private String createdBy;

    @Column(name = "updatedAt")
    private Instant updatedAt;


}
