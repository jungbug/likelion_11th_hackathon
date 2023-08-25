package com.example.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
public class post {
    private DataStorage dataStorage;

    private DataStorage1 dataStorage1;

    public post(DataStorage dataStorage) {
        this.dataStorage = dataStorage;
    }

    @RequestMapping("/gym/req")
    public ArrayList<data> test() {
        return dataStorage.getList();
    }

}
