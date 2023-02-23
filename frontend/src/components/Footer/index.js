import React from 'react';
import './_styles.scss'

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <section className='linksContainer'>
                <a href="https://github.com/LSP20xx" rel="noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/lautaroperrotti" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.behance.net/lautaroperrott" rel="noreferrer" target="_blank"><i className="fab fa-behance-square"></i></a>
                <a href="https://twitter.com/lsperrotti" rel="noreferrer" target="_blank"><i className="fab fa-twitter-square"></i></a>
            </section>
        </footer>
    );
}
