
// exo2 
// Q1


import React,{useState} from 'react';

  function DisplayTab() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <ul>
      {tab.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}




// Q2

 function DisplayTab2() {
    const tab = ["hello", "world", "from", "react"];
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index}>Element {index + 1} is: {element}</li>
        ))}
      </ul>
    );
  }



//q3

 function DisplayTab3() {
    const [tab, setTab] = useState(["hello", "world", "from", "react"]);
  
    const removeElement = (index) => {
      setTab(tab.filter((_, i) => i !== index));
    };
  
    return (
      <ul>
        {tab.map((element, index) => (
          <li key={index} onClick={() => removeElement(index)}>
            Element {index + 1} is: {element}
          </li>
        ))}
      </ul>
    );
  }

// Q4

 function DisplayTab4({ table = [] }) {
    const [tab, setTab] = useState(table);
  
    const handleRemove = (index) => {
      const updatedTab = tab.filter((_, i) => i !== index);
      setTab(updatedTab);
    };
  
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    );
  }
  
export { DisplayTab, DisplayTab2 , DisplayTab3 ,DisplayTab4 };