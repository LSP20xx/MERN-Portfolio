import React from "react";
import "./_styles.scss";
import photo from "../../images/Lautaro-Perrotti.jpg";

export const About = () => {
    return (
        <section className="aboutContainer">
            <h1 className="aboutTitle">About Me</h1>
            <img src={photo} alt="Lautaro Perroti is brunette and has long hair. He is smiling" className="aboutPhoto" />
            <p className="aboutParagraph">
                I am a highly motivated and skilled full-stack web developer with a passion for creating user-centered digital experiences. With experience in both computer science and psychology, I bring a unique perspective to web development and design.
            </p>
            <p className="aboutParagraph">
                My strong technical skills include proficiency in several programming languages, as well as experience working with modern front-end and back-end frameworks. I am also a self-taught with a strong work ethic, and I enjoy finding creative solutions to complex problems.
            </p>
            <p className="aboutParagraph">
                In addition to my technical abilities, I have excellent communication and collaboration skills. I am always willing to help others. Whether working independently or as part of a team, I am dedicated to delivering high-quality work on time.
            </p>
        </section>
    );
    };