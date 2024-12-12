import { createChatBotMessage } from "react-chatbot-kit";

const botName = "RealtyBot";

const CustomChatbotConfig = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hello! I’m ${botName}. How can I assist you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2500ac",
    },
    chatButton: {
      backgroundColor: "#2500ac",
    },
  },
  widgets: [
    // Add your widgets here if needed
  ],
};

export default CustomChatbotConfig;
