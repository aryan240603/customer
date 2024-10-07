import React from "react";
import Data from "../views/data.json";
import axios from "axios";
import Button from '@mui/material/Button';


function Popular()
{
    const jsonData = Data.map((item, index) => (
        <div key={index}>
            <h2>{item.dish_name}</h2>
            <p>{item.dish_description}</p>
        </div>
    ))

    console.log(jsonData);


    return(
        <div className="popular">
            <title></title>
            <h1 className = "title">Home</h1>
            <div className="popular-grid">
            <div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{jsonData[1]}</h5>
    <p className="card-text">fuck yu</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
  <img src="https://th.bing.com/th/id/OIP.2qi-dAhJXlUNOxayN_-qEQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Fuk U</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<button className="exploreButton" 
        variant = "contained" 
        type = "submit"
        onClick={() => {
            alert("Button clicked")
          }}>
            Explore Menu
</button>


        </div>
    );

}

export default Popular;