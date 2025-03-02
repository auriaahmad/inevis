"use client";

import React from "react";
import ChatWidget from "./ChatWidget"; // Adjust the path to your ChatWidget component

const ChatWidgetClient: React.FC = () => {
  const handleNewUserMessage = (message: string) => {
    console.log("New user message received:", message);
    // Add your logic here
  };

  return (
    <ChatWidget
      handleNewUserMessage={handleNewUserMessage}
      title="Welcome to Auctos AI"
      subtitle="How can we assist you today?"
      profileAvatar="/logo/logo.png" // Example profile avatar
      profileClientAvatar="/logo/logo.png" // Example client avatar
      launcherOpenLabel="Chat with us"
      launcherCloseLabel="Close chat"
    />
  );
};

export default ChatWidgetClient;