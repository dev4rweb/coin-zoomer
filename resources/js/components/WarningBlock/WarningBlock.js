import React from 'react';

const WarningBlock = ({text, is_important}) => {
    const color = is_important ? 'red' : 'orange'

    return (
        <div
            className="d-flex justify-content-center p-3"
            style={{
                color: color,
                border: `1px solid ${color}`,
                borderRadius: '8px',
                marginBottom: '100px'
            }}
        >
            <h2
                style={{color: color}}
            >
                {text}
            </h2>
        </div>
    );
};

export default WarningBlock;
