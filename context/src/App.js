import './App.css';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button';

function App() {
  return <ThemeContext.Provider value="dark">
    <Button/>
  </ThemeContext.Provider>
}

export default App;
