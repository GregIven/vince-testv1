import React from "react";
import styled from "styled-components";

import LogoNav from "./LogoNav";
import NavLink from "./NavLink";

const Navigation = styled.nav`
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    height: 100px;

    box-shadow: 0 5px 20px -10px #000;

    .nav-helper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 40px;
        padding: 10px 15px 10px 50px;
    }

    .title {
        position: absolute;

        font-size: 2.5em;
        font-weight: 950;
        font-style: italic;
        font-stretch: expanded;
        color: #000066;

        margin-left: 83px;
        margin-bottom: 40px;
    }

    .subTitle {
        position: absolute;
        font-size: 20px;
        margin-left: 83px;
        margin-top: 30px;
    }

    ul {
        padding: 0;
        list-style: none;
        display: flex;
        margin: 0;
    }
`;

const Navbar = () => {
    return (
        <Navigation>
            <div className="nav-helper">
                <LogoNav />
                <h1 className="title">Alcance</h1>
                <p1 className="subTitle">Parts for your aircraft</p1>
                <ul>
                    <NavLink name="Start" />
                    <NavLink name="About Us" />
                    <NavLink name="Importing Parts" />
                    <NavLink name="Contact" />
                </ul>
            </div>
            
        </Navigation>
        
    )
}

export default Navbar
