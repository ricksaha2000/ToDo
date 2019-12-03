import React , { Component } from 'react';
import TodoItem from './Todoitems';
import PropTypes from 'prop-types';


class Todos extends Component{

 
  render(){
  return this.props.todos.map((todo)=>(

    <TodoItem key={todo.id} todoss={todo} markComplete = {this.props.markComplete} delete={this.props.delete}/>
    // So todoss=todo....LHS is the prop for Todoitems and todo is the parameter 



  ));
}
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
