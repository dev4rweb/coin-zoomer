import React from 'react';
import s from '../../../sass/components/ChainItem/ChainItem.module.scss'

const Chain = ({chain, removeChain = null}) => {

    const removeHandler = e => {
        // console.log('removeHandler', chain)
        if (removeChain) {
            removeChain(chain)
        }
    };

    return (
        <div className={`d-flex align-items-center ${s.chainItem}`}>
            <span
                className={`me-2`}
            >
                <b>{chain.chain}</b>
            </span>
            <span  className="mb-0 me-2">{chain.contract_address}</span>
            <span
                className={s.removeChain}
                onClick={removeHandler}
            >
                &times;
            </span>
        </div>
    );
};

export default Chain;
