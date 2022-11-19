import React from 'react';
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import ToggleSortCoins from "../../sorting/ToggleSortCoins";
import {Table} from "react-bootstrap";
import CoinsRateTableItem from "./CoinsRateTableItem";

const CoinsRateTableMod = ({coins}) => {
    return (
        <div>
            {
                coins.length ?
                    <Table className={s.simpleTable} striped hover responsive variant="dark">
                        <thead>
                        <tr>
                            <th className={s.coinsColLong}>
                                <div className="d-flex justify-content-around align-items-center">
                                    <span>Coins</span>
                                    <ToggleSortCoins sortBy={'byName'}/>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-around align-items-center">
                                    <span>Symbol</span>
                                    <ToggleSortCoins sortBy={'bySymbol'}/>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-around align-items-center">
                                    <span>1h</span>
                                    <ToggleSortCoins sortBy={'byHour'}/>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-around align-items-center">
                                    <span>Price</span>
                                    <ToggleSortCoins sortBy={'byPrice'}/>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-around align-items-center">
                                    <span>Market Cap</span>
                                    <ToggleSortCoins sortBy={'byMarketCap'}/>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex justify-content-around align-items-center">
                                    <span>Launch</span>
                                    <ToggleSortCoins sortBy={'byLaunchDate'}/>
                                </div>
                            </th>
                            <th>Upvotes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            coins.map((i, index) =>
                                <CoinsRateTableItem key={i.id} coin={i} index={index} />
                            )
                        }
                        </tbody>
                    </Table>
                    :
                    <h2 className='text-center'>Coins not found</h2>
            }
        </div>
    );
};

export default CoinsRateTableMod;
