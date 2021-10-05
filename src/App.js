import "./App.css";
import MessageForm from "./components/MessageForm";
import { useContext, useState } from "react";
import AppContext from "./contexts/AppContext";
import ChatContext from "./contexts/ChatContext";
import MessageList from "./components/MessageList";

function greet(greeting, name) {
  console.log(greeting, name);
}
greet('Hello', 'Domagoj');

function withSmile(greetFunction) {
  return function(greeting, name) {
    greetFunction(greeting, name);
    console.log(':)');
  }
}
const smileyGreeting = withSmile(greet);
smileyGreeting('Hello', 'Domagoj');

function App() {
  const appContext = useContext(AppContext);
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([ ...messageObjects, messageObject ]);
  }

  return (
    <ChatContext.Provider value={messageObjects}>
      <div className="App">
        <header className="App__header">
          <h1>My Chat App {appContext.language}</h1>
        </header>
        <main className="App__main">
          <div className="App__message-container">
            <MessageList />
          </div>
          <div className="App__message-form">
            <MessageForm onSendMessage={handleSendMessage} />
          </div>
        </main>
        <footer className="App__footer">
        <a
            className="App-link"
            href="https://github.com/dstrekelj"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Profile
          </a>
        </footer>
      </div>
    </ChatContext.Provider>
  );
}

export default App;
