package com.example.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin(origins = "*")
@Controller
public class getTest {
    @Autowired
    private DataStorage DataStorage;

    @Autowired
    private DataStorage1 DataStorage1;

    @PostMapping("/gym")
    public String test(@RequestBody data data) {
        DataStorage.addData(data);
        System.out.println(DataStorage.getList());
        return "result";
    }

    @PostMapping("/trainer")
    public String trainer(@RequestBody data1 data1) {
        DataStorage1.addData(data1);
        System.out.println(DataStorage1.getList());
        return "result1";
    }
}


