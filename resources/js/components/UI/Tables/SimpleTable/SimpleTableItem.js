import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'
import coinLogo from '../../../../../assets/img/coin-logo.png'
import iconUp from '../../../../../assets/img/icon-up.png'
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {Button} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import {PATH_COIN_OPEN_PAGE} from "../../../../utils/routesPath";

const SimpleTableItem = ({data, index}) => {

    const handleClick = e => {
        console.log('StatusTableRow click', data)
        Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
    };

    return (
        <tr className={s.tableItem}>
            <td className={s.coinsCol} onClick={handleClick}>
                <div className={s.coins}>
                    <img src={coinLogo} alt="coin"/>
                    <p>{data.name}</p>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {data.symbol}
                </div>
            </td>
            <td>
                {
                    data.isUp ?
                        <div className={s.greenCol}>
                            <img src={iconUp} alt="up"/>
                            {data.dynamicValue}%
                        </div> :
                        <div>{data.dynamicValue}</div>
                }
            </td>
            <td>
                {
                    data.isUp ?
                        <div>
                            <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                            {data.marketCap}
                        </div> :
                        <div><span>$</span> {data.marketCap}</div>
                }
            </td>
            <td>
                <div>
                    {data.launchDate} days ago
                </div>
            </td>
            <td>
                <div style={{paddingRight: '15px', position: 'relative'}}>
                    <Button
                        variant="info"
                        className="fill-btn"
                        style={{maxHeight: '32px', marginRight: '-5px'}}
                    >
                        Vote
                    </Button>
                    <OutlineBtn>
                        <span>{data.upVotes}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default SimpleTableItem;
