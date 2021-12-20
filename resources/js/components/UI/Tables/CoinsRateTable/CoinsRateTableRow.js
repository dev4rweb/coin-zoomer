import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import GraphicIncrease from "../../GraphicIncrease/GraphicIncrease";
import {Button} from "react-bootstrap";

const CoinsRateTableRow = ({data}) => {

    return (
        <tr className={s.tableItem}>
            <td className={s.coinsCol}>
                <div className={s.coinsLong} >
                    <img src={data.logo} alt="coin"/>
                    <p>{data.name}</p>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {data.symbol}
                </div>
            </td>
            <td>
                {
                    data.isUp ?
                        <div>
                            <GraphicIncrease/>
                        </div>:
                        <div>{data.dynamicValue}</div>
                }
            </td>
            <td>
                {
                    data.isUp ?
                        <div>
                            <span style={{color: '#7dd75c', marginRight: '5px'}}>$</span>
                            {data.marketCap}
                        </div> :
                        <div><span>$</span> {data.marketCap}</div>
                }
            </td>
            <td>
                <div>
                    {data.launchDate} days ago
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
                        <span>{data.upVotes}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default CoinsRateTableRow;
