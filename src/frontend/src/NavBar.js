import React from 'react';
import { Link } from '@reach/router';
import useAuth from './auth/useAuth';

const NavBar = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <span className="navbar-brand">SemApps Playground</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Liste des projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources/create" className="nav-link">
                Ajouter un projet
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/profile" className="float-right ">
          <button className="btn btn-outline-dark" type="submit">
            <i className="fa fa-user-o"></i>&nbsp;
            {user ? user.name : 'Se connecter'}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
