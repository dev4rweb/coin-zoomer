import React from 'react';
import {Button, Card} from "react-bootstrap";

const BannerCard = ({banner, deleteHandler, editHandler}) => {
    return (
        <Card
            style={{ width: '12rem' }}
            className="m-3"
        >
            <Card.Img variant="top" src={banner.img_path} />
            <Card.Body>
                <Card.Title
                    className="text-black"
                >
                    {banner.title}
                </Card.Title>
                <Card.Text
                    className="text-black"
                >
                    Show on website - {banner.is_show ? 'true' : 'false'}
                </Card.Text>
                <Card.Link
                    href={banner.link}
                >
                    { banner.link }
                </Card.Link>
                <div className="d-flex mt-3 justify-content-between">
                    <Button
                        variant="primary"
                        onClick={event => editHandler(banner)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outline-danger"
                        onClick={event => deleteHandler(banner.id)}
                    >
                        Delete
                    </Button>
                </div>

            </Card.Body>
        </Card>
    );
};

export default BannerCard;
