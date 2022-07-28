import './App.css';
import {ThemeProvider} from './context/ThemeContext';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
    <Button/> 
    <Header/> 
  </ThemeProvider>);
}

export default App;
