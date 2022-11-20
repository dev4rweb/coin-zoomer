import React from 'react';
import {Inertia} from "@inertiajs/inertia";
import {PATH_COIN_OPEN_PAGE, PATH_LOGIN_PAGE} from "../../../../utils/routesPath";
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import CustomBadge from "../../CustomBadge/CustomBadge";
import {priceConverter} from "../../../../utils/priceConverter";
import {Button} from "react-bootstrap";
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {usePage} from "@inertiajs/inertia-react";

const CoinsRateTableItem = ({coin}) => {
    const { auth } = usePage().props

    const handleClick = e => {
        console.log('StatusTableRow click', coin)
        if (e.target.tagName !== 'BUTTON')
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${coin.name.replaceAll(' ', '_')}`)
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            if (auth.user) {
                Inertia.post('/vote', {coin_id: coin.id})
            } else {
                Inertia.visit(`${PATH_LOGIN_PAGE}`)
            }
        }
    };

    return (
        <tr className={s.tableItem} onClick={handleClick}>
            <td className={s.coinsCol}>
                <div className={s.coinsLong}>
                    <img
                        style={{
                            borderRadius: '50%'
                        }}
                        src={coin.logotype}
                        alt="coin"
                    />
                    <div>
                        <p>{coin.name}</p>
                        <div className="d-flex">
                            {
                                coin.is_kyc ? <CustomBadge data={'kyc'}/> : ''
                            }
                            {
                                coin.is_presale ? <CustomBadge data={'PRESALE'} /> : ''
                            }
                            {
                                coin.coin_chains && coin.coin_chains.length &&
                                coin.coin_chains.length > 0  ?
                                    coin.coin_chains.map((item, index) => {
                                        if (index < 3) {
                                            return  <CustomBadge data={item.chain} key={index}/>

                                        }
                                    })
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {coin.symbol}
                </div>
            </td>
            <td>
                {
                    coin.one_hour ?
                        coin.one_hour > 0 ?
                            <div className={s.greenCol}>
                                <span style={{marginRight: '5px'}}>&uarr;</span>
                                {/*{difData.one_hour.toFixed(8)}%*/}
                                {coin.one_hour_formatted}%
                            </div>
                            : coin.one_hour < 0 ?
                            <div className={s.redCol}>
                                <span style={{marginRight: '5px'}}>&darr;</span>
                                {/*{difData.one_hour.toFixed(8)}%*/}
                                {coin.one_hour_formatted}%
                            </div>
                            :
                            <div>0.0%</div>
                        :
                        <div>0.0%</div>
                }
            </td>
            <td className={s.symbol}>
                <div>
                    {/*{`$ ${difData.price}`}*/}
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {/*{priceConverter(difData.price)}*/}
                    {coin.price_formatted}
                </div>
            </td>
            <td>
                <div>
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {priceConverter(coin.market_cap)}
                </div>
            </td>
            <td>
                <div>
                    {coin.launch_date}
                </div>
            </td>
            <td>
                <div style={{paddingRight: '15px', position: 'relative'}}>
                    <Button
                        variant="info"
                        className="fill-btn"
                        onClick={voteHandler}
                        style={{
                            maxHeight: '32px', marginRight: '-5px',
                            fontWeight: 'lighter', background: 'linear-gradient(90deg, #009fe6, #00f5f6)',
                            zIndex: '1'
                        }}
                    >
                        Vote
                    </Button>

                    <OutlineBtn>
                        <span>{coin.votes}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default CoinsRateTableItem;
