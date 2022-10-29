import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box';

// function component. no render, no constructor
// takes props, return some jsx, dont have typical class component life cycle
// const App = () => {
//   return ()
// }

// pure vs impure functions
// pure functions solely depend on input
// impure dont

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  // component only mount once when placed on the DOM
  //if you want to make api request you needs 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
      return {monsters: users}
      },
      () => {
        console.log(this.state);
      }
    ));
  }

  // if not seperate, it would be an anonomous functioan, gets reinitized over and over agin when onChange, slow down speed
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField: searchField};
    }) 
  }

  render(){
    // destructuring of es6, makes variable shorter
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
        <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }  
}

export default App;
