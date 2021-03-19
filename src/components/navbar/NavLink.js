import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkItem = styled.li`
    margin: 0 10px;
    padding: 0;
    font-weight: 200;
    text-transform: uppercase;
    letter-spaceing: 3.5px;

    .nav-link {
        cursor: pointer;
        color: #333;
        text-decoration: none;
        :hover {
            opacity: 0.2;
        }
    }
`;

const NavLink = ({ name }) => {
    return (
        <LinkItem>
            <Link className="nav-link">{name}</Link>
        </LinkItem>
    )
}

export default NavLink
