// ChatBody.tsx

import React from 'react';
import styles from './ChatBody.module.css';

interface Sender {
  id: number;
  name: string;
  avatarURL: string;
};

interface Message {
  sender: Sender;
  text: string;
  isMe: boolean;
}

interface ChatBodyProps {
  messages: Message[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  return (
    <div className={styles['chat-body']}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${message.isMe ? styles.me : styles.other}`}>
          <div className={styles['message-sender']}>{message.sender.name}</div>
          <div className={styles['message-text']}>{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
