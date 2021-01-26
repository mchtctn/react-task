import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';
import dashboardMenuIcon from '../assets/images/icons/dashboardMenuIcon.png';


const NavBar = () => {
    return ( 
        <nav id="sidebarMenu">
            <div>
                <img className="app-logo" src={Logo} width={50}/>
                <ul className="nav flex-column sidebar-nav">
                    <li className="nav-item nav-active">
                        <Link to="/">
                            <img src={dashboardMenuIcon} width={20}/>
                            <FaAngleRight className="active-icon"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

export default withRouter(NavBar);