import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo-DH.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Actions</div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/movies">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Movies</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/genres">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Genres</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/lastmovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>LastMovies</span></Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            
        </React.Fragment>
    )
}
export default SideBar;