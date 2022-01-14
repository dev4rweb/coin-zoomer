import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss'
import coinLogo from '../../../../../assets/img/coin-logo.png'
import iconUp from '../../../../../assets/img/icon-up.png'
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {Button} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import {PATH_COIN_OPEN_PAGE} from "../../../../utils/routesPath";

const SimpleTableItem = ({data, index}) => {
    const d = new Date(data.atl_date),
        dateFormat = [d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
            (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1),
            d.getFullYear()].join('-')/*+' '+
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':')*/;

    const handleClick = e => {
        // console.log('StatusTableRow click', e.target.tagName !== 'BUTTON')
        if (e.target.tagName !== 'BUTTON')
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            alert('What do we need to do?')
        }
        // console.log('voteHandler ', e.currentTarget.tagName === 'BUTTON');
    };

    return (
        <tr className={s.tableItem} onClick={handleClick}>
            <td className={s.coinsCol}>
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
                    data.price_change_percentage_1h_in_currency > 0 ?
                        <div className={s.greenCol}>
                            {/*<img src={iconUp} alt="up"/>*/}
                            <span style={{marginRight: '5px'}}>&uarr;</span>
                            {data.price_change_percentage_1h_in_currency.toFixed(3)}%
                        </div> :
                        <div className={s.redCol}>
                            <span style={{marginRight: '5px'}}>&darr;</span>
                            {data.price_change_percentage_1h_in_currency.toFixed(3)}
                        </div>
                }
            </td>
            <td>
                <div>
                    $ {data.current_price.toFixed(2)}
                </div>
            </td>
            <td>
                {
                    data.market_cap > 0 ?
                        <div>
                            <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                            {((data.market_cap) / 100000000).toFixed(3)}
                        </div> :
                        <div><span>$</span> {data.market_cap}</div>
                }
            </td>
            <td>
                <div>
                    {dateFormat}
                </div>
            </td>
            <td>
                <div style={{paddingRight: '15px', position: 'relative'}}>
                    <Button
                        variant="info"
                        className="fill-btn"
                        onClick={voteHandler}
                        style={{maxHeight: '32px', marginRight: '-5px'}}
                    >
                        Vote
                    </Button>
                    <OutlineBtn maxWith={`92px`}>
                        <span>{data.current_price.toFixed(2)}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default SimpleTableItem;
