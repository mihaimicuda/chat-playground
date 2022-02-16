package com.mihai.chat.workingchat;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    private final Engine engine;

    public Controller(Engine engine) {
        this.engine = engine;
    }

    // @PostMapping("/send")
    // void send(@RequestBody String message) {
    //     engine.send(message);
    // }

}
