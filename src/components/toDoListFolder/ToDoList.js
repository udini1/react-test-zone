import React, { Component } from 'react'

export default class ToDoList extends Component {
    state={
        index: this.props.index,
        item: this.props.item,
        isChecked: false,
        // backgroundChecked: 'rgb(133, 225, 231)',
        checkButton: 'Check',
        checkedItems: this.props.checkedItems
    }

    // remove item from list
removeItem=()=>{
    this.props.remove(this.state.item)
}


// mark item as checked/done
// **** Still not done **** //
checkItem=()=>{    
    this.props.markChecked(this.state.item, this.state.index)
    // if (this.state.checkedItems.includes(this.state.item)){
    //     this.setState({backgroundChecked: 'green'});
    //     this.setState({checkButton:<span>&#10003;</span>});
    //     this.setState({isChecked: true})
        
    // } else {
    //     this.setState({backgroundChecked: 'rgb(133, 225, 231)'})
    //     this.setState({checkButton:'Check'})
    //     this.setState({isChecked: false})
        
    // }
}

    render() {
        // console.log(this.state.checkedItem)
        // ..
        return (
                <div id="itemSection">
                    <p id="itemName">{this.state.item}</p>
                        <button id="removeItem" onClick={this.removeItem}>
                             Delete
                        </button>
                    {/* check button */}                    
                        <button id="checkButton" style={{background: (this.state.checkedItems.includes(this.state.item) ? 'green' : 'rgb(133, 225, 231)')}}  onClick={this.checkItem}>
                             {(this.state.checkedItems.includes(this.state.item) ? <span>&#10003;</span> : 'check')} 
                        </button>gi
                </div>
        )
    }
}
