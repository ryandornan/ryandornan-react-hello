import React from "react";
import Card from "../Card";

const CardContainer = () => {

    return (

        <div className="container py-3 d-flex justify-content-between my-5">
      
            <Card
            imageUrl="https://picsum.photos/200/150?random=1"
            title="HTML & CSS"
            description="HTML (HyperText Markup Language) is the standard markup language used to create web pages." 
            buttonlink="https://www.codecademy.com/catalog/language/html-css"
            buttonText="Learn HTML & CSS"
        />
            <Card
            imageUrl="https://picsum.photos/200/150?random=2"
            title="Javascript"
            description="JavaScript is a versatile and widely-used programming language that adds interactivity to web pages"
            buttonlink="https://www.codecademy.com/catalog/language/javascript"
            buttonText="Learn Javascript"
        />
            <Card
            imageUrl="https://picsum.photos/200/150?random=3"
            title="Python"
            description="Python is a versatile and high-level programming language known for its ease of use and simple readability."
            buttonlink="https://www.codecademy.com/catalog/language/python"
            buttonText="Learn Python"
        />

            <Card
            imageUrl="https://picsum.photos/200/150?random=4"
            title="React JS"
            description="ReactJS is a library used for building user interfaces, particularly for single-page applications."
            buttonlink="https://www.codecademy.com/learn/react-101"
            buttonText="Learn React JS"
        />

        </div>
    )
        
}

export default CardContainer