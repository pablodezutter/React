import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

const [users, setUsers] = useState ([

{name: "John Snow", message:"coucoo", likes:"3OOK"},
{name: "Fred", message: "I am awesome", likes: "20K"},
{name: "Dirk", message: "It's my birthday", likes: "460K"}

]);

return(
  <div className='app'>
    {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes} />

     ) )}
  </div>



)

}


export default App;