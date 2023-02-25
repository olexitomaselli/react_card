import React, {useState} from 'react'
import './Button.css';
import { Product } from '../../App';

export type CardProps = { product: Product; n?: number };

export const Button = (props: CardProps) => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  function incrementCount() {
    setCount(count + 1);
    setPrice(price + props.product.price);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
      setPrice(price - props.product.price);
    }
  }


  return (
    <body>
      <div className="conteiner-button">
        <button type="button" className="btn btn-success" onClick={incrementCount}>+</button>
        <p className="number-amount">{count}</p>
        <button type="button" className="btn btn-danger" onClick={decrementCount}>-</button>
      </div>
      <div className="price-text">
        <p className="card-text-price">€{price}</p>
      </div>
    </body>


  )
}
