import React, { Component } from 'react'

export default class AddItem extends Component {
    state={
        item: ''
    }

handleItem=(e)=>{
    this.setState({item: e.target.value})
}

addItem=()=>{
    this.props.add(this.state.item)
}
    render() {
        return (
            <div>
                <input id="inputName" placeholder="item..." onChange={this.handleItem}/>
                <button id="addToList" onClick={this.addItem}>Add to list</button>
            </div>
        )
    }
}
