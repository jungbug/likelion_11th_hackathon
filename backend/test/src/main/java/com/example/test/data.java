package com.example.test;

import lombok.Data;

@Data
public class data {
    private Integer starRatingValue;
    private Integer buttonValue1;
    private Integer buttonValue2;

    private Integer buttonValue3;
    private String textarea1;
    private String textarea2;
    private String textarea3;
    private String textarea4;

    public data(){

    }

    public data(Integer starRatingValue, Integer buttonValue1, Integer buttonValue2, Integer buttonValue3, String textarea1, String textarea2, String textarea3, String textarea4){
        this.starRatingValue = starRatingValue;
        this.buttonValue1 = buttonValue1;
        this.buttonValue2 = buttonValue2;
        this.buttonValue3 = buttonValue3;
        this.textarea1 = textarea1;
        this.textarea2 = textarea2;
        this.textarea3 = textarea3;
        this.textarea4 = textarea4;
    }
}
