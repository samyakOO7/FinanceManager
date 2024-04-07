package com.finance.financeregistry.controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FinanceController {

    @Autowired
    private FinanceService financeService;

    @Autowired
    private ModelMapper modelMapper;

}
