import React from 'react'
import Main from '../components/main/Landing'
import ManufactureList from '../components/main/ManufactureList'
import Navbar from '../components/navbar/Navbar'

const PageIndex = () => {
    return (
        <>
            <Navbar />
            <Main />
            <ManufactureList />
        </>
    )
}

export default PageIndex
