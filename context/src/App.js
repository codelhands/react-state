import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Container from './components/Container';
import {ThemeProvider} from './context/ThemeContext';


function App() {
  return (
    <ThemeProvider >
    <Container></Container>
  </ThemeProvider>);
}

export default App;
