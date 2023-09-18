import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Basic_Stats from'./basic_stats.js'
import Header from'./header'
import Character_Attributes from './character_attributes.js'
import Create_json from './create_json.js'
import Skills from './skills';
import Profession from './profession';
var editing = true
const root = ReactDOM.createRoot(document.getElementById('root'));

if(editing == false)
{
  root.render(
    <React.StrictMode>
      <Header />
      <Basic_Stats />
      <Character_Attributes />
    </React.StrictMode>
  );
  console.log("dziala");
}
else if(editing == true)
{
  root.render(
    <React.StrictMode>
      <Create_json />
    </React.StrictMode>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
