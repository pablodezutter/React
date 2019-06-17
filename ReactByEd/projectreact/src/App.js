import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

const [users, setUsers] = useState ([

{name: "John Snow", message:"coucoo"},
{name: "Fred", message: "I am awesome"},
{name: "Dirk", message: "It's my birthday"}

]



);

return(
  <div className='app'>
    {users.map(user =>(
        <Tweet name={user.name} message={user.message} />

     ) )}
  </div>



)

}


export default App;