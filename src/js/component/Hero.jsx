import React from "react";
import Button from "./Button";

const Hero = () => {

    return (
        <div className=" container bg bg-light p-4">

            <h1 className="display-1">Welcome To Leo's World</h1>
            
            <div className="hero-paragraph col-8">

                <p className="py-3">
                Leo Muzi, a seasoned software engineer with a passion for teaching, embarked on a new chapter as a bootcamp 
                instructor. With a wealth of industry experience and a knack for demystifying complex concepts, Leo quickly 
                became the go-to mentor for aspiring developers.
                </p>

            </div>
			
            <Button link = {"https://chat.openai.com/share/9a9b659e-25a4-42e4-968a-f7e7fda21936"} text={"Click For Alternative Ending"}/>
		

        </div>
    );
};

export default Hero;