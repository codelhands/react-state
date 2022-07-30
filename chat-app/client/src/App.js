import './App.css';

import {ChatProvider} from "./context/ChatContext"
import Container from "./components/Container"

function App() {
  return <ChatProvider>
  <Container></Container>
  </ChatProvider>
}

export default App;
