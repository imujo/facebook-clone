import Welcome from './components/Welcome/Welcoome';
import Objave from './components/Objave/Objave'
import Nav from './components/Nav/Nav'
import Aos from 'aos';
import 'aos/dist/aos.css'
import React, {useEffect} from 'react'


function App() {
  useEffect(()=>{
    Aos.init({duration: 700});
  }, [])

  return (
    <div className="App">
      <Nav />
      <Welcome />
      <Objave />
    </div>
  );
}

export default App;
