import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Navbar } from './components/NavBar/Navbar';

export type Product = {
  model: string;
  description: string;
  price: number;
  image: string;
  amount: number;
};

const products: Product[] = [  
  {
    model: "Iphone", 
    description: "Questo è l'ultimno modello", 
    price: 1400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOoLh_HeAozlsEHKfUaMlicA6iNG71_NxzQ&usqp=CAU",
    amount: 0
  },
  {
    model: "Samsung",
    description: "Samsung mi fa schifo", 
    price: 1300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4EbsYIVNW4JAXI2VH7ckxjDqHGAe1_3WjuaICHidCmay-hCJNTvO0Unt6KLbcVpNXiU&usqp=CAU",
    amount: 0,
  },
  {
    model: "huawei", 
    description: "Peggio di peggio ",
    price: 800,
    image: "https://d1eh9yux7w8iql.cloudfront.net/product_images/1585915495.356295.jpg",
    amount: 0
  }
];

function App() {
  return (
    <body>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className='title'>
        <h1>SHOP YOUR FAVORITE PHONE!!</h1>
      </div>
      <div className='container-card'>
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </body>
  );
}

export default App;
