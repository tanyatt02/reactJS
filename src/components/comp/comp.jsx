import './style.css';

import React from 'react';

export default props => {
    let { name }=props;
    return ( 
        <div>
            <h2> Something from REACT component {name} </h2> 
        </div>
    )
}
