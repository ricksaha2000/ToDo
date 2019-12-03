import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Todoitems extends Component {

    getStyle = () =>{
        return{

        
        background : '#f4f4f4' , 
        padding:'10px' , 
        paddingLeft:'10px',
        borderBottom :'1px #ccc dotted' , 
        textDecoration: this.props.todoss.completed?
        'line-through':'none',
        textAlign:'center',
        } 
        }
    
        

    render() {

        const{ id,title } = this.props.todoss;
        // PULL OUT PROPS FROM TODOSS
        return (
            <div style={this.getStyle()}>
                {/* Todoitem has a bg color of f4f4f4 */}
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this ,id)} />{' '}

                {title}
                <button onClick={this.props.delete.bind(this , id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

Todoitems.propTypes = {
    
    todoss: PropTypes.array.isRequired
  
}
const btnStyle = {
    background: '#ff0000' , 
    color:'#fff',
    border:'none',
    padding:'5px 25px' , 
    cursor:'pointer',
    float:'right',
    borderRadius:'50px',

}


export default Todoitems
 