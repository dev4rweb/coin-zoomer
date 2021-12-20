import React from 'react';
import s from '../../../../sass/components/UI/StatusItem/StatusItem.module.scss'

const StatusItem = ({isActive}) => {
    if (isActive)
        return (
            <div className={s.statusActive}>
                <span>Active</span>
            </div>
        );
    else
        return (
            <div className={s.statusInactive}>
                <span>Inactive</span>
            </div>
        );
};

export default StatusItem;
