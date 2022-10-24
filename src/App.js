import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {

  function ciao(){
    console.log("ciao");
  }

  const ent = 2;

  function some_text(){
    console.log("some text " + ent)
  }

  function doubleClick(env){
    console.log("doubleClick " + env);
  }

  let textInput = React.createRef();
  let inputOut = React.createRef();

  function showInput(){
    if(textInput.current.value > 0){
      console.log(textInput.current.value);
      let g = inputOut;
      g.current.innerHTML = textInput.current.value;
    }else{
      return;
    }
  }



  // function mouseMove(){
  //   console.log("mouseMove");
  // }

  const boxOnClickFunction = event => {
    event.currentTarget.classList.toggle("box-red");
  }

  const [onclick, setOnClick] = useState(false);
  const boxOnClickFunction2 = event => {
    setOnClick(current => !current);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>"Ciao"</h1>
        <button onClick={ciao}>Click me!</button>
        <h1>Some text</h1>
        <button onClick={some_text}>Click me!</button>
        <div className='box' onDoubleClick={() => doubleClick()}></div>
        <input type="text" onInput={showInput} ref={textInput}/><br />
        <p ref={inputOut}></p>
        <div className='box' onClick={boxOnClickFunction}></div>
        <div className={onclick ? 'box-red box' : 'box'} onClick={boxOnClickFunction2}></div>
      </div>
    </div>
  );
}

export default App;
