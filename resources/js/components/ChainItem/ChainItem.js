import React from 'react';

const ChainItem = () => {
    return (
        <div className="d-flex align-items-center">
            <span style={{color: 'white'}} className="me-2"><b>Chain</b></span>
            <span style={{color: 'white'}} className="mb-0 me-2">Contract address</span>
            <span style={{color: 'red', fontSize: '30px'}}>&times;</span>
        </div>
    );
};

export default ChainItem;
