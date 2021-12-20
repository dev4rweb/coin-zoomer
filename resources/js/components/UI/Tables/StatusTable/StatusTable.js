import React from 'react';
import {Table} from "react-bootstrap";
import s from '../../../../../sass/components/UI/Tables/SimpleTable/SimpleTable.module.scss'
import coinLogo from "../../../../../assets/img/coin-logo.png";
import SimpleTableItem from "../SimpleTable/SimpleTableItem";
import StatusTableRow from "./StatusTableRow";

const StatusTable = () => {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem culpa deserunt eaque excepturi expedita labore minima nemo nihil qui quis quisquam reprehenderit sint. Animi assumenda consequuntur culpa dolores ea, optio quod reprehenderit? Ab aperiam cumque ipsa labore laudantium necessitatibus nisi unde! Facere in nobis officia pariatur ratione repellat soluta?'
    const tableData = [
        {
            id: 1,
            name: lorem,
            logo: coinLogo,
            isActive: true,
            endDate: '15.07.2022',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
        {
            id: 2,
            name: lorem,
            logo: coinLogo,
            isActive: false,
            endDate: '',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
        {
            id: 3,
            name: lorem,
            logo: coinLogo,
            isActive: true,
            endDate: '15.07.2022',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
        {
            id: 4,
            name: lorem,
            logo: coinLogo,
            isActive: false,
            endDate: '',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
        {
            id: 5,
            name: lorem,
            logo: coinLogo,
            isActive: true,
            endDate: '15.07.2022',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
        {
            id: 6,
            name: lorem,
            logo: coinLogo,
            isActive: false,
            endDate: '',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
        {
            id: 7,
            name: lorem,
            logo: coinLogo,
            isActive: true,
            endDate: '15.07.2022',
            reward: '1$Hi daily claim and 0.5$Hi referral bonus',
            upVotes: 87946
        },
    ]
    return (
        <Table className={s.simpleTable} striped hover responsive variant="dark">
            <thead>
            <tr>
                <th className={s.coinsStatus}>Coins</th>
                <th>Status</th>
                <th>End Date</th>
                <th className={s.reward}>Reward</th>
                <th>Upvotes</th>
            </tr>
            </thead>
            <tbody>
            {
                tableData.map((item, index) =>
                    <StatusTableRow key={item.id} data={item} index={index}/>
                )
            }
            </tbody>
        </Table>
    );
};

export default StatusTable;
