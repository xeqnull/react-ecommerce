import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collections.styles.scss';

const Collections = ({ title, items }) => (
    <div className='collections'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))
            }
        </div>
    </div>
);

export default Collections;
