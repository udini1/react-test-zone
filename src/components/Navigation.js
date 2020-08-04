import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {

    
    
    render(){
        
    return (
        <div className={(this.props.theme === true ? 'darkNavigation' : 'navigation' )}>
            <Link id="homePageNav" className="navLinks" to='/'>Back To Homepage</Link>
            <Link id="toDoListNav" className="navLinks" to='/toDoList'>To-Do List</Link>
            <Link id="registrationNav" className="navLinks" to='/registration'>Register</Link>
            <Link id="userPageNav" className="navLinks" to='/userPage' style={{display:this.props.toggleUserInNav}}>{this.props.currentUser.userName}</Link>           
        </div>
        
    )
    }
}
