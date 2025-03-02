import React from "react";
import "./globals.scss"; // Import global styles
import ChatWidgetClient from "@/components/ChatWidgetClient"; // Adjust the import path

export const metadata = {
  title: "Auctos AI",
  description:
    "Empowering businesses with AI, IoT, and full-stack solutions to achieve seamless digital transformation and unlock new value",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidgetClient />
      </body>
    </html>
  );
};

export default RootLayout;
