import React from 'react';
import styled from 'styled-components';

import ImageBG from '../../images/Vince-background.png';

const MainContainer = styled.div`
    z-index: -10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 150vh;
    min-width: 95vw;
    margin-bottom: 15px;
    margin-top: -80px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0,0,0,0.5);
    /* background-blend-mode: darken; */
    background-image: url(${ImageBG});

    position: relative;

    @media (min-width: 700px) {
        /* width: 100vw; */
        .landPageText {
            height: 25vh;
            width: 25vw;
        }
    }
`

const LandPageText = styled.h1`
    /* text-align: right; */
    position: absolute;
    height: 150px;
    width: 350px;
    margin: 5.5px 5.5px 5.5px 5.5px;
    bottom: 0px;
    right: 70px;

    font-family: Monaco;
    font-size: 35px;
    font-stretch: expanded;
    font-weight: lighter;
    font-style: italic;
    color: #eee;
    margin: 15px;
    font-weight: 100;


    @media (max-width: 850px) {
        font-size: 55px;
    }

    @media (max-width: 650px) {
        font-size: 30px;
    }
`

//   .span {
//         position: absolute;
//         bottom: 8px;
//         right: 16px;
//     }

const Main = () => {
    return (
        <MainContainer>
            <LandPageText>
                Avoid import taxes
                when you buy directly
                from the United States!
            </LandPageText>
        </MainContainer>
    )
}

export default Main
