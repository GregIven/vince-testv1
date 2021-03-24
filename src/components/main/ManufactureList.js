import React from 'react';
import styled from 'styled-components';

import beechcraft from '../../images/Beechcraft/Beechcraft-01.svg';
import airbus from '../../images/Airbus/airbus-helicopters-logo-vector.svg';
import gulfstream from '../../images/Gulfstream/Gulfstream-Aerospace-01.svg';
import robinson from '../../images/Robinson/robinson-helicopter-company-vector-logo.svg';
import piper from '../../images/Piper/Piper-Logo-1.svg';
import hawker from '../../images/Hawker/Hawker-logo-1.svg';
import cessna from '../../images/Cessna/cessna-logo.svg';
import bombadier from '../../images/Bombadier/bombardier-vector-logo.svg';

const ManuListContainer = styled.div`
    width: 95%;
    height: auto;
    min-height: 100%;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 5px;
    
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center; */


`

const ManuListHeader = styled.p`
    align-self: center;
    font-size: x-large;
    margin: 5px;
`

const ManuListRow = styled.div`
    display: flex;
    flex-direct: row;
    justify-content: space-between;
    margin-top: -25px;
    margin-bottom: -25px;

`

const ManufactureList = () => {
    return (
        <ManuListContainer>
            <ManuListHeader>Specialized in working with the following manufacturers</ManuListHeader>
            <ManuListRow>
                <img src={beechcraft} alt='' width="25%" />
                <img src={airbus} alt='' width="25%" />
                <img src={gulfstream} alt='' width="25%" />
                <img src={robinson} alt='' width="25%" />
            </ManuListRow>
            <ManuListRow>
                <img src={piper} alt='' width="25%" />
                <img src={hawker} alt=''  width="25%" />
                <img src={cessna} alt=''  width="25%" />
                <img src={bombadier} alt='' width="25%" />
            </ManuListRow>
            <ManuListRow>
                <img alt=''/>
                <img alt=''/>
                <img alt=''/>
                <img alt=''/>
            </ManuListRow>
            <ManuListRow>
                <img alt=''/>
                <img alt=''/>
                <img alt=''/>
                <img alt=''/>
            </ManuListRow>
        </ManuListContainer>
    )
}

export default ManufactureList
