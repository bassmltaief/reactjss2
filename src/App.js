import logo from './logo.svg';
import { Player } from 'video-react'
import React from 'react'
import './App.css';
import img from './reactsrc.png';


function App() {
  return (
    <div className="App">
      <h1 class = "title_red"> Bassem Ltaief </h1>
      <a href="#">
      <h1>image from src folder</h1>
      <img src={img} alt ='myImage' />
      </a>
      
      <br></br>
      <a href="#" >
      <h1>image from public folder</h1>
      </a>
      
      <img src="/reactpub.jpeg" alt="myimage" />
      <br></br>
      <a href="#">
      <h1>watch video</h1>
      </a>
      <Player
      playsInline
      poster="/assets/poster.png"
      src="https://www.youtube.com/watch?v=7sDY4m8KNLc"
    />
      
      <br></br>
    </div>
  );
}

export default App;
