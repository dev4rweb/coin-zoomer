import React from 'react';
import s from '../../../sass/components/ChainItem/ChainItem.module.scss'
import {useDispatch} from "react-redux";
import {removeChainAction} from "../../reducers/chainReducer";

const ChainItem = ({chain}) => {
    const dispatch = useDispatch()
    // console.log('ChainItem', chain)

    const removeHandler = e => {
        // console.log('removeHandler', chain)
        dispatch(removeChainAction(chain.id))
    };

    return (
        <div className={`d-flex align-items-center ${s.chainItem}`}>
            <span
                className={`me-2`}
            >
                <b>{chain.chainName}</b>
            </span>
            <span  className="mb-0 me-2">{chain.chainValue}</span>
            <span
                className={s.removeChain}
                onClick={removeHandler}
            >
                &times;
            </span>
        </div>
    );
};

export default ChainItem;
