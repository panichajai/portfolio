import React, { useState, useMemo, useEffect } from 'react';
import { ImageProfile } from './components/ImageProfile';
import { Title } from './components/Title';
import { CgPhone , CgMail , CgFacebook , CgMoreO ,FcGallery } from "react-icons/cg";

import './App.css';

const endpoint = 'https://sheetdb.io/api/v1/rskuexkzg2l2t';

function App() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav-con">
            <div className="logo">
              <a href="#">JAI</a>
            </div>
            <ul className="menu">
              <li><a href="#" className="header-nav-link">PORTFOLIO</a></li>
              <li><a href="#" className="header-nav-link">ABOUT</a></li>
              <li><a href="#" className="header-nav-link">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <section className="hero">
          <div className='leftPort'>
            <div className='profile-me'>
              <ImageProfile image="/src/assets/me.jpg"/>
            </div>
            <div className='data-me'>
              <Title title="Education">
                <p>Suan Sunandha Rajabhat University </p>
                <p>Faculty of Science and Technology </p>
                <p>Information Technology Program Junior</p>
              </Title>
              <div className="brix---inner-container-547px">
                <div className="brix---mg-bottom-40px">
                  <h3 className="h4 wavy-underline">My Skills</h3>
                  <div className="container-box">
                    <div className="box">
                      <p>- CSS</p>
                    </div>
                    <div className="box">
                      <p>- Figma</p>
                    </div>
                    <div className="box">
                      <p>- HTML</p>
                    </div>
                    <div className="box">
                      <p>- Canvas</p>
                    </div>
                    <div className="box">
                      <p>- PHP</p>
                    </div>
                    <div className="box">
                      <p>- Nomad</p>
                    </div>
                  </div>
                </div>
              </div>
              <Title title="Strengths">
                <p>Excellent people skills, responsible, and always striving for self-improvement. Open to learning and new experiences.</p>
              </Title>
            </div>
          </div>
          <div className='rightPort'>
            <div className='profile-me'>
              <div className='about-me'>
                <div className='text-about-me'>
                  <h1>Panicha Likitsupin</h1>
                  <div className="brix---inner-container-547px">
                    <div className="brix---mg-bottom-40px">
                      <div className="container-box">
                        <div className="box">
                          <p><CgPhone /> 065-263-9642</p>
                        </div>
                        <div className="box">
                          <p><CgFacebook /> Panicha Likitsupin</p>
                        </div>
                        <div className="box">
                          <p><CgMoreO /> littlejai</p>
                        </div>
                        <div className="box">
                          <p><CgMail /> panichaboomjail262@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Title title="position">
                    <p><FcGallery /> UX/UI Designer.</p>                  
                  </Title>
                </div>
              </div>
            </div>
            <div className='data-me'>
              <Title title="Experience">
                <p>Volunteering in a project to promote the potential of out-of-school children, fostering perseverance for learning towards happiness.</p>
              </Title>
              <Title title="Objective">
                  <p>- To learn and improve web design and application development skills.</p>
                  <p>- To practice and develop my teamwork skills.</p>
                  <p>- To develop myself to have knowledge and skills that meet the market demands.</p>
              </Title>
              <Title title="Performance">
                <p>- Creating a 3D model of the lotus throwing tradition in Samut Prakan Province in VR format.</p>
                <p>- Completed the Figma Design Training Course from Futureskill.</p>
                <p>- Designed a website in Figma for youth in Chonburi to access information and project status of the EESF under the KSF project.</p>
              </Title>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
