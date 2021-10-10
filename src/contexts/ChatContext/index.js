import { createContext, useState } from "react";

const ChatContext = createContext("ChatContext");

export function ChatContextProvider({ children }) {
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([ ...messageObjects, messageObject ]);
  }

  return (
    <ChatContext.Provider value={{ messageObjects, handleSendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContext;
