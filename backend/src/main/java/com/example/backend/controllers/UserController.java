// UserController.java
package com.example.backend.controllers;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.UserRegisterDTO;
import com.example.backend.dto.UserSearchResultDTO;
import com.example.backend.dto.UserUpdateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import com.example.backend.service.UserService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegisterDTO dto) {
        String res = userService.register(dto);
        if (res.equals("Đăng ký thành công!")) return ResponseEntity.ok(res);
        return ResponseEntity.badRequest().body(res);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest req) {
        Map<String, Object> res = userService.login(req.getEmail(), req.getPassword());
        if (res.containsKey("error")) return ResponseEntity.status(401).body(res);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value = "/update", consumes = "multipart/form-data")
    public ResponseEntity<String> update(
            @RequestPart("user") UserUpdateDTO dto,
            @RequestPart(value = "avatarFile", required = false) MultipartFile avatarFile) {
        dto.setAvatarFile(avatarFile);
        String res = userService.updateUser(dto);
        if (res.equals("Cập nhật thông tin thành công!")) return ResponseEntity.ok(res);
        return ResponseEntity.badRequest().body(res);
    }

    @GetMapping("/search")
    public ResponseEntity<List<UserSearchResultDTO>> search(
            @RequestParam String keyword,
            @RequestParam Long currentUserId) {
        return ResponseEntity.ok(userService.searchUsers(keyword, currentUserId));
    }
}
