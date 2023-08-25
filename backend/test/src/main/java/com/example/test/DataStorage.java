package com.example.test;

import java.util.ArrayList;

import org.springframework.stereotype.Component;
@Component
public class DataStorage {
    private ArrayList<data> list = new ArrayList<data>();

    public void addData(data data) {
        list.add(data);
    }

    public ArrayList<data> getList() {
        return list;
    }
}
