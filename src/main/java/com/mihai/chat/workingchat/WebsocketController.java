package com.mihai.chat.workingchat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WebsocketController {
    
    @Autowired
    SimpMessagingTemplate template;

    @CrossOrigin
    @PostMapping("/send")
    public ResponseEntity<Void> sendMessage(@RequestBody String str) {
		template.convertAndSend("/topic/message", str);
		return new ResponseEntity<>(HttpStatus.OK);
	} 

    @GetMapping("/send")
    public ResponseEntity<Void> test() {
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @SendTo("/topic/message")
    public String hello(@Payload String text) {
        return text;
    }



}
