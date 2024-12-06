import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/dashboard">Tableau de bord</Link></li>
          </ul>
        </nav>
      );
    }

    export default Navbar;
