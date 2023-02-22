import React from 'react';
import './_styles.scss'

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <section className='linksContainer'>
                <i className="fab fa-github-square"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-behance-square"></i>
                <i className="fab fa-twitter-square"></i>
            </section>
        </footer>
    );
}
