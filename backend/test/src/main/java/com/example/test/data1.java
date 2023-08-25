package com.example.test;

import lombok.Data;
@Data
public class data1 {
    private Integer starRatingValue;
    private Integer buttonValue;
    private Integer inputText;
    private Integer cost;
    private String bottomInput;

    public data1(){

    }

    public data1(Integer starRatingValue, Integer buttonValue, Integer textarea1, Integer textarea2, Integer textarea3, String textarea4){
        this.starRatingValue = starRatingValue;
        this.buttonValue = buttonValue;
        this.inputText = inputText;
        this.cost = cost;
        this.bottomInput = bottomInput;
    }
}
