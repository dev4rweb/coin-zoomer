import React from 'react';
import '../../../../sass/components/UI/Loader/Loader.scss'

const Loader = () => {
    return (
        <div className='loaderWrapper'>
            <div className="lds-grid">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default Loader;
