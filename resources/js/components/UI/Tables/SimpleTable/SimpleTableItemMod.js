import React from 'react';
import {usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {PATH_COIN_OPEN_PAGE, PATH_LOGIN_PAGE} from "../../../../utils/routesPath";
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import CustomBadge from "../../CustomBadge/CustomBadge";
import {priceConverter} from "../../../../utils/priceConverter";
import {Button} from "react-bootstrap";
import OutlineBtn from "../../OutlineBtn/OutlineBtn";

const SimpleTableItemMod = ({data, index}) => {
    const { auth } = usePage().props

    const handleClick = e => {
        if (e.target.tagName !== 'BUTTON')
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.name.replaceAll(' ', '_')}`)
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            if (auth.user) {
                Inertia.post('/vote', {coin_id: data.id})
            } else {
                Inertia.visit(`${PATH_LOGIN_PAGE}`)
            }
        }
    };

    return (
        <tr className={s.tableItem} onClick={handleClick}>
            <td className={s.coinsCol}>
                <div className={s.coins}>
                    <img
                        style={{borderRadius: '50%'}}
                        src={data.logotype}
                        // src='/img-polygonal'
                        alt="coin"
                    />
                    <div>
                        <p>{data.name}</p>
                        <div className="d-flex">
                            {data.is_kyc ? <CustomBadge data={'KYC'} /> : ''}
                            {data.is_presale ? <CustomBadge data={'PRESALE'} /> : ''}
                            {
                                data.coin_chains && data.coin_chains.length &&
                                data.coin_chains.length > 0  ?
                                    data.coin_chains.map((item, index) => {
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
            <td className={s.symbol}><div>{data.symbol}</div></td>
            <td>
                {
                    data.one_hour ?
                        data.one_hour > 0 ?
                            <div className={s.greenCol}>
                                <span style={{marginRight: '5px'}}>&uarr;</span>
                                {/*{difData.one_hour.toFixed(8)}%*/}
                                {data.one_hour_formatted}%
                            </div>
                            : data.one_hour < 0 ?
                            <div className={s.redCol}>
                                <span style={{marginRight: '5px'}}>&darr;</span>
                                {/*{difData.one_hour.toFixed(8)}%*/}
                                {data.one_hour_formatted}%
                            </div>
                            :
                            <div>0.0%</div>
                        :
                        <div>0.0%</div>
                }
            </td>
            <td>
                <div>
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {data.price_formatted}
                </div>
            </td>
            <td>
                <div>
                    <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                    {priceConverter(data.market_cap)}
                </div>
            </td>
            <td><div>{data.launch_date}</div></td>
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
                        <span>{data.votes}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default SimpleTableItemMod;
