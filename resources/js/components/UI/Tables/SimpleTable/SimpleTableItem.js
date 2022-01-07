import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'
import coinLogo from '../../../../../assets/img/coin-logo.png'
import iconUp from '../../../../../assets/img/icon-up.png'
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {Button} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import {PATH_COIN_OPEN_PAGE} from "../../../../utils/routesPath";

const SimpleTableItem = ({data, index}) => {
    const  d = new Date(data.atl_date),
        dformat = [d.getDate(),
                d.getMonth()+1,
                d.getFullYear()].join('-')/*+' '+
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':')*/;

    const handleClick = e => {
        console.log('StatusTableRow click', data)
        Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
    };

    return (
        <tr className={s.tableItem}>
            <td className={s.coinsCol} onClick={handleClick}>
                <div className={s.coins}>
                    <img src={data.image} alt="coin"/>
                    <p>{data.id}</p>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {data.symbol}
                </div>
            </td>
            <td>
                {
                    data.price_change_percentage_1h_in_currency < 0 ?
                        <div className={s.greenCol}>
                            <img src={iconUp} alt="up"/>
                            {data.price_change_percentage_1h_in_currency.toFixed(3)}%
                        </div> :
                        <div>{data.price_change_percentage_1h_in_currency.toFixed(3)}</div>
                }
            </td>
            <td>
                {
                    data.market_cap > 0 ?
                        <div>
                            <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                            {((data.market_cap)/100000000).toFixed(3)}
                        </div> :
                        <div><span>$</span> {data.market_cap}</div>
                }
            </td>
            <td>
                <div>
                    {dformat}
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
                        <span>{data.current_price.toFixed(2)}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default SimpleTableItem;
