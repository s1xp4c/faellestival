import React from 'react';

function Banner(props) {
    return (
    <div className={props.conClassName} id={props.id}>
        {/* <img className="bannerImage" src={null} alt={null} /> */}
        <p className={props.className}>
            {props.children}
        </p>
    </div>
    )
}

export default Banner