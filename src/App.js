import React, { useState } from "react";
import "./sass/main.scss"

const morseCodes = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function changeHandle(e) {
    setInput(e.target.value);
  }

  function translateText() {
    let output = "";
    let formatedInput = input.toString();
    let morseArray = formatedInput.split("");
    for (let i = 0; i < morseArray.length; i++) {
      if (morseArray[i]==" "){
        output += " ";
      }
      else{
      output += morseCodes[morseArray[i].toUpperCase()];
    }
  }
    setOutput(output);
  }

  return (
    <div className="container">
      <h1>Morse Code Translator</h1>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={changeHandle}
        onKeyUp={translateText}
      />
      <h2>original: </h2>
      <h3 className="input">{input}</h3>
      <h2>morse:</h2>
      <h3 className="output">{output}</h3>
    </div>
  );
}
export default App;
