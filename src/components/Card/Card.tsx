import React from "react";
import "./Card.css";
import { Product } from "../../App";

//...snip
//CardProps è un tipo che accetta come chiave product di tipo Product
// n: Number è un esempio di un altro tipo che accetta CardProps

export type CardProps = { product: Product; n?: number };

export const Card = (props: CardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.product.model}</h5>
                <img className="image" src={props.product.image} alt="" />
                <p className="card-text-description">{props.product.description}</p>
                <p className="card-text-price">€ {props.product.price}</p>
            </div>
        </div>
    )
}

