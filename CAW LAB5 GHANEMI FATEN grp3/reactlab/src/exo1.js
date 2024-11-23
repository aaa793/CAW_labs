import React, { useState } from 'react';

//q1
const ClickButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
};


//q2
const ToggleButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{isClicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
};


//q3 
 function ClickButtons() {
    const [clickedButton, setClickedButton] = useState("");
  
    const handleClick = (buttonNumber) => {
        setClickedButton(`Button ${buttonNumber} was clicked`);

    };
  
    return (
      <div>
        <button onClick={() => handleClick(1)}>Button1</button>
        <button onClick={() => handleClick(2)}>Button2</button>
        <button onClick={() => handleClick(3)}>Button3</button>
        <p>{clickedButton}</p>
      </div>
    );
  }


  //q4

     function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Inc</button>
        <button onClick={() => setCount(count - 1)}>Dec</button>
      </div>
    );
  }


export { ClickButton, ToggleButton , ClickButtons ,Counter };




















