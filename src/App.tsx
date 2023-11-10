import React from 'react';
import styled from 'styled-components';

import logoImg from './assets/img/logo.png';
import expertsImg from './assets/img/experts.png';
import learnersImg from './assets/img/learners.png';
import servicesImg from './assets/img/services.png';

const containerStyle = { maxWidth: '1240px', margin: '0 auto' };

function App() {
  return (
    <div>
      <div style={{ height: '90px', background: 'var(--c-body)' }}>
        <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <div>
            <img src={logoImg} alt="Logo"/>
            <span>Wisdocity</span>
          </div>
          <div>
            <a>
              <img src={expertsImg} alt="Icon"/>
              <span>Experts</span>
            </a>
            <a>
              <img src={learnersImg} alt="Icon"/>
              <span>Learners</span>
            </a>
          </div>
          <div>
            <button><img src={servicesImg} alt="Services"/></button>
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
          </div>
      </div>
      <div>
        <div style={{ ...containerStyle, height: '100%' }}>
          <p style={{ fontSize: '50px', margin: '200px 0' }}>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center' }}>
            <p><a>Learn Here</a></p>
            <p style={{ fontSize: '30px' }}>Lorem ipsum dolor sit amet consectetur</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '300px' }}>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div style={{ width: '300px' }}>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div style={{ width: '300px' }}>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={containerStyle}>
          <div></div>
          <div style={{ textAlign: 'center' }}>
            <p>Join the Best</p>
            <p style={{ fontSize: '30px' }}>Lorem ipsum dolor sit amet consectetur</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div>
              <button>Become an expert</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div style={containerStyle}>
          <div>
            <p style={{ fontSize: '30px' }}>Key features of Wisdocity</p>
            <p>Wisdocity offers a range of powerful features designed to enhance your learning experience:</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '25px' }}>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '25px' }}>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '25px' }}>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '25px' }}>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '25px' }}>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '25px' }}>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div style={containerStyle}>
          <ul style={{ display: 'flex', listStyle: 'none', columnGap: '40px', width: '100%', justifyContent: 'center' }}>
            <li>
                <a>Wisdocity.ai</a>
            </li>
            <li>
                <a>Learner</a>
            </li>
            <li>
                <a>Expert</a>
            </li>
            <li>
                <a>About Us</a>
            </li>
            <li>
                <a>Apps</a>
            </li>
          </ul>
          <p style={{ textAlign: 'center' }}>Copyright &copy; 2023 Wisdocity AI</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
