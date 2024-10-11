import React, { useState } from "react";
import "../App.css";
import Logo from "../views/logo.png";
import { Outlet, Link } from "react-router-dom";

// Material UI Imports
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartToggle from "./shoppingcarttoggle";
import { Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  function activeObject() {}

  return (
    <>
      <div className="bg-slate-500">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" className="logo" />
            </a>

            {/* <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarTogglerDemo01"
            > */}
            <div
              class="offcanvas offcanvas-end "
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <ul className="navbar-nav list">
                <li className="nav-item items">
                  <a className="nav-link active" aria-current="page" href="/">
                   
                    Home
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link active" href="/Menu">
                    
                    Menu
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link active" href="Special Offers">
                    
                    Special Offers
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link active" href="/Contact">
                    
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* ****************Icons********** */}

            <div className="d-flex justify-content-end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
              <div class="dropdown dropstart">
                <a
                  class=""
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartCount} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>

                  <IconButton>
                     <PersonIcon />
                  </IconButton>
                 

                  
                  <div className="dropdown-menu"></div>
                </a>

               
              </div>
              {/* <Button onClick = {toggleNav} className = "btn">Aryan</Button> */}
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
