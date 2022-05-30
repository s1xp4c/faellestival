import React from 'react'

function HeroTitle(props) {
    return (
        <h1 className={props.className}>{props.content}</h1>
    )
}

export default HeroTitle
