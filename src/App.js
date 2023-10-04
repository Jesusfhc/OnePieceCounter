import './App.css';
import freeCodeCampLogo from './imgs/main-logo.png'
import Button from "./components/Button"
import Counter from "./components/Counter"
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const resetCount = () => {
    setNumClics(0);
  }


  return (
    <div className="App">

      <div className='logo-container'>
        <img 
        className='muwigara-logo'
        src={freeCodeCampLogo}
        alt='mugiwara logo' />
      </div>

      <div className='main-container'>

        <Counter 
          count={numClics}
        />

        <Button
          text='Click'
          itsClickButton={true}
          manejarClick={manejarClick}
        />

        <Button
          text='Reset'
          itsClickButton={false}
          manejarClick={resetCount}
        />  

      </div>
      
    </div>
  );
}

export default App;
