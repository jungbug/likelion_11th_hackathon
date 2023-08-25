package com.example.test;

import java.util.ArrayList;

import org.springframework.stereotype.Component;
@Component
public class DataStorage1 {
    private ArrayList<data1> list1 = new ArrayList<data1>();

    public void addData(data1 data1) {
        list1.add(data1);
    }

    public ArrayList<data1> getList() {
        return list1;
    }
}