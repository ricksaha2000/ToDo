import React, { Component } from 'react'

export class Addtodo extends Component {

    state = {
        title:' '

    }
    Submit = (e) => {

        e.preventDefault();
        this.props.Addtodo(this.state.title);
        this.setState({title:''});

    }

    Change = (e) => this.setState({[e.target.name]:e.target.value});
    render() {
        return (
           <form onSubmit={this.Submit} style={{display:'flex'}}>

               <input type="text"
                name="title" 
               placeholder="Add Todo..." 
               value={this.state.title} 
               onChange={this.Change}
               style={{width:'44%'}}
               />
               
               
               
               <input type="submit" 
               value="submit" 
               className="btn" 
               style={{flex:'1'}}
               />
           </form>
        )
    }
}

export default Addtodo
