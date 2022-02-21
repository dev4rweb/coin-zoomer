import React from 'react';
import {Pagination} from "react-bootstrap";
import '../../../../sass/components/UI/Pagination/Paginate.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchCoinByQuery} from "../../../asyncAction/coinInner";

const Paginate = () => {
    const coins = useSelector(state => state.coin.coins)
    const dispatch = useDispatch()
    const currentPage = coins.current_page

    const handleClick = link => {
        console.log('handleClick', link)
        let showPage = currentPage
        if (link.url) {
            if (link.label.includes('Previous') ) {
                console.log('prev');
                showPage--
            } else if (link.label.includes('Next')) {
                console.log('next');
                showPage++
            } else if (!link.active) {
                console.log('navigate');
                showPage = link.label
            }
            dispatch(fetchCoinByQuery(null, showPage))
        }
    };

    return (
        <div className="d-flex justify-content-center">
            {
                coins &&
                <Pagination>
                    {
                        coins.links &&
                        coins.links.length &&
                        coins.links.map((link, index) => {
                                if (link.url) {
                                    return (
                                        <Pagination.Item
                                            key={index}
                                            active={link.active}
                                            onClick={e => handleClick(link)}
                                        >
                                            <span dangerouslySetInnerHTML={{__html: link.label}}/>
                                        </Pagination.Item>
                                    );
                                }
                            }
                        )
                    }
                </Pagination>
            }
        </div>
    );
};

export default Paginate;
