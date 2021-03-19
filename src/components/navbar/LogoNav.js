import React from 'react';
import styled from 'styled-components';

import VinceLogo from '../../images/Vince Logo SS.png'

const LogoLink = styled.a`
    cursor: pointer;
    justify-content: center;
    align-items: center;

    img {
        height: 80px;
    }
`

const LogoNav = () => {
    return (
        <LogoLink>
            <img src={VinceLogo} alt="" />
        </LogoLink>
    )
}

export default LogoNav
