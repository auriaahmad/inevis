"use client";

import React, {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  ReactElement,
} from "react";
import Image from "next/image";

interface ChatWidgetProps {
  handleNewUserMessage: (message: string) => void;
  title?: string;
  subtitle?: string;
  senderPlaceHolder?: string;
  profileAvatar?: string;
  profileClientAvatar?: string;
  titleAvatar?: string;
  showCloseButton?: boolean;
  fullScreenMode?: boolean;
  autofocus?: boolean;
  launcher?: (handleToggle: () => void) => ReactElement;
  showTimeStamp?: boolean;
  chatId?: string;
  handleToggle?: (isOpen: boolean) => void;
  launcherOpenLabel?: string;
  launcherCloseLabel?: string;
  launcherOpenImg?: string;
  launcherCloseImg?: string;
  sendButtonAlt?: string;
  handleTextInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  resizable?: boolean;
  showBadge?: boolean;
}

interface Message {
  text: string;
  sender: "user" | "response";
  timestamp: Date;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  handleNewUserMessage,
  title = "Welcome",
  subtitle = "This is your chat subtitle",
  senderPlaceHolder = "Type a message...",
  profileAvatar,
  profileClientAvatar,
  titleAvatar,
  showCloseButton = false,
  fullScreenMode = false,
  autofocus = true,
  launcher,
  showTimeStamp = true,
  chatId = "rcw-chat-container",
  handleToggle,
  launcherOpenLabel = "Open chat",
  launcherCloseLabel = "Close chat",
  launcherOpenImg = "",
  launcherCloseImg = "",
  sendButtonAlt = "Send",
  handleTextInputChange,
  handleSubmit,
  resizable = false,
  showBadge = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const toggleConversation = useCallback(() => {
    setIsOpen((prev) => {
      const nextState = !prev;
      handleToggle?.(nextState);
      return nextState;
    });
  }, [handleToggle]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleTextInputChange?.(event);
    setUserInput(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit(event);
    } else if (userInput.trim()) {
      addMessage(userInput, "user");
      handleNewUserMessage(userInput);
      setUserInput("");
    }
  };

  const addMessage = (text: string, sender: "user" | "response") => {
    const newMessage = { text, sender, timestamp: new Date() };
    setMessages((prev) => [...prev, newMessage]);
  };

  const renderLauncher = (): ReactElement => {
    const hasUnreadMessages = showBadge && messages.some((msg) => msg.sender === "response");
    return (
      <button
        className="launcher-btn"
        onClick={toggleConversation}
        aria-label={isOpen ? launcherCloseLabel : launcherOpenLabel}
      >
        {isOpen ? (
          launcherCloseImg ? (
            <Image src={launcherCloseImg} alt={launcherCloseLabel} width={30} height={30} />
          ) : (
            "✖"
          )
        ) : (
          <>
            {launcherOpenImg ? (
              <Image src={launcherOpenImg} alt={launcherOpenLabel} width={30} height={30} />
            ) : (
              "💬"
            )}
            {hasUnreadMessages && <span className="badge">!</span>}
          </>
        )}
      </button>
    );
  };

  return (
    <div className="chat-widget-container">
      {launcher ? launcher(toggleConversation) : renderLauncher()}

      {isOpen && (
        <div
          id={chatId}
          className={`widget-container ${fullScreenMode ? "full-screen" : ""} ${
            resizable ? "resizable" : ""
          }`}
        >
          <div className="header">
            <div className="header-info">
              {titleAvatar && (
                <Image src={titleAvatar} alt="title avatar" width={40} height={40} />
              )}
              <div>
                <h4>{title}</h4>
                <span>{subtitle}</span>
              </div>
            </div>
            {showCloseButton && fullScreenMode && (
              <button className="close-btn" onClick={toggleConversation} aria-label="Close chat">
                ✖
              </button>
            )}
          </div>

          <div className="message-list">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-row ${
                  msg.sender === "user" ? "user-message" : "response-message"
                }`}
              >
                {msg.sender === "response" && profileAvatar && (
                  <Image src={profileAvatar} alt="response avatar" width={30} height={30} />
                )}
                {msg.sender === "user" && profileClientAvatar && (
                  <Image src={profileClientAvatar} alt="user avatar" width={30} height={30} />
                )}
                <div className="message-content">
                  <div className="message-text">{msg.text}</div>
                  {showTimeStamp && (
                    <div className="message-timestamp">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder={senderPlaceHolder}
              value={userInput}
              onChange={handleChange}
              autoFocus={autofocus}
              className="input"
            />
            <button type="submit" className="send-button" aria-label={sendButtonAlt}>
              ⮞
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;