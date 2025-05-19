# Facebook Clone

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="80" height="80"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://spring.io/images/spring-initializr-4291cc0115eb104348717b82161a81de.svg" alt="Spring Boot Logo" width="80" height="80"/>
</p>

## Mô tả
Dự án Facebook Clone gồm 2 phần:
- **Frontend**: ReactJS (Vite)
- **Backend**: Spring Boot (Java)

---

## 1. Cài đặt & chạy Backend (Spring Boot)

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

## 2. Cài đặt & chạy Frontend (ReactJS)

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

## 3. Một số lưu ý
- Đảm bảo backend chạy trước khi đăng nhập hoặc sử dụng các tính năng liên quan đến dữ liệu.
- Thông tin kết nối backend/frontend có thể chỉnh trong file cấu hình nếu cần.
- Nếu gặp lỗi CORS, kiểm tra cấu hình `@CrossOrigin` ở backend.

---

## 4. Tài khoản mẫu (nếu có)
- Đăng ký tài khoản mới hoặc sử dụng tài khoản mẫu nếu được cung cấp.

---

## 5. Liên hệ & đóng góp
- Nếu có vấn đề, hãy tạo issue hoặc liên hệ trực tiếp với tác giả dự án.

---

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="40" height="40"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://spring.io/images/spring-initializr-4291cc0115eb104348717b82161a81de.svg" alt="Spring Boot Logo" width="40" height="40"/>
</p>
