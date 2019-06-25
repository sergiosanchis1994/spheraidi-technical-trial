package com.spheraidi.backend;

import com.spheraidi.backend.models.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketMessageController {

    @MessageMapping("/from-client")
    @SendTo("/topic/tick")
    public Message fromClient(Message content) throws Exception {
        System.out.println("Message received '" + content.getContent() + "'");
        return content;
    }
}
