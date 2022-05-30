import React from 'react'
import HeaderBg from "../HeaderBg";
import Logo from "../UI/Logo";
import HeroTitle from "../HeroTitle";



function Header(props) {
    return (
        <>
            <HeaderBg className="heroBg" />
            <div className={props.className}>
            <Logo />
            <HeroTitle content="Fællestival" className="heroTitle" />
            </div>
        </>
    )
}

export default Header
