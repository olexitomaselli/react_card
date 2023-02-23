import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';

export type Product = {
  model: string;
  description: string;
  price: number;
};

const products: Product[] = [  
  {
    model: "Iphone", 
    description: "Top smartphone", 
    price: 20
  },
  {
    model: "Samsung",
    description: "Nice smartphone but iphpone is more good", 
    price: 10
  },
  {
    model: "huawei", 
    description: "nice phone but not good",
    price: 0.5,
  }
];

function App() {
  return (
    <div>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
}

export default App;
