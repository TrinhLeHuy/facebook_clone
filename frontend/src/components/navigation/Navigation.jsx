/* eslint-disable react/jsx-no-duplicate-props */
import { useState, useRef, useEffect } from "react";
import { FaFacebook, FaBell, FaUserFriends, FaBars, FaSearch, FaHome, FaFacebookMessenger, FaHouseUser } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from './Navigation.module.scss';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const cx = classNames.bind(styles);

const Navbar = ({ user, onChatClick }) => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          !inputRef.current.contains(event.target)
        ) {
          setShowDropdown(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Lấy user hiện tại từ props hoặc localStorage
    const currentUser = user || JSON.parse(localStorage.getItem("user"));

    const handleChange = async (e) => {
      const value = e.target.value;
      setSearch(value);
      if (!value.trim()) {
        setResults([]);
        setShowDropdown(false);
        return;
      }
      try {
        const res = await axios.get("http://localhost:8080/auth/search", {
          params: { keyword: value, currentUserId: currentUser.id },
        });
        setResults(res.data);
        setShowDropdown(true);
      } catch (err) {
        setResults([]);
        setShowDropdown(false);
      }
    };

    const handleSendRequest = async (userId) => {
      try {
        await axios.post("http://localhost:8080/api/friends/request", null, {
          params: { senderId: currentUser.id, receiverId: userId },
        });
        alert("Đã gửi lời mời kết bạn!");
      } catch (err) {
        alert("Không thể gửi lời mời!");
      }
    };

    return (
      <nav className={cx("navbar")}>
        {/* Logo */}
        <div className={cx("navbar-left")}>
          <FaFacebook className={cx("logo")} onClick={() => navigate("/homepage")} />
          <div className={cx("search-container")}>
            <FaSearch className={cx("search-icon")} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Tìm kiếm trên Facebook"
              value={search}
              onChange={handleChange}
              onFocus={() => search && setShowDropdown(true)}
              className={cx("search-input")}
            />
            {showDropdown && (
              <div className={cx("search-dropdown")} ref={dropdownRef}>
                {results.length > 0 ? (
                  results.map((u) => (
                    <div key={u.id} className={cx("search-item")}>
                      <img
                        src={u.avatarUrl ? `http://localhost:8080/uploads/${u.avatarUrl}` : "/assets/img/icons8-user-default-64.png"}
                        alt={u.fullName}
                        className={cx("avatar")}
                        onClick={() => {
                          navigate(`/profile/${u.id}`);
                          setShowDropdown(false);
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                      <span 
                        onClick={() => {
                          navigate(`/profile/${u.id}`);
                          setShowDropdown(false);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {u.fullName} ({u.username})
                      </span>
                      {/* Ẩn nút kết bạn nếu là tài khoản bản thân */}
                      {u.id !== currentUser.id && (
                        <button onClick={() => handleSendRequest(u.id)}>Kết bạn</button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className={cx("search-item")}>
                    Không có dữ liệu, hãy nhập tên khác
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Menu chính */}
        <div className={cx("navbar-center")}>
          <FaHome className={cx("nav-icon")} onClick={() => navigate("/homepage")} />
          <FaUserFriends className={cx("nav-icon")} onClick={() => navigate("/friendpage")} />
          <FaHouseUser className={cx("nav-icon")} onClick={() => navigate("/profilepage")} />
        </div>
        {/* Avatar người dùng */}
        <div className={cx("navbar-right")}>
          <FaFacebookMessenger className={cx("chat-icon")} onClick={onChatClick} />
          <FaBell className={cx("Notification-icon")} />
          {user ? (
            <span className={cx("user-name")}>{user.username}</span>
          ) : (
            <span>Đang tải...</span>
          )}
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Đăng xuất
          </button>
        </div>
      </nav>
    );
};
export default Navbar;