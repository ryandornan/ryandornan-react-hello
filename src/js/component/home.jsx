import React from "react";


import NavBar from "./NavBar";
import Hero from "./Hero";
import CardContainer from "./Layouts/CardContainer";
import Footer from "./Footer";
import ImageAndText from "./Layouts/ImageAndText";
import TextAndImage from "./Layouts/TextAndImage";


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<CardContainer />
			<ImageAndText />
			<TextAndImage />
			<Footer />
		</div>
	);
};

export default Home;
