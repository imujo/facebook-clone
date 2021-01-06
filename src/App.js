import './App.css';
import Welcome from './components/Welcome/Welcoome';
import Objave from './components/Objave/Objave'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Welcome />
      <Objave />
    </div>
  );
}

export default App;
