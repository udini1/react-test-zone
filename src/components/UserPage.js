import React, { Component } from 'react'

export default class UserPage extends Component {

    state={
        userName:this.props.currentUser.userName,
        userAge:this.props.currentUser.userAge,
        userID:this.props.currentUser.userID,
        userPassword:this.props.currentUser.userPassword,
        hasDriverLicense: this.props.currentUser.hasDriverLicense,
        isSmoking: this.props.currentUser.isSmoking,
        isDrinking:this.props.currentUser.isDrinking
    }
    render() {
        return (
            <div>
                Hello <span style={{fontSize:'20px', color: 'Blue'}}>{this.state.userName}</span>,
            <br/>
                Your Age is : {this.state.userAge},<br/>
                and your ID is :{this.state.userID}
            <br/>
            </div>
        )
    }
}
