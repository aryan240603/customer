import React from "react";
import { Tabs, Tab, Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Data from "../views/data.json";

// const MenuItemCard = Data.map((item, index) => (

//     <Card className="menu-item-card">
//     <CardMedia
//      key = "index"
//       component="img"
//       height="200"
//       image={item.img_url}
//       alt={item.dish_name}
//       className="menu-item-image"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div" className="dish-name">
//         {item.dish_name}
//       </Typography>
//       <Typography variant="body2" color="textSecondary" className="dish-description">
//         {item.dish_description}
//       </Typography>
//       <div className="dish-action">
//         <Button variant="contained" className="order-button">
//           Order Now
//         </Button>
//       </div>
//     </CardContent>
//   </Card>
//   ));


const MenuItemCard = Data.map((item, index) => 
    <div className = "menu-container">

    <Card className="menu-item-card">
      <CardMedia
        component="img"
        height="200"
        image={item.img_url}
        alt={item.dish_name}
        className="menu-item-image"
        
      />
      <CardContent className = "card-content">
        <Typography gutterBottom variant="h5" component="div" className="dish-name">
          {item.dish_name}
        </Typography>
        <Typography variant="body2" color="inherit" className="dish-description">
          {item.dish_description}
        </Typography>
        <div className="dish-action">
          <Button variant="contained" className="order-button">
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );




  export default MenuItemCard;