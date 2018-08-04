import React,{ Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super();
		this.state={
			robots: [],
			searchField: ''
			
		}
	}

	search=(event)=>{
		this.setState({searchField: event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
	}

	render(){
		const { robots, searchField } = this.state;
		const filtr = robots.filter(i=>i.name.toLowerCase().includes(searchField.toLowerCase()));
		return (!robots.length)
			?  (<h1>Loading</h1>) 
		 :(
		<div className='tc'>
		<h1 className='f1'>Robot Friends</h1>
		<SearchBox searchchange={this.search}/>
		<Scroll>
		<CardList robots= {filtr}/>
		</Scroll>
		</div>
	)
}
}
export default App;