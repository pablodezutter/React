import React,{useState} from 'react';
import './App.css';

function Tweet(props){

    const [isRed, setRed ] = useState(false);
    const [count, setCount]= useState(0);

const increment = () =>{
setCount(count + 1);
//setRed(true);
setRed(!isRed)
}


    return(
        <div className='tweet'>
            <h1 className= {isRed ? 'red' : ''}>Change my color</h1>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
        </div>
    );
}
 



 export default Tweet;