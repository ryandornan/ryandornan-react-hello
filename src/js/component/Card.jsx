import React from "react";
import Button from "./Button";

const Card = ({imageUrl, title, description, buttonlink, buttonText}) => {
    
    return (                    
        <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '19rem'}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Button link = {buttonlink} text={buttonText}/>
          </div>


        </div>
      );
};

export default Card;

