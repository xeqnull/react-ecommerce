import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/img/cart.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{cartItems.length || 0}</span>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
