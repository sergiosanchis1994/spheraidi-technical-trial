package com.spheraidi.backend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/websocket-endpoint").setAllowedOrigins("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {

        // enable a simple memory-based message broker to carry the greeting messages back
        // to the client on destinations prefixed with "/topic"
        registry.enableSimpleBroker("/topic");

        //designates the "/app" prefix for messages that are bound for @MessageMapping-annotated methods.
        // This prefix will be used to define all the message mappings
        registry.setApplicationDestinationPrefixes("/app");
    }
}
