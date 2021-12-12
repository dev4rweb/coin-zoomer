import React from 'react';
import s from '../../../../sass/components/UI/SectionSeparator/SectionSeparator.module.scss'
import sectionImg from '../../../../assets/img/section-devider.png'

const SectionSeparator = ({sectionName}) => {
    return (
        <div className={s.sectionSeparator}>
            <img src={sectionImg} alt="star"/>
            <p>{sectionName}</p>
        </div>
    );
};

export default SectionSeparator;
