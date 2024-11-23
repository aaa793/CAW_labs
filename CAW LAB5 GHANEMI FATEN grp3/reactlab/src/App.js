import React from 'react';
import './App.css';
import { ClickButton, ToggleButton, ClickButtons, Counter } from './exo1';
import { DisplayTab, DisplayTab2, DisplayTab3, DisplayTab4 } from './exo2';
 import AddDivForm  from './exo4';
 import AuthForm from './exo3';

function App() {
  const tab1 = ["hello", "world", "hi", "world"];
  const tab2 = ["another", "example"];

  return (
    <div>
      <h1>exercice 1  </h1>
      <ClickButton />
      <ToggleButton />
      <ClickButtons />
      <Counter />

      <h1>exercice 2  </h1>

      <DisplayTab />
      <DisplayTab2 />
      <DisplayTab3 />
      <DisplayTab4 table={tab1} />

      <div>
        <h3>Table 1</h3>
        <DisplayTab4 table={tab1} />
        <h3>Table 2</h3>
        <DisplayTab4 table={tab2} />
      </div>


      <h1>exercice 3  </h1>
     < AuthForm/>

     <h1>exercice 4 </h1>
      <AddDivForm/>
    </div>


  );
}

export default App;
