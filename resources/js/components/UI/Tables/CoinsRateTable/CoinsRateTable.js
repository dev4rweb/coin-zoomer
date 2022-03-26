import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import coinLogo from '../../../../../assets/img/coin-logo.png'
import coinLogoTwo from '../../../../../assets/img/coin-logo-two.png'
import coinLogoThree from '../../../../../assets/img/coin-logo-three.png'
import coinLogoFour from '../../../../../assets/img/coin-logo-four.png'
import coinLogoFive from '../../../../../assets/img/coin-logo-five.png'
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import SimpleTableItem from "../SimpleTable/SimpleTableItem";
import CoinsRateTableRow from "./CoinsRateTableRow";
import CoinsTableRowInner from "./CoinsTableRowInner";
import {useSelector} from "react-redux";
import ToggleSortCoins from "../../sorting/ToggleSortCoins";


const CoinsRateTable = () => {
    const coins = useSelector(state => state.coin.coins)
    let isApprovedCoins = null
    const tableData = [
        /*       {
                 id: 1,
                  logo: coinLogo,
                  name: 'Coins name long name',
                  symbol: 'NameSymbol',
                  isUp: true,
                  dynamicValue: 12.993,
                  marketCap: 897.755,
                  price: 177.88,
                  launchDate: 14,
                  upVotes: 87946
              },
              {
                  id: 2,
                  logo: coinLogoTwo,
                  name: 'Coins name long name',
                  symbol: 'NameSymbol',
                  isUp: true,
                  dynamicValue: 12.993,
                  marketCap: 897.755,
                  price: 177.88,
                  launchDate: 14,
                  upVotes: 87946
              },
              {
                  id: 3,
                  logo: coinLogoThree,
                  name: 'Coins name long name',
                  symbol: 'NameSymbol',
                  isUp: true,
                  dynamicValue: 12.993,
                  marketCap: 897.755,
                  price: 177.88,
                  launchDate: 14,
                  upVotes: 87946
              },
              {
                  id: 4,
                  logo: coinLogoFour,
                  name: 'Coins name long name',
                  symbol: 'NameSymbol',
                  isUp: true,
                  dynamicValue: 12.993,
                  marketCap: 897.755,
                  price: 177.88,
                  launchDate: 14,
                  upVotes: 87946
              },
              {
                  id: 5,
                  logo: coinLogoFive,
                  name: 'Coins name long name',
                  symbol: 'NameSymbol',
                  isUp: true,
                  dynamicValue: 12.993,
                  marketCap: 897.755,
                  price: 177.88,
                  launchDate: 14,
                  upVotes: 87946
              },*/
    ]

    return (
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
                        <ToggleSortCoins sortBy={'new_coin'}/>
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
                coins && coins.data && coins.data.length ?
                    coins.data.map((i, index) =>
                        <CoinsTableRowInner key={i.id} data={i} index={index}/>
                    )
                    :
                    tableData.map((i, index) =>
                        <CoinsRateTableRow key={i.id} data={i} index={index}/>
                    )
            }
            </tbody>
        </Table>
    );
};

export default CoinsRateTable;
