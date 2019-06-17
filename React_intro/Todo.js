import React, {Component} from 'react';
export default class Todos extends Component {
    constructor(props){
    super(props);
    this.state={
        userInput: "",
        list: []
    }
}
changeUserInput(input){
this.setState({userInput: input})



}
changeUserInput(input){
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
        list: listArray
        userInput:"",
        list= [];
        completed: false


    })
}
render(){

return(
    <div>
        <input
        onChange={(e) =>this.changeUserInput(e.target.value)}
    type='text'/>
    <button onClick={()=>this.addTodo(this.state.userInput)}
    >Add todos</button>
    <ul>
        othis.state.list.map((todo)=> <li>{todo}</li>)}

    </ul>
    </div>

)

}


}