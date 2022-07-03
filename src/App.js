import React from 'react'
import { useState } from 'react';
import ReactTooltip from 'react-tooltip'
import './App.css';

export default function App() {
  
  const[tipdirection, setTipdirection] = useState("left");

  function movetooltipleft(){
    setTipdirection("left")
  }

  function movetooltipright(){
    setTipdirection("right")
  }

  function movetooltiptop(){
    setTipdirection("top")
  }

  function movetooltipbottom(){
    setTipdirection("bottom")
  }



  return (
    <div>
      <h1> ToolTip Project </h1>
      <p data-for= "tool" data-tip='Thanks for Hovering <br/> I am a tooltip' class="toolbase"> Hover Over me </p>
      <ReactTooltip place={tipdirection} multiline={true} id="tool"/>

    <div class='btn'> 
      <button onClick={movetooltipleft}> Left </button> 
      <button onClick={movetooltipright}> Right </button> 
      <button onClick={movetooltiptop}> Top </button> 
      <button onClick={movetooltipbottom}> Bottom </button> 
      </div>
    
    </div>
  )
}
