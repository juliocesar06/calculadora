import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calcule = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  const ponto = (e) => {
    let p = e.target.name;
    if (result.includes(p)) {
      setResult(result.concat(""));
    } else {
      setResult(result.concat(p));
    }
  };
  return (
    <>
      <div class="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div class="keypad">
          <button class="heigthlight" onClick={clear} id="clear">
            Clear
          </button>
          <button class="heigthlight" onClick={backspace} id="backspace">
            C
          </button>
          <button name="/" class="heigthlight" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" class="heigthlight" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" class="heigthlight" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" class="heigthlight" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={ponto}>
            .
          </button>
          <button class="heigthlight" id="result" onClick={calcule}>
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
