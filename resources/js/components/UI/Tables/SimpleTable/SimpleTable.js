import React from 'react';
import {Table} from "react-bootstrap";
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import SimpleTableItem from "./SimpleTableItem";

const SimpleTable = () => {
    const tableData = [
        {id: 1, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 2, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 3, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 4, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
        {id: 5, name: 'Coins name long name', symbol: 'NameSymbol', isUp: true, dynamicValue: 12.993, marketCap: 897.755, launchDate: 14, upVotes: 87946},
    ]

    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th className={s.coinsCol}>Coins</th>
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
                    <SimpleTableItem key={i.id} data={i} index={index}/>)
            }
            </tbody>
        </Table>
    );
};

export default SimpleTable;
