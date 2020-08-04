import React, { Component } from 'react';
import './App.css';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ToDoList from './components/toDoListFolder/ToDoList';
import AddItem from './components/toDoListFolder/AddItem';
import Registration from './components/RegistrationFolder/Registration';
import Navigation from './components/Navigation';
import UserPage from './components/UserPage';
import CheckedItem from './components/toDoListFolder/CheckedItem';




export default class App extends Component {

  state={
    items:[],
    checkedItems: [],
    itemsInList: '',
    users:[],
    currentUser:'',
    toggleUserInNav: 'none',
    changeSomething: {
      background: '',
      fontStyle: ''
    },
    darkTheme: false,
    fontStyle: ''
  }

  

// the web tab title changing to the number of the items in the list
componentDidUpdate=()=>{
  document.title = this.state.items.length + ' items';
}

// removes an item from the list of items
removeItem=(item)=>{
  this.setState({items: this.state.items.filter(obj => obj !== item)})
  // next line should be used if we want to remove the item from the checked list also 
  // this.setState({checkedItems: this.state.checkedItems.filter(obj => obj !== item)})
}

// adds an item to the list of items
addItem=(item)=>{
  if ( item !== ''){
    this.setState({items: [...this.state.items, item]})
  }
}

// add item to checkedList
checkedItem=(item,index)=>{
  if (!this.state.checkedItems.includes(item)){
    this.setState({checkedItems: [...this.state.checkedItems, item]})
  } else {
    this.setState({checkedItems: this.state.checkedItems.filter(obj => obj !== item)})
  }
}

// add a new user to the list and sets that user as the current user loged in
addNewUser=(newUser)=>{
  this.setState({users: [...this.state.users, newUser]})
  this.setState({currentUser: newUser})
}

// show the loged in user in navigation bar
toggleUserInNavigation=(toggle)=>{
  this.setState({toggleUserInNav: toggle})
}

// changing to darkmode and lightmode, italic font and more based on chosen option
changingSomething=(val)=>{

  if(val === 'darkMode'){
    this.setState({darkTheme: !this.state.darkTheme})
      if ( document.body.className === '' || document.body.className === 'lightTheme'){
        document.body.classList.remove('lightTheme')
        document.body.className += 'darkTheme';
      } else {
        document.body.classList.remove('darkTheme')
        document.body.className += 'lightTheme'
      }
  }


    if (val === 'goItalic'){
      if (document.body.fontStyle === undefined || document.body.fontStyle === '' || document.body.fontStyle === null){
        document.body.fontStyle = 'italic'
    } else if (document.body.fontStyle === 'italic') {
      document.body.fontStyle = undefined
    }
  }

}
  render() {
    
    return (
      <div className='testZone'>
        <Router history={history}>

          <Navigation currentUser={this.state.currentUser} toggleUserInNav={this.state.toggleUserInNav} theme={this.state.darkTheme}/>

          <Switch>

            <Route exact path="/" component={()=>{
              return <HomePage option={this.changingSomething} darkTheme={this.state.darkTheme}/>
            }}/>


            <Route exact path="/toDoList" component={()=>{
              return (
                <div>
                  <h2 id="toDoListHeader">{this.state.currentUser.userName} To-Do List</h2>
                  {/* presenting the To-Do List */}
                <ol id="theToDoList">
                {this.state.items.map((obj, index) =>{ 
                        return  <li>
                              <ToDoList item={obj} index={index} remove={this.removeItem} markChecked={this.checkedItem} checkedItems={this.state.checkedItems}/>
                          </li>
                })
                }
                </ol>
                {/* user input and button component */}
                <AddItem add={this.addItem}/>
                <br/>
                <div>
                  {/* display Checked Items title when there is a checked item */}
                  <h3 style={{display: (this.state.checkedItems.length > 0) ? "block" : "none" }}>Checked Items</h3>
                  {/* displaying the checked items */}
                  {this.state.checkedItems.map((item, index) =>{
                    return <CheckedItem item={item} index={index}/>
                  })}
                </div>
                </div>
              )
            }}    
            />

            <Route exact path='/registration' component={()=>{
              return <Registration newUser={this.addNewUser} history={history} toggleUser={this.toggleUserInNavigation}/>
            }}            
          />

          <Route exact path='/userPage' component={()=>{
              return <UserPage currentUser={this.state.currentUser}/>
            }}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
