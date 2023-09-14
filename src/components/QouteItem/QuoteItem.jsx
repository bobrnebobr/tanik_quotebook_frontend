import React from 'react';
import './QuoteItem.css'

const QuoteItem = (props) => {
    return (
        <div className={'quote-item'}>
            <span className={'tanik-said'}>Once Nikita Tarasov said:</span>
            <span>{props.data}</span>
        </div>
    );
};

export default QuoteItem;