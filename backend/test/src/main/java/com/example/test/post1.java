package com.example.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
public class post1 {

    private DataStorage1 dataStorage1;

    public post1(DataStorage1 dataStorage1) {
        this.dataStorage1 = dataStorage1;
    }
    @RequestMapping("/trainer/req")
    public ArrayList<data1> trainer() {
        return dataStorage1.getList();
    }
}
