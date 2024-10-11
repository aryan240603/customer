import React, { useState } from 'react';
import { Tabs, Tab, Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import MenuItemCard from "./menuitemcard";
import Data from "../views/data.json"


function ResponsiveMenu(props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const cuisines = [
    { name: 'Mexican', content: 'Mexican cuisine is known for its vibrant flavors and colorful dishes.' },
    { name: 'Italian', content: 'Italian cuisine is loved for its pasta, pizza, and delightful desserts.' },
    { name: 'Thai', content: 'Thai cuisine features a balance of sweet, sour, salty, and spicy flavors.' },
  ];

  const themeColors = {
    background: '#000814',
    tab: '#FFC300',
    activeTab: '#FFD60A',
    text: '#ffc300',
    content: '#ffd60a',
  };
        

  return (
    <div className="menuContainer">
    <div className="container my-5" style={{ backgroundColor: themeColors.background, padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: themeColors.text, textAlign: 'center' }}>Cuisines Menu</h2>
      <Box sx={{ width: '100%', bgcolor: themeColors.background }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: themeColors.activeTab } }}
        >
          {cuisines.map((cuisine, index) => (
            <Tab
              key={index}
              label={cuisine.name}
              sx={{
                color: selectedTab === index ? themeColors.activeTab : themeColors.tab,
                fontWeight: selectedTab === index ? 'bold' : 'normal',
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ marginTop: '20px', color: themeColors.content }}>
        <h3>{cuisines[selectedTab].name} Cuisine</h3>
        <p>{cuisines[selectedTab].content}</p>
      </Box>

      {[
            MenuItemCard[1],
             MenuItemCard[2], 
            MenuItemCard[3], 
            MenuItemCard[4], 
            MenuItemCard[5], 
            MenuItemCard[6], 
            MenuItemCard[7], 
            MenuItemCard[8], 
            MenuItemCard[9], ]}
          
</div>

    </div>

        
  );
};

export default ResponsiveMenu;