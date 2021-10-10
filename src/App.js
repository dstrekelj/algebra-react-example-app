import "./App.css";
import { ChatContextProvider } from "./contexts/ChatContext";
import AppRouter from "./pages/AppRouter";

function App() {
  return (
    <ChatContextProvider>
      <AppRouter />   
    </ChatContextProvider>
  );
}

function withSmile(Component) {
  return function() {
    return (
      <div>
        <Component />
        <div>:)</div>
      </div>
    );
  }
}

export default withSmile(App);
