<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="90" height="90"/>
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://spring.io/projects/spring-boot" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot Logo" width="90" height="90"/>
  </a>
</p>

<p align="center">
  <b>Facebook Clone</b> - Dự án mô phỏng Facebook sử dụng ReactJS (frontend) & Spring Boot (backend)
</p>

<p align="center">
  <a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-18.x-blue?logo=react" alt="React"></a>
  <a href="https://spring.io/projects/spring-boot" target="_blank"><img src="https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot" alt="Spring Boot"></a>
  <a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-4.x-purple?logo=vite" alt="Vite"></a>
  <a href="https://www.java.com/" target="_blank"><img src="https://img.shields.io/badge/Java-17+-red?logo=java" alt="Java"></a>
</p>

---

## 📝 Mô tả
Dự án Facebook Clone gồm 2 phần:
- **Frontend**: ReactJS (Vite)
- **Backend**: Spring Boot (Java)

---

## 🚀 1. Cài đặt & chạy Backend (Spring Boot)

### Yêu cầu
- Java 17 trở lên
- Maven

### Hướng dẫn
```bash
cd backend
# Chạy bằng Maven Wrapper (không cần cài Maven toàn cục)
./mvnw spring-boot:run
# Hoặc nếu đã cài Maven
mvn spring-boot:run
```
- API sẽ chạy mặc định tại: `http://localhost:8080`

---

## ⚡ 2. Cài đặt & chạy Frontend (ReactJS)

### Yêu cầu
- Node.js >= 16
- npm hoặc yarn

### Hướng dẫn
```bash
cd frontend
npm install
npm run dev
```
- Ứng dụng sẽ chạy tại: `http://localhost:5173`

---

## ℹ️ 3. Một số lưu ý
- Đảm bảo backend chạy trước khi đăng nhập hoặc sử dụng các tính năng liên quan đến dữ liệu.
- Thông tin kết nối backend/frontend có thể chỉnh trong file cấu hình nếu cần.
- Nếu gặp lỗi CORS, kiểm tra cấu hình `@CrossOrigin` ở backend.
- Nếu muốn build production:
  - Backend: `mvn clean package` (file jar ở `target/`)
  - Frontend: `npm run build` (file tĩnh ở `dist/`)

---

## 👤 4. Tài khoản mẫu (nếu có)
- Đăng ký tài khoản mới hoặc sử dụng tài khoản mẫu nếu được cung cấp.

---

## 🤝 5. Liên hệ & đóng góp
- Nếu có vấn đề, hãy tạo issue hoặc liên hệ trực tiếp với tác giả dự án.

---

<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="40" height="40"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://spring.io/projects/spring-boot" target="_blank">
    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot Logo" width="40" height="40"/>
  </a>
</p>
