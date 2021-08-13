import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Collections from '../../components/collections/collections.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({ collections }) => (
	<div className='shop-page'>
		{collections.map(({ id, ...collectionProps }) => (
			<Collections key={id} {...collectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
