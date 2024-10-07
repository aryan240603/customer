import React, {useState} from "react";
import '../App.css';
import Logo from '../views/logo.png';
import { Outlet, Link } from "react-router-dom";


// Material UI Imports
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Navbar() {
  const [ active, setActive] = useState(false);
  const [ cartCount, setCartCount] = useState(0);

  function activeObject(elementNumber)
  {

  }

  return (
    <>
      <div className="bg-slate-500">
      <nav className="navbar navbar-expand-lg navbar-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" className="logo" />
      </a>


      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick = {activeObject(0)} href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" onClick = {activeObject(1)} href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" onClick = {activeObject(2)} href="#">Special Offers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" onClick = {activeObject(3)} href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="d-flex justify-content-end">
        <IconButton aria-label = "search">
        <SearchIcon />

        </IconButton>

          {/* Material UI */}
          <IconButton aria-label="cart">
           <StyledBadge badgeContent={cartCount} color="secondary">
           <ShoppingCartIcon />
           </StyledBadge>
          </IconButton>
              
      </div>
    </div>
  </nav>
      </div>
    </>
  );
}

