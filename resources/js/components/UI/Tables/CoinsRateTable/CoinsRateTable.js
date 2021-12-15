import React from 'react';
import {Table} from "react-bootstrap";
import coinLogo from '../../../../../assets/img/coin-logo.png'
import coinLogoTwo from '../../../../../assets/img/coin-logo-two.png'
import coinLogoThree from '../../../../../assets/img/coin-logo-three.png'
import coinLogoFour from '../../../../../assets/img/coin-logo-four.png'
import coinLogoFive from '../../../../../assets/img/coin-logo-five.png'
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import SimpleTableItem from "../SimpleTable/SimpleTableItem";
import CoinsRateTableRow from "./CoinsRateTableRow";


const CoinsRateTable = () => {
    const tableData = [
        {id: 1, logo: coinLogo, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 2, logo: coinLogoTwo, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 3, logo: coinLogoThree, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 4, logo: coinLogoFour, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 5, logo: coinLogoFive, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
    ]
    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th className={s.coinsColLong}>Coins</th>
                <th>Symbol</th>
                <th>1h</th>
                <th>Market Cap</th>
                <th>Launch</th>
                <th>Upvotes</th>
            </tr>
            </thead>
            <tbody>
            {
                tableData.map((i, index) =>
                    <CoinsRateTableRow key={i.id} data={i} index={index}/>
                )
            }
            </tbody>
        </Table>
    );
};

export default CoinsRateTable;
