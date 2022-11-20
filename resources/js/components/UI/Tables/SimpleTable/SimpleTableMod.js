import React from 'react';
import {Table} from "react-bootstrap";
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import SimpleTableItemMod from "./SimpleTableItemMod";
import SimpleTableItem from "./SimpleTableItem";

const SimpleTableMod = ({coins}) => {

    // console.log('SimpleTableMod', coins)

    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th className={s.coinsCol}>Coins</th>
                <th>Symbol</th>
                <th>1h</th>
                <th style={{minWidth: '120px'}}>Price</th>
                <th style={{minWidth: '130px'}}>Market Cap</th>
                <th style={{minWidth: '90px'}}>Launch</th>
                <th>Upvotes</th>
            </tr>
            </thead>
            <tbody>
            {
                coins.data.map((i, index) =>
                    <SimpleTableItemMod key={i.id} data={i} index={index}/>
                )
            }
            </tbody>
        </Table>
    );
};

export default SimpleTableMod;
