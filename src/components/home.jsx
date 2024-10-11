import React, { useState } from "react";
import Data from "../views/data.json";
import axios from "axios";
import Button from "@mui/material/Button";
import { Alert, Tab } from "@mui/material";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { yellow } from "@mui/material/colors";
import MenuItemCard from "./menuitemcard";
import ShoppingCartToggle from "./shoppingcarttoggle";
import * as motion from "framer-motion/client";



function AddToCart() {
  alert("Added to cart successfully");
}

function HandleToggle(props) {
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  setToggle(true);
  setCart([...cart, props.item]);
}

function ShoppingCartHover(props) {
  const [opacity, SetOpacity] = useState("0");
  const [hover, setHover] = useState(false);
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const jsonData = Data.map((item, index) => (
    <div className="card text-center  mi-1 " key={index}>
      <div className="col">
        <img src={item.img_url} className="card-img-top" alt="..." />
        <div className="card-body m-2">
          <h5 className="card-title">{item.dish_name}</h5>
          <p className="card-text flex">{item.dish_description}</p>
          <button className="btn btn-primary" onClick={AddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));


  return (
    <div className="homePage">
      <title></title>
      <div className="homePage1">
        
      <h1 
      className="heroHeading"
      >Welcome to the Soulful Spoons!</h1>
      <div className="bgImage1Div">
        <img src="https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_640.jpg" alt="Lemon's Image" className = "bgImage1" />

      </div>
      </div>

      <div className="headingDiv aboutSection">
        
        <h1 className = "heading">About Us</h1>
       
</div>

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2016/11/08/06/45/couple-1807617_640.jpg"  class="img-fluid rounded-start ratio ratio-1x1" alt="..." /> 
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ambiance and Atmosphere</h5>
        <p class="card-text">
        We understand that a great meal goes beyond just the food—it’s about the experience as a whole. That’s why we’ve designed our space to create a warm, welcoming atmosphere where you can relax and enjoy your time with us. From the soft lighting to the carefully chosen decor, we aim to make every visit feel special. Our restaurant's ambiance is a blend of modern elegance and comfort, thoughtfully designed to complement your dining experience. Whether you’re here for an intimate dinner, a celebration with friends, or a business meeting, the environment we’ve created is meant to make you feel at ease. We believe that the right atmosphere can elevate a great meal into an unforgettable experience, and we’ve worked hard to make every detail count.


          </p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body text-end">
        <h5 class="card-title">Exceptional Food Quality</h5>
        <p class="card-text">
        At our restaurant, we believe that every dish tells a story. We are committed to delivering the highest quality food to our valued customers. Our chefs are passionate about using only the freshest, premium ingredients sourced from trusted local suppliers and specialty producers. Each dish is carefully crafted to blend flavors that surprise and delight, while respecting the authenticity of traditional cooking techniques. Whether you're here for a signature dish or trying something new from our seasonal menu, we strive for excellence in taste, presentation, and consistency. Every plate that leaves our kitchen reflects the love and care we put into our food. We want you to savor every bite, knowing that we’ve spared no effort to bring the best culinary experience to your table.           </p>
      </div>
      
    </div>
    <div class="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2016/11/19/11/38/avocado-1838785_640.jpg" class="img-fluid rounded-end ratio ratio-1x1" alt="..." /> 
    </div>
  </div>
</div>

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_640.jpg" class="img-fluid rounded-start ratio ratio-1x1" alt="..." /> 
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Outstanding Service</h5>
        <p class="card-text">
        At our restaurant, we believe that exceptional service is just as important as great food. Our team is dedicated to providing you with a dining experience that goes beyond your expectations. From the moment you walk through our doors, you’ll be greeted with a warm smile and attentive care. Our staff is knowledgeable about our menu and can offer personalized recommendations based on your preferences. We pride ourselves on being detail-oriented, ensuring that your meal is served promptly and that your needs are always anticipated. Whether it’s celebrating a special occasion or just a casual meal, we want every visit to feel like a unique experience. We’re here to ensure that your time with us is enjoyable, relaxed, and memorable, so you’ll always look forward to coming back.

</p>
      </div>
    </div>
  </div>
</div>

      {/* different options */}



      {/* Explore Menu Button */}
      <a
        href="/Menu"
        className="exploreButton"
        variant="contained"
        role="button"
        color="#fbc02d"
      >
        Explore Menu <DinnerDiningIcon sx={{ color: yellow[700] }} />
      </a>

      {/* Explore Menu Button END*/}
    </div>
  );
}

export default HomePage;
