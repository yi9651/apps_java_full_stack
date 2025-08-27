package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.dto.ProductDto;
import com.eazybytes.eazystore.entity.Product;
import com.eazybytes.eazystore.repository.ProductRepository;
import com.eazybytes.eazystore.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final IProductService iProductService;

    //private final ProductRepository productRepository;

/*
    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
*/

    @GetMapping
    public List<ProductDto> getProducts(){
        List<ProductDto> productList = iProductService.getProducts();
        return productList;
    }

}
