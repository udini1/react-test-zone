import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {


    
    // sending the chosen option's value to app.js and making changes accoridenly 
    dropDownOptions=(e)=>{
            this.props.option(e.target.value)
    }



    
render(){
    // console.log(` text : ${this.state.modeText}`)
    // console.log(` value : ${this.state.modeValue}`)
    
    return (
        <div>
            <h1 id="homePageHeader">My Test Zone</h1>
            <br/>
            
            <Link id="linkToList" to='/toDoList'>Start a TO-DO list</Link><br/><br/>
            <Link id="linkToRegistration" to='/registration'>Registration Form</Link><br/>
            <br/>
            <select id="dropDownBar" onChange={this.dropDownOptions}>
                <option disabled selected>Change something</option>
                <option id="darkMode" value='darkMode' >{(this.props.darkTheme === true ? "Light Up!" : " Go Dark!" )}</option>
                <option id="italicFont" value="goItalic">Go Italic!</option>
            </select>            

            
        </div>
    )
}
}
