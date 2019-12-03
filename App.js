import React , { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header'
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
import axios from 'axios';
// import uuid from 'uuid';
import {BrowserRouter as Router , Route} from 'react-router-dom';

class App extends Component{
    state = {

      todos:[]

        // {id:uuid.v4() , title: 'Call Adya' , completed:false} ,
        // {id:uuid.v4() , title: 'Be sad because she rejected the call' , completed:false} ,
        // {id:uuid.v4() , title: 'Wait for her text' , completed:false} ,
        // {id:uuid.v4(), title: 'Be happy that she texted you back' , completed:false} ,
        // {id:uuid.v4() , title: 'Wait for her to call yo dada...and u just smile' , completed:false} ,
}
componentDidMount(){

  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos :res.data}))
}

    //TOGGLE COMPLETE WITH CHECKBOX
    markComplete= (id) =>
    {

      this.setState({ todos: this.state.todos.map(todo =>{
        if(todo.id === id){
        todo.completed =!todo.completed
        }


      
      return todo
    })});
    }
    //DELETE TODO
    delete = (id) =>
    {
        axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
        .then(res => this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]}) )
      // this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]})

    }

    //ADD TO DO

    Add = (title )=>{

      // const newtodo =
      // {
      //   id:uuid.v4(),
      //   title,
      //   completed:false 
      //  }
      axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})


      .then(res => this.setState({todos: [...this.state.todos ,res.data]}) )
      // this.setState({todos: [...this.state.todos ,newtodo]})
    }

  render(){
    
    // console.log(this.state.todos)
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
<Route exact path="/" render={props=>(
<React.Fragment>
<Addtodo Addtodo={this.Add}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/> 
      {/* PASSED AS PROPS */}

</React.Fragment>
  )} />



  <Route path="/about" component={About} />

        
          </div>
          </div>
          </Router>
  );
}
}

export default App;
