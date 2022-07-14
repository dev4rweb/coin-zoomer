import React from 'react';
import s from '../../../sass/components/TariffCard/TariffCard.module.scss'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";

const TariffCard = ({data}) => {
    return (
        <Card className={s.tariffCard}>
            <Card.Body>
                <h2 className={s.title}>
                    {data.title}
                </h2>
                <p className={s.content}>
                    {data.content}
                </p>
            </Card.Body>
            <ListGroup className={`list-group-flush ${s.tariffList}`}>
                {
                    data.planList.map(item =>
                        <ListGroupItem
                            key={item.id}
                            className={s.planItem}
                        >
                            <span className={s.planName}>{item.name}</span>
                            <span className={s.planCost}>{item.cost}</span>
                        </ListGroupItem>
                    )
                }

            </ListGroup>
            <Card.Body className={s.footer}>
                <button
                    className="simple-btn-filled"
                    style={{width: '200px'}}
                    onClick={event => Inertia.visit('/contacts')}
                >
                    Contact us
                </button>
            </Card.Body>
        </Card>
    );
};

export default TariffCard;
