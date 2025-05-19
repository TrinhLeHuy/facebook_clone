package com.example.backend.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.model.ChatMessage;

@RestController
public class ChatController {

    @MessageMapping("/chat") // Nhận từ client gửi lên /app/chat
    @SendTo("/topic/messages") // Gửi về cho tất cả client sub /topic/messages
    public ChatMessage send(ChatMessage message) {
        return message;
    }
}
