import React, { Component } from 'react'

export default class Registration extends Component {
    state={
        userName:'',
        userAge:'',
        userID:'',
        userPassword:'',
        hasDriverLicense: null,
        isSmoking: null,
        isDrinking:null
    }

handleUserName=(e)=>{
    this.setState({userName: e.target.value})
}

handleUserAge=(e)=>{
    this.setState({userAge: e.target.value})
}

handleUserID=(e)=>{
    this.setState({userID: e.target.value})
}

handleUserPassword=(e)=>{
    this.setState({userPassword: e.target.value})
}

handleDriverLicense=(e)=>{
    this.setState({hasDriverLicense: e.target.value})
}

handleSmoking=(e)=>{
    this.setState({isSmoking: e.target.value})
}

handleDrinking=(e)=>{
    this.setState({isDrinking: e.target.value})
}


finishRegistration=()=>{
    this.props.newUser( this.state );
    this.props.toggleUser('block')
    this.props.history.push('/userPage')    
}
    render() {
        // console.log(this.state)
        return (
            <div>

                <h2 id="registrationHeader">Registration</h2>
            
                <div class="registrationForm">
                    <input type="text" placeholder="Name.." onChange={this.handleUserName}/><br/>
                    <input type="text" placeholder="Age.." onChange={this.handleUserAge}/><br/>
                    <input type="text" placeholder="ID.." onChange={this.handleUserID}/><br/>
                    <input type="password" placeholder="Password.." onChange={this.handleUserPassword}/><br/>
                    <br/>

                    <div>
                        <label>Driver License:</label>
                            <input type="radio" name="driving" value="Yes" onChange={this.handleDriverLicense}/>Yes |
                            <input type="radio" name="driving" value="No" onChange={this.handleDriverLicense}/>No
                    </div>
                    <br/>
                    <div>
                        <label>Smoking: </label>
                            <input type="radio" name="smoking" value="Yes" onChange={this.handleSmoking}/>Yes |
                            <input type="radio" name="smoking" value="No" onChange={this.handleSmoking}/>No
                    </div>
                    <br/>
                    <div>
                        <label>Drinking:</label>
                            <input type="radio" name="drink" value="Yes" onChange={this.handleDrinking}/>Yes |
                            <input type="radio"name="drink" value="No" onChange={this.handleDrinking}/>No
                    </div>
                    <br/>
                    <br/>
                        <button id="finishRegButton" onClick={this.finishRegistration}>Finish Registration</button>
                        <br/>
                        
                </div>
            </div>
        )
    }
}
