import React from "react";

export default function Pricing(){
    return (
        <div className="pricing">
        <div className="price-card">
        <h1 className="mnth">Monthly</h1>
        <h3><s>100</s></h3>
        <h2>$45/mo</h2>
        <p>Enjoy access to all the chatrooms of this group </p>
        <button className="btn">Buy Now</button>
        </div>
         <div className="price-card">
        <h1 className="mnth">Annual</h1>
        <h3><s>540</s></h3>
        <h2>430/year</h2>
        <p>Enjoy access to all the chatrooms of this group </p>
                <button className="btn">Buy Now</button>
        </div>
         <div className="price-card">
        <h1 className="mnth">Lifetime</h1>
       <h3><s>100</s></h3>
        <h2>$1000</h2>
        <p>Enjoy access to all the chatrooms of this group </p>
                <button className="btn">Buy Now</button>
        </div>
        </div>
        
    )
}
