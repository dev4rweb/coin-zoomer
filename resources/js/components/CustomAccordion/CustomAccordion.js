import React from 'react';
import s from '../../../sass/components/CustomAccordion/CustomAccordion.module.scss'
import {Accordion} from "react-bootstrap";

const CustomAccordion = ({data}) => {
    return (
        <Accordion defaultActiveKey="1">
            {
                data.map((item, index) =>
                    <Accordion.Item key={index} eventKey={`${index}`}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                            <div dangerouslySetInnerHTML={{__html: item.content}}>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            }
        </Accordion>
    );
};

export default CustomAccordion;
