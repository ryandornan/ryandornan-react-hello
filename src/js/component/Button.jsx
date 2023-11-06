import React from "react";

const Button = ({link, text}) => {

return (<a class="btn btn-primary" href={link} target="_blank" role="button">{text}</a>);


};


export default Button;