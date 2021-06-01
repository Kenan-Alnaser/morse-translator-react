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
    let morseArray = input.split("");
    for (let i = 0; i < morseArray.length; i++) {
      output += morseCodes[morseArray[i].toUpperCase()];
    }
    setOutput({ output });
  }

  return <div className="App"></div>;
}
export default App;
