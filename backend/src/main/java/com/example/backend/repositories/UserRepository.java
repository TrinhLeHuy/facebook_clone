package com.example.backend.repositories;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<User> findById(Long id);
    long countByAvatarUrl(String avatarUrl);

    // Tìm kiếm theo username hoặc fullName, loại trừ chính người tìm
    List<User> findByUsernameContainingIgnoreCaseOrFullNameContainingIgnoreCaseAndIdNot(
        String usernameKeyword,
        String fullNameKeyword,
        Long excludedId
    );
}