import { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const ChatBox = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const stompClient = useRef(null);

  useEffect(() => {
    if (!user) return;
    const socket = new SockJS("http://localhost:8080/ws");
    stompClient.current = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        stompClient.current.subscribe("/topic/messages", (msg) => {
          setMessages((prev) => [...prev, JSON.parse(msg.body)]);
        });
      },
    });
    stompClient.current.activate();

    return () => {
      stompClient.current.deactivate();
    };
  }, [user]);

  const sendMessage = () => {
    if (input.trim() && stompClient.current && stompClient.current.connected) {
      stompClient.current.publish({
        destination: "/app/chat",
        body: JSON.stringify({ from: user.username, content: input }),
      });
      setInput("");
    }
  };

  if (!user) return null;

  return (
    <div style={{
      background: "#222", color: "#fff", padding: 16, borderRadius: 8,
      width: 320, position: "fixed", bottom: 20, right: 20, zIndex: 999
    }}>
      <h4>Chat</h4>
      <div style={{ height: 200, overflowY: "auto", background: "#333", marginBottom: 8, padding: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx}><b>{msg.from}:</b> {msg.content}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "75%", marginRight: 8 }}
        onKeyDown={e => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Gửi</button>
    </div>
  );
};

export default ChatBox;