package com.dev;

import java.util.Comparator;
import java.util.stream.Stream;

public class Test {
    public static void main(String[] args) {
        String arr []  ={"a","madhan","hhd"};

        String result = Stream.of(arr).sorted(( String str1,String str2) -> str2.length() - str1.length()).findFirst().get();

        Stream.of(arr).sorted(Comparator.comparing(String::length).reversed()).findFirst().get();

        Stream.of(arr)
                .max(Comparator.comparingInt(String::length))
                .get();



        System.out.println(result);
    }
}
