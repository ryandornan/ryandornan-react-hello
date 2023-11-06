import React from "react";

const ImageAndText = () => {
    return (
        <div className="container-fluid bg bg-light my-5 py-5">
            <div className="container d-flex justify-content-between my-5 bg">


                    <div className="col-5 my-auto">
                    <img className="w-100 shadow p-3 m-3 bg-body rounded" src="https://picsum.photos/300/150?random=4" alt="" />
                    </div>

                    <div className="col-6 pr-3">
                        <h2>A Creator Of Fascinating Applications</h2>
                        <p class="mt-3">His classes were a symphony of knowledge and practical application. 
                        Leo's infectious enthusiasm for coding was contagious, inspiring students to dive deeper 
                        into the world of software development. With a patient and encouraging demeanor, he nurtured their skills, 
                        guiding them through challenges and celebrating their triumphs.
                        </p>

                        <p>Under Leo's tutelage, students not only hone their technical prowess but also gain 
                        a deeper appreciation for the art and science of coding. His legacy as a mentor and educator continues to 
                        ripple through the tech community, leaving an indelible mark on the careers of those fortunate enough to 
                        learn from him.</p>
                    </div>

            </div>
        </div>
    );
};

export default ImageAndText;

/* Under Leo's tutelage, students not only hone their technical prowess but also gain 
a deeper appreciation for the art and science of coding. His legacy as a mentor and educator continues to 
ripple through the tech community, leaving an indelible mark on the careers of those fortunate enough to 
learn from him. */