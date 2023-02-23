import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';

export type Product = {
  model: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [  
  {
    model: "Iphone", 
    description: "Top smartphone", 
    price: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOoLh_HeAozlsEHKfUaMlicA6iNG71_NxzQ&usqp=CAU"
  },
  {
    model: "Samsung",
    description: "Nice smartphone but iphpone is more good", 
    price: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4EbsYIVNW4JAXI2VH7ckxjDqHGAe1_3WjuaICHidCmay-hCJNTvO0Unt6KLbcVpNXiU&usqp=CAU"
  },
  {
    model: "huawei", 
    description: "nice phone but not good",
    price: 0.5,
    image: "https://d1eh9yux7w8iql.cloudfront.net/product_images/1585915495.356295.jpg"
  }
];

function App() {
  return (
    <body>
      <div>
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </body>
  );
}

export default App;
