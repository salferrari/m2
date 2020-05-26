import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
// import logo from './logo.svg';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {

constructor(){
  super()
  this.state = {
    monsters: [],
    searchField: ''
  };

  // we can make handleChange a class method here in the ctor
  // this.handleChange = this.handleChange.bind(this)
  // without doing this, there wouldn't be a this object for this function
  // alternatively we can do the same via arrow functions. see handleChange

}
  
componentDidMount() {
  console.log("cdm")
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))

  }

handleChange = (e) => {
  this.setState({searchField: e.target.value})
}

render() {

    const {monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = 'search for monsters'
          handleChange = {this.handleChange}
        />
        
        <CardList monsters = { filteredMonsters } ></CardList>
      </div>
    )
  }
}
export default App;
