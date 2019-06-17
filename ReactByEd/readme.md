# React
* Install npx create-react-app
* npm start
* delete all in app.js
* import React from 'react'
* create a function 
// if vsc doens't recognise, click language at buttom right in vsc
* export default App
//html gets generated inside div id root 
* create button with event
* create new file in src 'sayHello.js'
* create function - move const from app.js - create button
* export default Hello
* import Hello component in app.js
// sayHello was just an example
* create new file Tweet.js in src
* import Tweet in App.js
* export Tweet in Tweet.js (don't forget!)
* style the Tweet in App.css
* className i.s.o. class 
* import the css file in Tweet.js
* style whole page in App.css and index.css

* define a prop for each tweet
//but name is still rendering as 'html' in Tweet.js
* in App.js get name="" after Tweet
* in tweet add a props as a param for the function, and call it in h3 with {}
* change the prop message
//in ES 6: 
//function Tweet({name,message}){
//return(
//<div className='tweet'>
//<h3>{name}</h3>
//</div>
// );}

* state: import React, {useState}
    create const [name,setRed] because the statement is false
state changes html
can change classes
if else statement ? :
make it change setRed(!isRed)