package com.spheraidi.backend.controllers;

import com.spheraidi.backend.models.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketMessageController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/chat")
    public void sendMessage(@Payload Message msg, @Header("simpSessionId") String sessionId) throws Exception {
        String destination = String.format("/queue/%s/msg-sent", sessionId);
        simpMessagingTemplate.convertAndSend(destination, msg);
    }
}
