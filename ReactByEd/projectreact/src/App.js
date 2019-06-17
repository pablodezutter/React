import React,{ useState }from 'react';
import Tweet from './Tweet';

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount]= useState(0);

const increment = () =>{
setCount(count + 1);
//setRed(true);
setRed(!isRed);
};


return(
<div className='app'>
<h1>Hello React</h1>
<Tweet name="John Doe" message="I am nobody."/>
<Tweet name="John Irving"message="You've got to get obsessed" />
<Tweet name="Elton John"message="Music was my first love." />
<Tweet name="John Stone"message="Being a monk." />

</div>

  );
}


export default App;