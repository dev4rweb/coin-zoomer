import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import SimpleTableItem from "./SimpleTableItem";
import {useSelector} from "react-redux";

const SimpleTable = () => {
    const coins = useSelector(state => state.coinGecko.coinsMarkets)

    const tableData = [
        {id: 1, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 2, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 3, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 4, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 5, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
    ]

    useEffect(() => {
        console.log('Simple Table', coins)
    }, [coins]);

    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th className={s.coinsCol}>Coins</th>
                <th>Symbol</th>
                <th>1h</th>
                <th style={{minWidth: '70px'}}>Price</th>
                <th style={{minWidth: '130px'}}>Market Cap</th>
                <th style={{minWidth: '90px'}}>Launch</th>
                <th>Upvotes</th>
            </tr>
            </thead>
            <tbody>
            {
                /*tableData.map((i, index) =>
                    <SimpleTableItem key={i.id} data={i} index={index}/>)*/
                coins.map((i, index) =>
                <SimpleTableItem key={i.id} data={i} index={index}/>)
            }
            </tbody>
        </Table>
    );
};

export default SimpleTable;
