import { Component } from "react";
import check from "./check.jpg"

export class ToDoList extends Component {
    constructor(){
        super();


        this.state = {
            userInput: "",
            todoList: [

            ]
        }
    }
    // Adding logic for ADD button

    addItem(input){
        if(input === "") {
            alert("Please add a valid task!");
        } else{
            let listArray = this.state.todoList;
            listArray.push(input);
            this.setState({todoList: listArray, userInput: ""});
        }
    }

    // Adding logic for DELETE Button

    deleteItem(){
        let listArray = this.state.todoList;
        listArray =[];
        this.setState({todoList: listArray})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }
    

// Here i get access to what user types in the input.
    onChangeEvent(e){
        this.setState({userInput: e})
        console.log(e)
    }
/////////////////////////

onFormSubmit(e){
    e.preventDefault();
}
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What are your plans today?"
                 onChange={(e) => {this.onChangeEvent(e.target.value)}}
                 value = {this.state.userInput}/>
            </div>
            {/* //Adding ADD button */}
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn btn-add">ADD</button>
            </div>
            <ul className="main">
            {this.state.todoList.map((item,index) =>(
                <li onClick={this.crossedWord} key={index}>
                <img src={check} alt="check-task" width="20px"/>
                {item}
                </li>
            ))}
            </ul>
{/* Adding DELETE Button */}
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn btn-delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}