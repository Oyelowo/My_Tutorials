import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const randomNumWithin = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Typer = () => {
  const [show, setShow] = useState(false);

  const toggleTyperTimer = () => setInterval(() => setShow(!show), 600);
  useEffect(
    () => {
      const timer = toggleTyperTimer();
      return () => clearInterval(timer);
    },
    [show]
  );

  return (
    <span
      style={{
        visibility: show && "hidden",
        borderRight: "2px solid #eaeaea",
        padding: "10px 7px 10px 0px",
      }}
    ></span>
  );
};

const intro = `Hello!, I'm a software developer and data analyst.
My languages: Java, JavaScript/Typescript, Python, Ruby and R.
Other Dev tools(Libraries and Frameworks):
HTML5, CSS3, Sass, React/React Native & Redux, Mobx, Node , Express , MongoDB & Mongoose; and many more.
Testing:
Jest, Enzyme; and cypress
My data analytics tools:
Python, R, SPSS, Excel, ArcGIS, and QGIS.
Feel free to contact me...`; 
//const introNumOfLines = intro.split("\n").length;

const TypeWords = () => {
  //const [typeCounter, setTypeCounter] = useState(0);
  //const intro = "This boy really knows what he is doing. right?";
  const [sentence, setSentence] = useState({characters:"", typeCounter: 0});
  //const toggleTyperTimer = () => setInterval(() => setShow(!show), 600);
  const {characters, typeCounter} = sentence;
  const updateSentence =() => {
    
    const updated = {
      ...sentence,
      characters: characters + intro[typeCounter],
      typeCounter: typeCounter+1
    }; 
    setSentence(updated);
   /* const updatedCounter  = await typeCounter + 1;
    await setTypeCounter(updatedCounter); */
  };
 
  const sentenceExhausted = characters.length  === intro.length;
  useEffect(
    () => {
      const timer = setInterval(!sentenceExhausted && updateSentence(),
        randomNumWithin(17, 150)
      );
      return () => clearInterval(timer);
    },
    [sentence]
  );
  
  return (
    <span
      style={{
        textShadow: "4px 4px 0px rgba(0, 0, 0, 0.1)",
        fontSize: "33px",
        fontFamily: "Oleo Script', Helvetica, sans-serif",
        fontStyle: "italic",
      }}
    >  
      {characters}
    </span>
  ); 
};

//font: 400 100px / 1.3 ;

const App = () => {
  const [startTyping, setStartTyping] = useState(false);

  const startTypingAt = timeInMilliSeconds =>
    setTimeout(() => setStartTyping(true), timeInMilliSeconds);

  useEffect(
    () => {
      const timer = startTypingAt(3000);
      return () => clearTimeout(timer);
    },
    [startTyping] 
  ); 

  return (
    <div className="App">
      <h1>About Oyelowo</h1>
      <section style={{boxSizing:"border-box" , display:"inline"}}>
   {startTyping && <TypeWords />}
      </section>   
    </div> 
  ); 
};


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
