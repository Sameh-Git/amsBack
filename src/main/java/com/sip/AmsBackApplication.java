package com.sip;

import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AmsBackApplication {
	public static String providerDirectory =
			System.getProperty("user.dir")+"/src/main/resources/static/images/provider";
	public static String articleDirectory =
			System.getProperty("user.dir")+"/src/main/resources/static/images/article";

	public static void main(String[] args) {
		new File(providerDirectory).mkdir();
		new File(articleDirectory).mkdir();
		SpringApplication.run(AmsBackApplication.class, args);
	}

}
