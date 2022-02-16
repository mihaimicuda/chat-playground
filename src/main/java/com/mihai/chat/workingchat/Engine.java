package com.mihai.chat.workingchat;

import java.util.concurrent.ConcurrentLinkedQueue;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class Engine extends Thread {

    ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<>();

    public void send(String str) {
        queue.add(str);
    }

    @Override
    public void run() {
        System.out.println("starting thread");
        while(true) {
            if(!queue.isEmpty()) {
                System.out.println("[chat]" + queue.poll());
            }
        }
    }
    
    @PostConstruct
    void go() {
        this.start();
    }
}
