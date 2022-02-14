import React, {useEffect, useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import {PATH_COIN_OPEN_PAGE, PATH_LOGIN_PAGE} from "../../../../utils/routesPath";
import s from "../../../../../sass/components/UI/Tables/SimpleTable/Item/SimpleTableItem.module.scss";
import GraphicIncrease from "../../GraphicIncrease/GraphicIncrease";
import {Button} from "react-bootstrap";
import OutlineBtn from "../../OutlineBtn/OutlineBtn";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentInnerCoinAction} from "../../../../reducers/coinReducer";
import {addVote} from "../../../../asyncAction/votes";
import {setErrorsAction} from "../../../../reducers/errorsReducer";
import {getTodayVotes} from "../../../../asyncAction/voteTimer";
import {fillUserVoteLimit} from "../../../../asyncAction/user";

const CoinsTableRowInner = ({data}) => {
    const dispatch = useDispatch()
    const curUser = useSelector(state => state.currentUser.user)
    const [count, setCount] = useState(data.votes.length)

    const handleClick = e => {
        console.log('StatusTableRow click', data)
        if (e.target.tagName !== 'BUTTON')
            Inertia.visit(`${PATH_COIN_OPEN_PAGE}/${data.id}`)
    };

    const voteHandler = e => {
        if (e.target.tagName === 'BUTTON') {
            if (curUser) {
                const todayVotes = getTodayVotes(curUser.votes)
                console.log('todayVotes', getTodayVotes(curUser.votes))
                console.log('todayVotes user', curUser)
                if (curUser.vote_limit > 0 && todayVotes.length < 5) {
                    dispatch(addVote({
                        user_id: curUser.id,
                        coin_id: data.id
                    }));
                    setCount(count + 1);
                    dispatch(setErrorsAction({message: `left vote limits ${curUser.vote_limit - 1} of 5`}))
                } else {

                    if (todayVotes.length > 4) {
                        dispatch(setErrorsAction({message: 'vote limit exceeded'}));
                    } else {
                        dispatch(fillUserVoteLimit(curUser.id, (5 - todayVotes.length)))
                        dispatch(setErrorsAction({message: `left vote limits ${5 - todayVotes.length} of 5`}))
                        setCount(count + 1)
                    }
                }
            } else {
                Inertia.visit(`${PATH_LOGIN_PAGE}`)
            }
        }
        // console.log('voteHandler ', e.currentTarget.tagName === 'BUTTON');
    };

    return (
        <tr className={s.tableItem} onClick={handleClick}>
            <td className={s.coinsCol}>
                <div className={s.coinsLong}>
                    <img src={data.logotype} alt="coin"/>
                    <p>{data.name}</p>
                </div>
            </td>
            <td className={s.symbol}>
                <div>
                    {data.symbol}
                </div>
            </td>
            <td>
                <div>12.993%</div>
            </td>
            <td className={s.symbol}>
                <div>
                    {`$ ${data.price}`}
                </div>
            </td>
            <td>
                <div><span>$</span> {data.market_cap}</div>
            </td>
            <td>
                <div>
                    {data.launch_date}
                </div>
            </td>
            <td>
                <div style={{paddingRight: '15px', position: 'relative'}}>
                    <Button
                        variant="info"
                        className="fill-btn"
                        onClick={voteHandler}
                        style={{maxHeight: '32px', marginRight: '-5px'}}
                    >
                        Vote
                    </Button>
                    <OutlineBtn>
                        <span>{count}</span>
                    </OutlineBtn>
                </div>
            </td>
        </tr>
    );
};

export default CoinsTableRowInner;
