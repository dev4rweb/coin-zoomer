import React from 'react';
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {Button} from "react-bootstrap";
import StatusItem from "../../StatusItem/StatusItem";

const StatusTableRow = ({data}) => {
    return (
        <tr className={s.tableItem}>
            <td className={s.coinsCol}>
                <div className={s.coinsStatus}>
                    <img src={data.logo} alt="coin"/>
                    <p>{data.name}</p>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    <StatusItem isActive={data.isActive} />
                </div>
            </td>
            <td className={s.endDate}>
                <div>
                    {
                        data.endDate ?
                            <span className={s.text}>{data.endDate}</span>:
                            <span className={s.line}/>
                    }
                </div>
            </td>
            <td>
                <div>
                    <p className={s.text}>{data.reward}</p>
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

export default StatusTableRow;
