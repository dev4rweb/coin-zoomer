import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../../../../sass/components/UI/Pagination/Paginate.scss'
import {Pagination} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import {getCoinsByQueryObj} from "../../../utils/navigate";

const PaginateMod = ({links, currentPage}) => {
    const dispatch = useDispatch()
    const sortObj = useSelector(state => state.coin.sortObj)
    console.log('PaginateMod', links)

    const handleClick = link => {
        console.log('handleClick', link)
        let showPage = currentPage
        if (!link.active) {
            if (link.label.includes('Previous') ) {
                console.log('prev');
                showPage--
            } else if (link.label.includes('Next')) {
                console.log('next');
                showPage++
            } else {
                console.log('navigate');
                showPage = link.label
            }
            sortObj.page = showPage
            console.log('handleClick', sortObj)
            getCoinsByQueryObj(sortObj)
        }
    };

    return (
        <div>
            {
                links.length &&
                <Pagination>
                    {
                        links.map((link, index) => {
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

export default PaginateMod;
