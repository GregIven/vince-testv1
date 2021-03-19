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
    width: 100%;
    height: 400px;
    box-sizing: border-box;
`

const ManuListHeader = styled.h1`

`

const ManuListRow = styled.div`
    display: flex;
    flex-direct: row;
    justify-content: space-between;
`

const ManufactureList = () => {
    return (
        <ManuListContainer>
            <ManuListHeader>Specialized in working with the following manufacturers</ManuListHeader>
            <ManuListRow>
                <img src={beechcraft} alt='' width="25%" />
                <img src={airbus} width="25%" />
                <img src={gulfstream} width="25%" />
                <img src={robinson} width="25%" />
            </ManuListRow>
            <ManuListRow>
                <img src={piper} width="25%" />
                <img src={hawker} width="25%" />
                <img src={cessna} width="25%" />
                <img src={bombadier} width="25%" />
            </ManuListRow>
            <ManuListRow>
                <img />
                <img />
                <img />
                <img />
            </ManuListRow>
            <ManuListRow>
                <img />
                <img />
                <img />
                <img />
            </ManuListRow>
        </ManuListContainer>
    )
}

export default ManufactureList
