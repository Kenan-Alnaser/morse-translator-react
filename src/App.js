import React, { useState } from "react";

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

  function convertToMorse(input) {
    let output = "";
    let formatedInput = input.toString();
    let morseArray = formatedInput.split("");
    console.log(morseArray);
    for (let i = 0; i < morseArray.length; i++) {
      output += morseCodes[morseArray[i].toUpperCase()];
    }
    setOutput(output);
  }

  function changeHandle(e) {
    setInput(e.target.value);
  }

  return (
    <div className="container">
      <h1>Morse Code Translator</h1>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={changeHandle}
      />
      <button onClick={convertToMorse}>Convert</button>
      <h3>original: {input}</h3>
      <h3>morse: {output}</h3>
    </div>
  );
}
export default App;
