import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<ChakraProvider>
				<div>
					<Header currentUser={this.state.currentUser} />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/shop' component={ShopPage} />
						{/* <Route path='/shop/hats' component={HatsPage} />
						<Route path='/shop/jackets' component={JacketsPage} />
						<Route path='/shop/sneakers' component={SneakersPage} />
						<Route path='/shop/womens' component={WomensPage} />
						<Route path='/shop/mens' component={MensPage} /> */}
						<Route path='/authentication' component={Authentication} />
					</Switch>
				</div>
			</ChakraProvider>
		);
	}
}

export default App;
