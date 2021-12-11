import React, {useState} from 'react';
import s from '../../../../sass/components/UI/CustomAlert/CustomAlert.module.scss'
import {Alert, Button} from "react-bootstrap";
import hotImg from '../../../../assets/img/hot-notification.png'

const CustomAlert = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert
                variant="primary"
                onClose={() => setShow(false)}
                className={s.customAlert}
                dismissible
            >
                <div className={s.alertWrapper}>
                    <div className={s.logoSide}>
                        <img className={s.hotImg} src={hotImg} alt="logo"/>
                        <Alert.Heading>Hot notification: <br/> <strong>Administration</strong></Alert.Heading>
                    </div>
                    <p className={s.contentSide}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nulla quibusdam vel. Hic, placeat.
                    </p>
                </div>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export default CustomAlert;
