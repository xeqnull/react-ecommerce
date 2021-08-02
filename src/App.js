import './App.css';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<ChakraProvider>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/shop' component={ShopPage} />
						{/* <Route path='/shop/hats' component={HatsPage} />
						<Route path='/shop/jackets' component={JacketsPage} />
						<Route path='/shop/sneakers' component={SneakersPage} />
						<Route path='/shop/womens' component={WomensPage} />
						<Route path='/shop/mens' component={MensPage} /> */}
						<Route
							exact
							path='/authentication'
							render={() =>
								this.props.currentUser ? (
									<Redirect to='/' />
								) : (
									<Authentication />
								)
							}
						/>
					</Switch>
				</div>
			</ChakraProvider>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
