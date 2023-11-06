import React from "react";
import Button from "./Button";

const Hero = () => {

    return (
        <div className=" container bg bg-light p-5">

            <h1 className="display-1">Welcome To React JS</h1>
            
            <div className="hero-paragraph col-6">
                <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis, explicabo. Corrupti qui doloribus in laborum nobis? Eaque natus quibusdam est delectus tenetur voluptate quaerat! 
                Qui libero rerum aspernatur tenetur! Debitis.</p>

            </div>
			
            <Button text={"Click Me"}/>
		

        </div>
    );
};

export default Hero;