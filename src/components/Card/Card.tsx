import React, {useEffect, useState}from 'react';
import "./Card.css";
import { Product } from "../../App";
import { Button } from '../Button/Button';

//...snip
//CardProps è un tipo che accetta come chiave product di tipo Product
// n: Number è un esempio di un altro tipo che accetta CardProps

export type CardProps = { product: Product; n?: number };

export const Card = (props: CardProps) => {
    
    return (
        <body>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.product.model}</h5>
                    <img className="image" src={props.product.image} alt="" />
                    <p className="card-text-description">{props.product.description}</p>
                    <p className="card-text-price">€ {props.product.price}</p>
                    <div className="container-button">
                        <Button product={props.product}/>
                    </div>
                </div>
            </div>
        </body>
    )
}

