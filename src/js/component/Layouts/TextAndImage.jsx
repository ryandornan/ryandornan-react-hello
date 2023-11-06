import React from "react";
import ImageAndText from "./ImageAndText";

const TextAndImage = () => {
    return (
        <div className="container my-3 py-3 d-flex justify-content-between">

                <div className="col-6 pr-3">
                    <h2>The Legend Of CodeMaster</h2>
                    <p class="mt-3"> Little did the world know, Leo Muzi harbored a secret identity beyond his role as a software bootcamp 
                        instructor. By night, he transformed into CodeMaster, a legendary superhero armed with an arsenal of 
                        programming powers. With the ability to decipher even the most cryptic of code, CodeMaster safeguarded 
                        the digital realm from looming threats.
                    </p>

                    <p>CodeMaster's classes weren't just educational sessions; they were epic quests for knowledge and mastery. 
                        His infectious passion for coding became a beacon of inspiration for fledgling developers, igniting a fire 
                        within them to explore the boundless possibilities of software creation. With a heart full of empathy, 
                        CodeMaster stood by his students, guiding them through the darkest coding challenges and rejoicing in 
                        their victories.</p>
                </div>

                <div className="col-5 my-auto">
                <img className="w-100 shadow p-3 mb-5 bg-body rounded" src="https://picsum.photos/300/150?random=5" alt="" />
                </div>

        </div>
        
    );
};

export default TextAndImage;