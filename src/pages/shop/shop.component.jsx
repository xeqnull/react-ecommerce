import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Collections from '../../components/collections/collections.component';

class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		return (
			<div className='shop-page'>
				{this.state.collections.map(({ id, ...collectionProps }) => (
					<Collections key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
