
import { Suspense } from 'react';
import './App.css'
import Bottles from './components/bottles/Bottles';

function App() {

  const bottlepromise2=fetch('./bottle.json').then(res=>res.json());
  // const bottlepromise1=fetch('https://raw.githubusercontent.com/mdrifatshahriar1125/Bottles-data/refs/heads/main/bottle.json').then(res=>res.json());

  return (
    <>
    
      <h1 style={{textAlign:"center"}}>Awesome Water Bottles</h1>
      <Suspense fallback={<h2>Bottles Data Are Loading...</h2>}>
        <Bottles bottlepromise2={bottlepromise2} ></Bottles>

      </Suspense>
  
    </>
  )
}

export default App
