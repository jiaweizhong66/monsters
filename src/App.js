import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box';
//import { useState, useEffect } from 'react';

// function component. no render, no constructor
// takes props, return some jsx, dont have typical class component life cycle
// when react decide rerender, it would run the entire functional component 
// rerender when setState or props change. if setState doesnt change state, react will notice and will rerender
// const App = () => {
//   //array destructuring, searchField is '' by default
//   const [searchField, setSearchField] = useState(''); //[value, setvalue]
//   const [monsters, setMonster] = useState([]); //[value, setvalue]
//   const onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   }

//   // will trigger infinite rerendering because user is fetched from a API
//   // user will be stored in different location. React realized the pointer
//   // points at different memories and will trigger setState to rerender
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(
//       () => {
//       return {monsters: users}
//       }
//     )
//   )

//   // calls when function mounts. Nothing in the dependency since we want to run once
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(
//       () => {
//       return {monsters: users}
//       }
//       )
//     )
//   }, [])


//   return (
//     <div className="App">
//       <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
//       <CardList monsters={filteredMonsters}/>
//     </div>
//   );
// }

// pure vs impure functions
// pure functions solely depend on input
// impure dont
// side effect: function impacts something outside of its scope


// class component rerendering when setState is called or props changes
// rerender onl(y render the render()
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
