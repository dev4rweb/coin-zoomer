import React, {useEffect, useState} from 'react';
import s from '../../../../sass/components/UI/CustomAlert/CustomAlert.module.scss'
import {Alert, Button} from "react-bootstrap";
import hotImg from '../../../../assets/img/hot-notification.png'
import {useSelector} from "react-redux";

const CustomAlert = () => {
    const alerts = useSelector(state => state.hotNotifications.hotNotifications)
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (alerts && alerts.length > 0) setShow(alerts[0].is_show)
        console.log('CustomAlert', alerts)
    }, [alerts]);

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
                        <Alert.Heading>
                            {alerts[0].title} <br/>
                            <strong>{alerts[0].label}</strong>
                        </Alert.Heading>
                    </div>
                    <p className={s.contentSide}>
                        {alerts[0].text}
                    </p>
                </div>
            </Alert>
        );
    }
    // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    return <div/>;
};

export default CustomAlert;
