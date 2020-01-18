import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/card-liist/cardList.component';
import { CardList } from './components/card-liist/cardList.component';
import {SearchBox} from "./components/search-box/search-box.component"

class App extends Component {
	/*
  constructor also gives us access to setState
  setState is passed as handler
  setState takes object as arg/ This object takes property as well as value to change
  */
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => 
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		)
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					type="search"
					placeholder="search monster"
					handleChange={(e) => {
							this.setState({ searchField: e.target.value });
						}
					}
				></SearchBox>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
